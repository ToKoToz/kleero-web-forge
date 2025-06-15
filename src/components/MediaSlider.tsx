
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
import { Image as ImageIcon } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

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
  const videoRefs = useRef<{ [key: string]: { stopVideo: () => void } }>({});

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
    return () => api.off('select', onSelect);
  }, [api, medias]);

  const registerVideoRef = (mediaId: string, ref: any) => {
    if (ref) {
      videoRefs.current[mediaId] = ref;
    }
  };

  if (!medias || medias.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl">Médias</h3>
        <Badge variant="outline" className="text-sm">
          {currentIndex + 1} / {medias.length}
        </Badge>
      </div>

      <div className="relative">
        <Carousel 
          className="w-full" 
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent>
            {medias.map((media, index) => (
              <CarouselItem key={media.id}>
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg">
                  <div className="aspect-video">
                    {media.type === 'image' ? (
                      <img
                        src={media.url}
                        alt={media.name}
                        className="w-full h-full object-contain"
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
                    <div className="hidden flex flex-col items-center justify-center text-gray-500 h-full">
                      <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
                      <span className="text-lg font-medium">Erreur de chargement</span>
                      <span className="text-sm text-muted-foreground">Le média n'a pas pu être chargé</span>
                    </div>
                  </div>

                  {/* Badge du type de média */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={media.type === 'image' ? 'default' : 'secondary'}
                      className="bg-white/90 text-gray-900 shadow-md"
                    >
                      {media.type === 'image' ? '📷 Image' : '🎬 Vidéo'}
                    </Badge>
                  </div>

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
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation améliorée */}
          {medias.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 w-12 h-12" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 w-12 h-12" />
            </>
          )}
        </Carousel>

        {/* Indicateurs de pagination */}
        {medias.length > 1 && (
          <div className="flex justify-center space-x-2 mt-6">
            {medias.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Informations supplémentaires */}
      <div className="text-center">
        <p className="text-muted-foreground">
          {medias.length} média{medias.length > 1 ? 's' : ''} disponible{medias.length > 1 ? 's' : ''}
        </p>
        {medias.length > 1 && (
          <p className="text-sm text-muted-foreground mt-1">
            Utilisez les flèches ou cliquez sur les indicateurs pour naviguer
          </p>
        )}
      </div>
    </div>
  );
};

export default MediaSlider;
