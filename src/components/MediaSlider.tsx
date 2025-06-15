
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Play, Image as ImageIcon } from 'lucide-react';

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
  if (!medias || medias.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Médias</h3>
      <Carousel className="w-full max-w-2xl mx-auto">
        <CarouselContent>
          {medias.map((media) => (
            <CarouselItem key={media.id}>
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <div className="aspect-video flex items-center justify-center">
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
                    <video
                      src={media.url}
                      controls
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLVideoElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  )}
                  <div className="hidden flex flex-col items-center justify-center text-gray-500">
                    <ImageIcon className="w-12 h-12 mb-2" />
                    <span>Erreur de chargement</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant={media.type === 'image' ? 'default' : 'secondary'}>
                    {media.type === 'image' ? 'Image' : 'Vidéo'}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium truncate">{media.name}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {medias.length > 1 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
      <div className="text-center text-sm text-muted-foreground">
        {medias.length} média{medias.length > 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default MediaSlider;
