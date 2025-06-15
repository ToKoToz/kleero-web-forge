
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
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <DialogTitle className="text-3xl font-bold leading-tight">
                {automation.details_title || automation.title}
              </DialogTitle>
              <div className="flex gap-3">
                <Badge className={`${getComplexityColor(automation.complexity)} px-3 py-1`}>
                  {automation.complexity}
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  ⏱️ {automation.time_gain}
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Description détaillée */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-xl mb-4 text-blue-900">📋 Description</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {automation.details_description || automation.description}
            </p>
          </div>

          {/* Bénéfices */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <h3 className="font-semibold text-xl mb-4 text-green-900">🎯 Bénéfices clés</h3>
            <ul className="space-y-3">
              {automation.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100">
            <h3 className="font-semibold text-xl mb-4 text-purple-900">🛠️ Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {automation.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Vidéo YouTube/externe */}
          {automation.details_video_url && (
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-100">
              <h3 className="font-semibold text-xl mb-4 text-red-900">🎥 Vidéo de démonstration</h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center shadow-inner">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(automation.details_video_url, '_blank')}
                  className="bg-white hover:bg-gray-50 border-2"
                >
                  <Play className="w-5 h-5 mr-3" />
                  Voir la vidéo externe
                </Button>
              </div>
            </div>
          )}

          {/* Slider des médias uploadés */}
          {medias.length > 0 && (
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200">
              <MediaSlider medias={medias} />
            </div>
          )}

          {/* CTA */}
          <div className="border-t-2 border-gray-200 pt-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white shadow-xl">
              <h3 className="font-bold text-2xl mb-3">💡 Intéressé par cette automatisation ?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Contactez-nous pour discuter de l'implémentation de cette solution dans votre entreprise.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AutomationDetailsDialog;
