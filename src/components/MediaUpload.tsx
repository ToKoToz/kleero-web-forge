
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Upload } from 'lucide-react';
import MediaManager from './admin/MediaManager';

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
        // Vérifier la taille du fichier (limite à 50MB pour les vidéos)
        const maxSize = file.type.startsWith('video/') ? 50 * 1024 * 1024 : 10 * 1024 * 1024;
        if (file.size > maxSize) {
          throw new Error(`Le fichier ${file.name} est trop volumineux. Limite: ${file.type.startsWith('video/') ? '50MB' : '10MB'}`);
        }

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
      toast.error(error instanceof Error ? error.message : 'Erreur lors de l\'upload');
    } finally {
      setIsUploading(false);
      event.target.value = '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
        <div className="text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <Label htmlFor="media-upload" className="cursor-pointer">
            <span className="text-lg font-medium text-gray-900 hover:text-gray-700">
              Cliquez pour uploader des médias
            </span>
            <Input
              id="media-upload"
              type="file"
              multiple
              accept={accept}
              onChange={handleFileUpload}
              disabled={isUploading}
              className="hidden"
            />
          </Label>
          <p className="text-sm text-gray-500 mt-2">
            Images (JPG, PNG, GIF, WebP) jusqu'à 10MB<br />
            Vidéos (MP4, WebM, MOV) jusqu'à 50MB
          </p>
          {isUploading && (
            <p className="text-sm text-blue-600 mt-2 font-medium">
              Upload en cours...
            </p>
          )}
        </div>
      </div>

      <MediaManager 
        medias={medias} 
        onMediasChange={onMediasChange} 
        showControls={true}
      />
    </div>
  );
};

export default MediaUpload;
