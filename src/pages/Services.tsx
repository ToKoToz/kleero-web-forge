
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, TrendingUp, Bot, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const servicesDetails = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Création Web sur Mesure",
    description: "Nous développons des sites internet et des applications web qui allient design moderne, expérience utilisateur intuitive et performances techniques irréprochables.",
    features: ["Sites vitrines & e-commerce", "Applications web complexes", "Design responsive (mobile-first)", "Optimisation de la vitesse"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "bg-blue-500"
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-primary" />,
    title: "Optimisation SEO",
    description: "Notre expertise en référencement naturel (SEO) vous garantit une place de choix sur Google, attirant ainsi des prospects qualifiés et augmentant votre chiffre d'affaires.",
    features: ["Audit technique complet", "Recherche de mots-clés stratégiques", "Création de contenu optimisé", "Netlinking de qualité"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentColor: "bg-emerald-500"
  },
  {
    icon: <Bot className="w-12 h-12 text-primary" />,
    title: "Automatisation & LLMO",
    description: "Nous exploitons la puissance des Large Language Models (comme GPT) pour automatiser vos tâches, améliorer votre service client et créer des fonctionnalités innovantes.",
    features: ["Chatbots intelligents", "Génération de contenu automatisée", "Analyse de données et rapports", "Optimisation des processus internes"],
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "bg-purple-500"
  }
];

const Services = () => {
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
              <Sparkles className="w-4 h-4" />
              Nos Expertises
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Nos Services</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Des solutions complètes pour construire, développer et optimiser votre présence en ligne avec les dernières technologies.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-12">
            {servicesDetails.map((service, index) => (
              <Card 
                key={service.title} 
                className={`group relative overflow-hidden border-0 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover-lift transition-all duration-500 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative z-10 p-1">
                  <div className="bg-background/80 backdrop-blur-xl rounded-lg p-8 lg:p-12">
                    <div className="lg:flex lg:items-center lg:gap-12">
                      {/* Icon Section */}
                      <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <div className="relative">
                          {/* Animated background */}
                          <div className={`absolute inset-0 ${service.accentColor} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                          <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                              {service.icon}
                            </div>
                            <CardTitle className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                              {service.title}
                            </CardTitle>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-2/3 space-y-8">
                        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <div 
                              key={feature} 
                              className="flex items-center gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group-hover:translate-x-2"
                              style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}
                            >
                              <div className="flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-primary" />
                              </div>
                              <span className="text-sm lg:text-base font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Call to Action */}
                        <div className="pt-4">
                          <Button 
                            asChild
                            variant="outline" 
                            className="group/btn bg-background/50 backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                          >
                            {index === 0 ? (
                              <NavLink to="/services/creation-web">
                                En savoir plus
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </NavLink>
                            ) : index === 1 ? (
                              <NavLink to="/services/optimisation-seo">
                                En savoir plus
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </NavLink>
                            ) : (
                              <NavLink to="/services/automatisation-llmo">
                                En savoir plus
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </NavLink>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center space-y-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Prêt à transformer votre vision en réalité ?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Discutons de votre projet et découvrons ensemble comment nos services peuvent propulser votre entreprise vers de nouveaux sommets.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-3 rounded-full shadow-primary/25 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <NavLink to="/contact">
                    Démarrons votre projet
                    <Sparkles className="w-5 h-5 ml-2" />
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
