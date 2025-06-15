
import React, { useState, useRef, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
import VideoPlayer, { VideoPlayerRef } from './VideoPlayer';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';

interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  name: string;
}

interface MediaSliderProps {
  medias: MediaItem[];
}

const MediaSlider: React.FC<MediaSliderProps> = ({ medias }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const videoRefs = useRef<{ [key: string]: VideoPlayerRef }>({});
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Navigation clavier
  useKeyboardNavigation({
    onPrevious: () => api?.scrollPrev(),
    onNext: () => api?.scrollNext(),
    onToggleAutoPlay: () => setIsAutoPlay(!isAutoPlay),
    isEnabled: medias.length > 1
  });

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && api && medias.length > 1) {
      autoPlayIntervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 5000);
    } else {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlay, api, medias.length]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      
      // Arrêter toutes les vidéos sauf celle de l'index actuel
      Object.keys(videoRefs.current).forEach((mediaId) => {
        const mediaIndex = medias.findIndex(m => m.id === mediaId);
        if (mediaIndex !== newIndex && videoRefs.current[mediaId]) {
          videoRefs.current[mediaId].stopVideo();
        }
      });
      
      setCurrentIndex(newIndex);
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, medias]);

  const registerVideoRef = (mediaId: string, ref: VideoPlayerRef | null) => {
    if (ref) {
      videoRefs.current[mediaId] = ref;
    }
  };

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const resetToFirst = () => {
    if (api) {
      api.scrollTo(0);
    }
  };

  const openFullscreen = (mediaUrl: string) => {
    window.open(mediaUrl, '_blank');
  };

  if (!medias || medias.length === 0) {
    return null;
  }

  const currentMedia = medias[currentIndex];

  return (
    <div className="space-y-6">
      {/* Header avec contrôles */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="font-semibold text-xl">Médias</h3>
          <Badge variant="outline" className="text-sm">
            {currentIndex + 1} / {medias.length}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
          {medias.length > 1 && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAutoPlay}
                className="gap-2"
              >
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isAutoPlay ? 'Pause' : 'Auto'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetToFirst}
                className="gap-2"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowThumbnails(!showThumbnails)}
            className="gap-2"
          >
            <ImageIcon className="w-4 h-4" />
            {showThumbnails ? 'Masquer' : 'Voir'} miniatures
          </Button>
        </div>
      </div>

      {/* Slider principal */}
      <div className="relative">
        <Carousel 
          className="w-full" 
          opts={{ 
            loop: true,
            align: "center"
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {medias.map((media, index) => (
              <CarouselItem key={media.id}>
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg group">
                  <div className="aspect-video relative">
                    {media.type === 'image' ? (
                      <img
                        src={media.url}
                        alt={media.name}
                        className="w-full h-full object-contain cursor-zoom-in"
                        onClick={() => openFullscreen(media.url)}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : (
                      <VideoPlayer
                        ref={(ref) => registerVideoRef(media.id, ref)}
                        src={media.url}
                        className="w-full h-full"
                      />
                    )}
                    
                    {/* Overlay d'erreur */}
                    <div className="hidden flex flex-col items-center justify-center text-gray-500 h-full">
                      <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
                      <span className="text-lg font-medium">Erreur de chargement</span>
                      <span className="text-sm text-muted-foreground">Le média n'a pas pu être chargé</span>
                    </div>

                    {/* Badge du type de média */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant={media.type === 'image' ? 'default' : 'secondary'}
                        className="bg-white/90 text-gray-900 shadow-md backdrop-blur-sm"
                      >
                        {media.type === 'image' ? (
                          <>
                            <ImageIcon className="w-3 h-3 mr-1" />
                            Image
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3 mr-1" />
                            Vidéo
                          </>
                        )}
                      </Badge>
                    </div>

                    {/* Bouton plein écran pour les images */}
                    {media.type === 'image' && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => openFullscreen(media.url)}
                          className="bg-white/90 hover:bg-white shadow-md backdrop-blur-sm"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}

                    {/* Titre du média */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <h4 className="text-white text-lg font-semibold truncate">
                        {media.name}
                      </h4>
                      <p className="text-white/80 text-sm mt-1">
                        {media.type === 'image' ? 'Image' : 'Vidéo'} • Position {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation améliorée */}
          {medias.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 w-12 h-12 z-10" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 w-12 h-12 z-10" />
            </>
          )}
        </Carousel>

        {/* Indicateurs de pagination améliorés */}
        {medias.length > 1 && (
          <div className="flex justify-center space-x-2 mt-6">
            {medias.map((media, index) => (
              <button
                key={index}
                className={`relative group transition-all duration-200 ${
                  index === currentIndex 
                    ? 'w-8 h-3' 
                    : 'w-3 h-3 hover:scale-110'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Aller au média ${index + 1}`}
              >
                <div 
                  className={`w-full h-full rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-primary' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    {media.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Barre de progression pour l'auto-play */}
        {isAutoPlay && medias.length > 1 && (
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-100 ease-linear"
              style={{
                animation: 'progressBar 5s linear infinite'
              }}
            />
          </div>
        )}
      </div>

      {/* Vignettes (thumbnails) */}
      {showThumbnails && medias.length > 1 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Aperçu rapide</h4>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {medias.map((media, index) => (
              <button
                key={media.id}
                onClick={() => goToSlide(index)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                  index === currentIndex 
                    ? 'border-primary shadow-md' 
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                {media.type === 'image' ? (
                  <img
                    src={media.url}
                    alt={media.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <Play className="w-4 h-4 text-gray-500" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 flex items-end">
                  <span className="text-white text-xs p-1 truncate w-full">
                    {index + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Informations du média actuel */}
      <div className="text-center space-y-2">
        <h4 className="font-medium">{currentMedia.name}</h4>
        <p className="text-muted-foreground text-sm">
          {medias.length} média{medias.length > 1 ? 's' : ''} disponible{medias.length > 1 ? 's' : ''}
          {medias.length > 1 && (
            <span className="mx-2">•</span>
          )}
          {medias.length > 1 && 'Utilisez les flèches, cliquez sur les indicateurs ou les vignettes pour naviguer'}
        </p>
        
        {/* Raccourcis clavier */}
        {medias.length > 1 && (
          <div className="text-xs text-muted-foreground">
            <span className="font-mono bg-gray-100 px-1 rounded">←</span> et{' '}
            <span className="font-mono bg-gray-100 px-1 rounded">→</span> pour naviguer
            {' • '}
            <span className="font-mono bg-gray-100 px-1 rounded">Espace</span> pour pause/lecture automatique
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes progressBar {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>
    </div>
  );
};

export default MediaSlider;
