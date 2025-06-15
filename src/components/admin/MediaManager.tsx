
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { X, ArrowUp, ArrowDown, GripVertical, Play, Image as ImageIcon } from 'lucide-react';
import VideoPlayer from '../VideoPlayer';

interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  name: string;
}

interface MediaManagerProps {
  medias: MediaItem[];
  onMediasChange: (medias: MediaItem[]) => void;
  showControls?: boolean;
}

const MediaManager: React.FC<MediaManagerProps> = ({ 
  medias, 
  onMediasChange, 
  showControls = false 
}) => {
  const removeMedia = async (mediaToRemove: MediaItem) => {
    try {
      // Supprimer de Supabase Storage seulement si c'est un fichier uploadé
      if (mediaToRemove.id.startsWith('automation-media/') || !mediaToRemove.id.startsWith('existing-')) {
        const filePath = mediaToRemove.id.startsWith('automation-media/') 
          ? mediaToRemove.id 
          : `automation-media/${mediaToRemove.id}`;
        
        const { error } = await supabase.storage
          .from('automation-media')
          .remove([filePath]);

        if (error) {
          console.error('Erreur suppression storage:', error);
        }
      }

      // Retirer de la liste locale
      onMediasChange(medias.filter(media => media.id !== mediaToRemove.id));
      toast.success('Média supprimé');
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  const moveMedia = (index: number, direction: 'up' | 'down') => {
    const newMedias = [...medias];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newMedias.length) {
      [newMedias[index], newMedias[targetIndex]] = [newMedias[targetIndex], newMedias[index]];
      onMediasChange(newMedias);
    }
  };

  if (medias.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Médias ({medias.length})</h4>
        {showControls && (
          <p className="text-sm text-muted-foreground">
            Utilisez les flèches pour réorganiser
          </p>
        )}
      </div>
      
      <div className={`grid gap-4 ${showControls ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
        {medias.map((media, index) => (
          <div key={media.id} className={`relative group border rounded-lg overflow-hidden ${showControls ? 'p-4' : ''}`}>
            {showControls && (
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <GripVertical className="w-4 h-4 text-muted-foreground" />
                  <Badge variant={media.type === 'image' ? 'default' : 'secondary'}>
                    {media.type === 'image' ? 'Image' : 'Vidéo'}
                  </Badge>
                </div>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => moveMedia(index, 'up')}
                    disabled={index === 0}
                    className="h-7 w-7 p-0"
                  >
                    <ArrowUp className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => moveMedia(index, 'down')}
                    disabled={index === medias.length - 1}
                    className="h-7 w-7 p-0"
                  >
                    <ArrowDown className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeMedia(media)}
                    className="h-7 w-7 p-0"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            )}

            <div className="aspect-video bg-gray-100 rounded overflow-hidden">
              {media.type === 'image' ? (
                <img
                  src={media.url}
                  alt={media.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : (
                <VideoPlayer
                  src={media.url}
                  className="w-full h-full"
                />
              )}
              <div className="hidden flex flex-col items-center justify-center text-gray-500 h-full">
                <ImageIcon className="w-8 h-8 mb-2" />
                <span className="text-xs">Erreur de chargement</span>
              </div>
            </div>

            {!showControls && (
              <>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => removeMedia(media)}
                    className="w-6 h-6 p-0"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2">
                  <Badge variant={media.type === 'image' ? 'default' : 'secondary'} className="text-xs mb-1">
                    {media.type === 'image' ? 'Image' : 'Vidéo'}
                  </Badge>
                  <p className="text-xs truncate">{media.name}</p>
                </div>
              </>
            )}

            {showControls && (
              <div className="mt-2">
                <p className="text-sm font-medium truncate">{media.name}</p>
                <p className="text-xs text-muted-foreground">Position: {index + 1}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaManager;
