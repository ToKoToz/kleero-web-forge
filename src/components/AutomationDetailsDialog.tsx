
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import MediaSlider from './MediaSlider';

interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  name: string;
}

interface Automation {
  id: string;
  title: string;
  description: string;
  complexity: string;
  time_gain: string;
  benefits: string[];
  tags: string[];
  details_title?: string;
  details_description?: string;
  details_video_url?: string;
  details_images?: string[];
}

interface AutomationDetailsDialogProps {
  automation: Automation | null;
  isOpen: boolean;
  onClose: () => void;
}

const AutomationDetailsDialog: React.FC<AutomationDetailsDialogProps> = ({
  automation,
  isOpen,
  onClose,
}) => {
  if (!automation) return null;

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Convertir les URLs en objets MediaItem pour le slider
  const medias: MediaItem[] = automation.details_images?.map((url, index) => ({
    id: `media-${index}`,
    url,
    type: url.includes('video') || url.includes('.mp4') || url.includes('.webm') || url.includes('.mov') ? 'video' as const : 'image' as const,
    name: `Média ${index + 1}`
  })) || [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <DialogTitle className="text-2xl">
                {automation.details_title || automation.title}
              </DialogTitle>
              <div className="flex gap-2">
                <Badge className={getComplexityColor(automation.complexity)}>
                  {automation.complexity}
                </Badge>
                <Badge variant="outline">
                  {automation.time_gain}
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description détaillée */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {automation.details_description || automation.description}
            </p>
          </div>

          {/* Bénéfices */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Bénéfices clés</h3>
            <ul className="space-y-2">
              {automation.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {automation.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Vidéo YouTube/externe */}
          {automation.details_video_url && (
            <div>
              <h3 className="font-semibold text-lg mb-3">Vidéo de démonstration externe</h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <Button
                  variant="outline"
                  onClick={() => window.open(automation.details_video_url, '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Voir la vidéo
                </Button>
              </div>
            </div>
          )}

          {/* Slider des médias uploadés */}
          {medias.length > 0 && (
            <MediaSlider medias={medias} />
          )}

          {/* CTA */}
          <div className="border-t pt-6">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Intéressé par cette automatisation ?</h3>
              <p className="text-muted-foreground mb-4">
                Contactez-nous pour discuter de l'implémentation de cette solution dans votre entreprise.
              </p>
              <Button>
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AutomationDetailsDialog;
