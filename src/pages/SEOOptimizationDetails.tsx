
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Search, 
  BarChart3, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  FileText,
  Link,
  Users,
  Globe,
  Award,
  Eye
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const features = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Audit SEO Complet",
    description: "Analyse technique approfondie pour identifier tous les points d'amélioration"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Stratégie Ciblée",
    description: "Recherche de mots-clés stratégiques pour votre secteur d'activité"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Suivi Performance",
    description: "Rapports détaillés et suivi des positions sur les moteurs de recherche"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Résultats Durables",
    description: "Optimisation pérenne qui s'adapte aux évolutions des algorithmes"
  }
];

const services = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "SEO Technique",
    description: "Optimisation technique complète pour améliorer l'indexation",
    features: ["Vitesse de chargement", "Structure HTML", "Schema markup", "Core Web Vitals"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "SEO de Contenu",
    description: "Création et optimisation de contenu pour attirer votre audience",
    features: ["Recherche mots-clés", "Rédaction optimisée", "Maillage interne", "Balises meta"]
  },
  {
    icon: <Link className="w-8 h-8" />,
    title: "SEO Off-Page",
    description: "Stratégies de netlinking et autorité de domaine",
    features: ["Acquisition de backlinks", "Partenariats qualité", "Citations locales", "Réseaux sociaux"]
  }
];

const process = [
  {
    step: "01",
    title: "Audit & Analyse",
    description: "Analyse complète de votre site et de la concurrence pour identifier les opportunités d'amélioration."
  },
  {
    step: "02",
    title: "Stratégie Mots-Clés",
    description: "Recherche approfondie des mots-clés pertinents et définition de la stratégie de contenu."
  },
  {
    step: "03",
    title: "Optimisation Technique",
    description: "Mise en œuvre des corrections techniques et optimisations pour améliorer les performances."
  },
  {
    step: "04",
    title: "Suivi & Reporting",
    description: "Surveillance continue des positions et ajustements stratégiques pour maintenir la croissance."
  }
];

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "+150% de Trafic Organique",
    description: "Augmentation moyenne du trafic naturel de nos clients"
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Visibilité Maximum",
    description: "Positionnement en première page sur vos mots-clés stratégiques"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Autorité Renforcée",
    description: "Amélioration de la réputation et de la crédibilité en ligne"
  }
];

const SEOOptimizationDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-emerald-500/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="space-y-20">
          {/* Header Section */}
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full text-emerald-600 font-medium text-sm border border-emerald-500/20">
              <TrendingUp className="w-4 h-4" />
              Service Spécialisé
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Optimisation SEO</span>
                <br />
                <span className="text-foreground">Professionnelle</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Propulsez votre site web en première page de Google avec notre expertise SEO avancée. 
                Augmentez votre visibilité, attirez plus de clients et maximisez votre croissance.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group relative overflow-hidden bg-gradient-to-br from-background/80 to-emerald-500/5 backdrop-blur-sm border-emerald-500/20 hover-lift"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-2xl mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
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
              <h2 className="text-3xl lg:text-4xl font-bold">Nos Services SEO</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Une approche complète du référencement naturel pour dominer les résultats de recherche
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className="group relative overflow-hidden bg-gradient-to-br from-background/80 to-emerald-500/5 backdrop-blur-sm border-emerald-500/20 hover-lift"
                  style={{ animationDelay: `${0.2 + 0.1 * index}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 p-3 bg-emerald-500/10 rounded-xl text-emerald-600 group-hover:scale-110 transition-transform duration-300">
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
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
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
              <h2 className="text-3xl lg:text-4xl font-bold">Notre Méthodologie</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Un processus éprouvé pour maximiser votre visibilité sur les moteurs de recherche
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div 
                  key={step.step}
                  className="relative group"
                  style={{ animationDelay: `${0.6 + 0.1 * index}s` }}
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-background/80 to-emerald-500/5 backdrop-blur-sm border-emerald-500/20 hover-lift h-full">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                          {step.step}
                        </div>
                        <h3 className="font-bold text-lg">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Connector */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Résultats Concrets</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Les bénéfices mesurables que vous pouvez attendre de notre expertise SEO
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={benefit.title}
                  className="group relative overflow-hidden bg-gradient-to-br from-background/80 to-emerald-500/5 backdrop-blur-sm border-emerald-500/20 hover-lift text-center"
                  style={{ animationDelay: `${0.8 + 0.1 * index}s` }}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/10 rounded-2xl mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-emerald-600">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Prêt à dominer les résultats de recherche ?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Obtenez un audit SEO gratuit et découvrez comment nous pouvons multiplier votre visibilité en ligne et attirer plus de clients qualifiés.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-emerald-500/25 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <NavLink to="/contact">
                      Audit SEO Gratuit
                      <Sparkles className="w-5 h-5 ml-2" />
                    </NavLink>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/5 transition-all duration-300">
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

export default SEOOptimizationDetails;
