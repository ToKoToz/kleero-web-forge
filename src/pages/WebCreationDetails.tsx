
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Monitor,
  ShoppingCart,
  Globe,
  Users,
  TrendingUp,
  Shield
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const features = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design Sur Mesure",
    description: "Interface unique qui reflète parfaitement votre identité de marque"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive Design",
    description: "Adaptation parfaite sur tous les appareils et toutes les tailles d'écran"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Optimisée",
    description: "Chargement ultra-rapide et expérience utilisateur fluide"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sécurité Renforcée",
    description: "Protection avancée contre les menaces et respect des normes"
  }
];

const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Sites Vitrines",
    description: "Présentez votre entreprise avec élégance et professionnalisme",
    features: ["Design moderne", "SEO intégré", "Formulaires de contact", "Galerie photos"]
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce",
    description: "Boutiques en ligne complètes pour maximiser vos ventes",
    features: ["Paiement sécurisé", "Gestion stocks", "Analytics ventes", "Mobile-first"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Applications Web",
    description: "Solutions complexes et sur-mesure pour vos besoins spécifiques",
    features: ["Architecture scalable", "API personnalisées", "Dashboard admin", "Intégrations"]
  }
];

const process = [
  {
    step: "01",
    title: "Analyse & Stratégie",
    description: "Nous analysons vos besoins, votre marché et définissons ensemble la stratégie digitale optimale."
  },
  {
    step: "02",
    title: "Design & Prototypage",
    description: "Création de maquettes interactives et validation de l'expérience utilisateur."
  },
  {
    step: "03",
    title: "Développement",
    description: "Codage avec les dernières technologies pour garantir performance et évolutivité."
  },
  {
    step: "04",
    title: "Tests & Déploiement",
    description: "Tests approfondis et mise en ligne avec accompagnement personnalisé."
  }
];

const WebCreationDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="space-y-20">
          {/* Header Section */}
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm border border-primary/20">
              <Code className="w-4 h-4" />
              Service Spécialisé
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Création Web</span>
                <br />
                <span className="text-foreground">sur Mesure</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transformez votre vision en réalité digitale avec des solutions web innovantes, 
                performantes et parfaitement adaptées à vos besoins métier.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group relative overflow-hidden bg-gradient-to-br from-background/80 to-primary/5 backdrop-blur-sm border-primary/20 hover-lift"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services Detail */}
          <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Nos Solutions Web</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Des sites vitrines aux applications complexes, nous créons des expériences digitales exceptionnelles
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className="group relative overflow-hidden bg-gradient-to-br from-background/80 to-primary/5 backdrop-blur-sm border-primary/20 hover-lift"
                  style={{ animationDelay: `${0.2 + 0.1 * index}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Notre Processus</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Une méthode éprouvée pour garantir le succès de votre projet web
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div 
                  key={step.step}
                  className="relative group"
                  style={{ animationDelay: `${0.6 + 0.1 * index}s` }}
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-background/80 to-primary/5 backdrop-blur-sm border-primary/20 hover-lift h-full">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                          {step.step}
                        </div>
                        <h3 className="font-bold text-lg">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Connector */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Technologies Modernes</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Nous utilisons les dernières technologies pour garantir performance, sécurité et évolutivité
              </p>
            </div>

            <Card className="relative overflow-hidden bg-gradient-to-br from-background/80 to-primary/5 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl">
                      <Code className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="font-bold text-lg">Frontend</h3>
                    <p className="text-muted-foreground text-sm">React, Vue.js, Angular, Tailwind CSS</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl">
                      <Users className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg">Backend</h3>
                    <p className="text-muted-foreground text-sm">Node.js, Python, PHP, Bases de données</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl">
                      <TrendingUp className="w-8 h-8 text-purple-500" />
                    </div>
                    <h3 className="font-bold text-lg">Déploiement</h3>
                    <p className="text-muted-foreground text-sm">Cloud, CDN, SSL, Monitoring</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Prêt à créer votre site web sur mesure ?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Discutons de votre projet et créons ensemble une expérience web qui marque les esprits et génère des résultats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-3 rounded-full shadow-primary/25 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <NavLink to="/contact">
                      Commencer mon projet
                      <Sparkles className="w-5 h-5 ml-2" />
                    </NavLink>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300">
                    <NavLink to="/services">
                      Voir tous nos services
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebCreationDetails;
