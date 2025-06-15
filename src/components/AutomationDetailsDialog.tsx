
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, Target, CheckCircle, X, FileText, Award, Wrench, Video } from 'lucide-react';
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
      case 'Simple': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Avancé': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="relative bg-background rounded-lg border overflow-hidden">
          {/* Close button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 h-8 w-8 rounded-md"
          >
            <X className="w-4 h-4" />
          </Button>

          <div className="p-6 overflow-y-auto max-h-[90vh]">
            <DialogHeader className="space-y-4 mb-6">
              <div className="text-center space-y-3">
                <DialogTitle className="text-2xl font-bold">
                  {automation.details_title || automation.title}
                </DialogTitle>
                
                <div className="flex justify-center gap-3 flex-wrap">
                  <Badge className={`${getComplexityColor(automation.complexity)} px-3 py-1 text-sm font-medium border`}>
                    <Target className="w-3 h-3 mr-1" />
                    {automation.complexity}
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
                    <Clock className="w-3 h-3 mr-1" />
                    {automation.time_gain}
                  </Badge>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* Description */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Description</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {automation.details_description || automation.description}
                </p>
              </div>

              {/* Bénéfices */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Bénéfices clés</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {automation.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {automation.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Vidéo externe */}
              {automation.details_video_url && (
                <div className="border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                      <Video className="w-4 h-4 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Vidéo de démonstration</h3>
                  </div>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Button
                      onClick={() => window.open(automation.details_video_url, '_blank')}
                      className="gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Voir la vidéo
                    </Button>
                  </div>
                </div>
              )}

              {/* Slider des médias */}
              {medias.length > 0 && (
                <div className="border border-border rounded-lg p-6">
                  <MediaSlider medias={medias} />
                </div>
              )}

              {/* CTA Final */}
              <div className="border border-primary/20 bg-primary/5 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Intéressé par cette automatisation ?
                </h3>
                <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                  Contactez-nous pour discuter de l'implémentation de cette solution dans votre entreprise.
                </p>
                <Button className="gap-2">
                  Demander un devis gratuit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AutomationDetailsDialog;
