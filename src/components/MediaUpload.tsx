
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Upload, X, Play, Image as ImageIcon } from 'lucide-react';

interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  name: string;
}

interface MediaUploadProps {
  medias: MediaItem[];
  onMediasChange: (medias: MediaItem[]) => void;
  accept?: string;
}

const MediaUpload: React.FC<MediaUploadProps> = ({ 
  medias, 
  onMediasChange, 
  accept = "image/*,video/*" 
}) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    setIsUploading(true);

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `automation-media/${fileName}`;

        const { data, error } = await supabase.storage
          .from('automation-media')
          .upload(filePath, file);

        if (error) {
          console.error('Erreur upload:', error);
          throw error;
        }

        const { data: urlData } = supabase.storage
          .from('automation-media')
          .getPublicUrl(filePath);

        const mediaType = file.type.startsWith('video/') ? 'video' : 'image';

        return {
          id: fileName,
          url: urlData.publicUrl,
          type: mediaType as 'image' | 'video',
          name: file.name
        };
      });

      const uploadedMedias = await Promise.all(uploadPromises);
      onMediasChange([...medias, ...uploadedMedias]);
      toast.success(`${uploadedMedias.length} fichier(s) uploadé(s)`);
    } catch (error) {
      console.error('Erreur lors de l\'upload:', error);
      toast.error('Erreur lors de l\'upload');
    } finally {
      setIsUploading(false);
      event.target.value = '';
    }
  };

  const removeMedia = async (mediaToRemove: MediaItem) => {
    try {
      // Supprimer de Supabase Storage
      const filePath = `automation-media/${mediaToRemove.id}`;
      const { error } = await supabase.storage
        .from('automation-media')
        .remove([filePath]);

      if (error) {
        console.error('Erreur suppression:', error);
      }

      // Retirer de la liste locale
      onMediasChange(medias.filter(media => media.id !== mediaToRemove.id));
      toast.success('Fichier supprimé');
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="media-upload">Upload de médias</Label>
        <div className="mt-2">
          <Input
            id="media-upload"
            type="file"
            multiple
            accept={accept}
            onChange={handleFileUpload}
            disabled={isUploading}
            className="cursor-pointer"
          />
        </div>
        {isUploading && (
          <p className="text-sm text-muted-foreground mt-2">
            Upload en cours...
          </p>
        )}
      </div>

      {medias.length > 0 && (
        <div>
          <Label>Médias uploadés ({medias.length})</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            {medias.map((media) => (
              <div key={media.id} className="relative group border rounded-lg overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
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
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <Play className="w-8 h-8 mb-2" />
                      <span className="text-xs">Vidéo</span>
                    </div>
                  )}
                  <div className="hidden flex flex-col items-center justify-center text-gray-500">
                    <ImageIcon className="w-8 h-8 mb-2" />
                    <span className="text-xs">Erreur</span>
                  </div>
                </div>
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
                  <Badge variant={media.type === 'image' ? 'default' : 'secondary'} className="text-xs">
                    {media.type === 'image' ? 'Image' : 'Vidéo'}
                  </Badge>
                  <p className="text-xs truncate mt-1">{media.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaUpload;
