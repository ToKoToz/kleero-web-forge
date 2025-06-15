
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Sparkles, Clock, Target, CheckCircle, X } from 'lucide-react';
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
      case 'Simple': return 'bg-green-500/10 text-green-700 border-green-500/20';
      case 'Intermédiaire': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'Avancé': return 'bg-red-500/10 text-red-700 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-500/20';
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
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0 border-0 bg-transparent">
        <div className="relative bg-gradient-to-br from-background via-background to-purple-500/5 rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Close button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90 hover:scale-110 transition-all duration-300"
          >
            <X className="w-4 h-4" />
          </Button>

          <div className="relative z-10 p-8 overflow-y-auto max-h-[90vh] scrollbar-thin">
            <DialogHeader className="space-y-6 mb-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full text-purple-600 font-medium text-sm border border-purple-500/20">
                  <Sparkles className="w-4 h-4" />
                  Automatisation Intelligente
                </div>
                
                <DialogTitle className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                    {automation.details_title || automation.title}
                  </span>
                </DialogTitle>
                
                <div className="flex justify-center gap-4 flex-wrap">
                  <Badge className={`${getComplexityColor(automation.complexity)} px-4 py-2 text-sm font-medium border`}>
                    <Target className="w-4 h-4 mr-2" />
                    {automation.complexity}
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-purple-500/30">
                    <Clock className="w-4 h-4 mr-2" />
                    {automation.time_gain}
                  </Badge>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-8">
              {/* Description */}
              <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5" />
                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📋</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Description
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {automation.details_description || automation.description}
                  </p>
                </div>
              </div>

              {/* Bénéfices */}
              <div className="relative overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-emerald-500/5" />
                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Bénéfices clés
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {automation.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-green-500/20 hover:bg-background/70 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-base font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5" />
                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🛠️</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Technologies
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {automation.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="px-4 py-2 text-sm font-medium bg-background/50 border border-blue-500/20 hover:bg-background/70 hover:scale-105 transition-all duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vidéo externe */}
              {automation.details_video_url && (
                <div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-pink-500/5" />
                  <div className="relative p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🎥</span>
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        Vidéo de démonstration
                      </h3>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center shadow-inner border border-gray-200">
                      <Button
                        size="lg"
                        onClick={() => window.open(automation.details_video_url, '_blank')}
                        className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        <Play className="w-6 h-6 mr-3" />
                        Voir la vidéo externe
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Slider des médias */}
              {medias.length > 0 && (
                <div className="relative overflow-hidden rounded-2xl border border-gray-500/20 bg-gradient-to-r from-gray-500/10 to-slate-500/10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 via-transparent to-slate-500/5" />
                  <div className="relative p-8">
                    <MediaSlider medias={medias} />
                  </div>
                </div>
              )}

              {/* CTA Final */}
              <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10" />
                <div className="relative p-10 text-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 animate-pulse-glow">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Intéressé par cette automatisation ?
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                      Contactez-nous pour discuter de l'implémentation de cette solution dans votre entreprise et découvrir comment elle peut transformer vos processus.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <Sparkles className="w-5 h-5 mr-3" />
                      Demander un devis gratuit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AutomationDetailsDialog;
