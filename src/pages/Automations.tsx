import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Share2, MailCheck, ArrowRight, Clock, Target, TrendingUp, Users, CheckCircle, Bot, Workflow, Gauge } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import AutomationDetailsDialog from '@/components/AutomationDetailsDialog';

interface Automation {
  id: string;
  title: string;
  description: string;
  complexity: string;
  time_gain: string;
  benefits: string[];
  tags: string[];
  icon_name: string;
  is_public: boolean;
  is_active: boolean;
  details_title?: string;
  details_description?: string;
  details_video_url?: string;
  details_images?: string[];
}

const stats = [
  { icon: <Clock className="w-6 h-6" />, value: '500+', label: 'Heures économisées/mois', color: 'text-blue-600' },
  { icon: <Target className="w-6 h-6" />, value: '95%', label: 'Taux de réussite', color: 'text-green-600' },
  { icon: <TrendingUp className="w-6 h-6" />, value: '3x', label: 'Amélioration moyenne', color: 'text-purple-600' },
  { icon: <Users className="w-6 h-6" />, value: '200+', label: 'Entreprises automatisées', color: 'text-orange-600' }
];

const processSteps = [
  {
    number: '01',
    title: 'Analyse de vos processus',
    description: 'Nous étudions vos workflows actuels pour identifier les opportunités d\'automatisation',
    icon: <Gauge className="w-6 h-6" />
  },
  {
    number: '02',
    title: 'Conception sur mesure',
    description: 'Développement d\'une solution personnalisée adaptée à vos besoins spécifiques',
    icon: <Bot className="w-6 h-6" />
  },
  {
    number: '03',
    title: 'Déploiement et formation',
    description: 'Mise en place progressive avec formation de vos équipes pour une adoption réussie',
    icon: <Workflow className="w-6 h-6" />
  }
];

const getComplexityColor = (complexity: string) => {
  switch (complexity) {
    case 'Simple': return 'bg-green-100 text-green-800';
    case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
    case 'Avancé': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Share2': return <Share2 className="w-8 h-8 text-primary" />;
    case 'MailCheck': return <MailCheck className="w-8 h-8 text-primary" />;
    case 'Zap': return <Zap className="w-8 h-8 text-primary" />;
    case 'Bot': return <Bot className="w-8 h-8 text-primary" />;
    case 'Workflow': return <Workflow className="w-8 h-8 text-primary" />;
    default: return <Zap className="w-8 h-8 text-primary" />;
  }
};

const Automations = () => {
  const [automations, setAutomations] = useState<Automation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchAutomations();
  }, []);

  const fetchAutomations = async () => {
    try {
      const { data, error } = await supabase
        .from('automations')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erreur:', error);
        toast.error('Erreur lors du chargement des automatisations');
        return;
      }

      setAutomations(data || []);
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors du chargement des automatisations');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAutomationClick = (automation: Automation) => {
    setSelectedAutomation(automation);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-60 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium animate-bounce-gentle">
              🚀 Automatisation Intelligente
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="gradient-text">Automatisez</span> vos processus,
            <br />
            <span className="text-foreground">Multipliez votre efficacité</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Découvrez comment nos solutions d'automatisation peuvent transformer votre entreprise 
            et libérer le potentiel de vos équipes.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in-up animate-delayed-2">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center p-6 hover-lift glass-card animate-bounce-in animate-delayed-3" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-background mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Title for Examples */}
        <div className="text-center mb-16 animate-fade-in-up animate-delayed-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exemples d'<span className="gradient-text">Automatisations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Voici quelques exemples concrets de ce que nous pouvons automatiser pour optimiser votre productivité.
          </p>
        </div>

        {/* Automation Examples */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="text-lg text-muted-foreground">Chargement des automatisations...</div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3 mb-20">
            {automations.map((automation, index) => (
              <Card key={automation.id} className="group bg-background/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {getIconComponent(automation.icon_name)}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={`text-xs ${getComplexityColor(automation.complexity)}`}>
                        {automation.complexity}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {automation.time_gain}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {automation.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{automation.description}</p>
                  
                  {/* Benefits */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Bénéfices clés :</h4>
                    <ul className="space-y-1">
                      {automation.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {automation.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {automation.is_public ? (
                    <Button 
                      className="w-full group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                      onClick={() => handleAutomationClick(automation)}
                    >
                      Découvrir cette automatisation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  ) : (
                    <div className="w-full py-2 text-center text-sm text-muted-foreground border border-dashed border-muted rounded-md">
                      Automatisation confidentielle
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Process Section - keep existing code */}
        <div className="mb-20 animate-fade-in-up animate-delayed-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre <span className="gradient-text">Processus</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche méthodique pour garantir le succès de vos automatisations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative group animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                <Card className="h-full p-6 hover-lift bg-background/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - keep existing code */}
        <div className="text-center animate-fade-in-up animate-delayed-8">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-primary/5 via-background to-accent/5 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-lg">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Prêt à <span className="gradient-text">automatiser</span> votre entreprise ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discutons de vos besoins et découvrons ensemble comment l'automatisation peut transformer vos processus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-glow">
                  Consultation gratuite
                  <Zap className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-medium hover:bg-primary/5 hover:border-primary/50">
                  Voir nos tarifs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Floating decorative elements - keep existing code */}
      <div className="fixed top-1/4 left-8 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="fixed top-2/3 right-12 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      <div className="fixed bottom-1/3 left-16 w-2.5 h-2.5 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '5s' }} />

      {/* Automation Details Dialog */}
      <AutomationDetailsDialog
        automation={selectedAutomation}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Automations;
