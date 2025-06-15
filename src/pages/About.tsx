
import { Users, Target, Award, Zap, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Clara",
      description: "Rendre la technologie accessible et performante pour tous les entrepreneurs."
    },
    {
      icon: Heart,
      title: "Passion Client",
      description: "Chaque projet est une collaboration étroite pour atteindre vos objectifs concrets."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous combinons créativité et expertise technique pour des solutions uniques."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Des solutions qui ne sont pas seulement belles, mais surtout efficaces."
    }
  ];

  const stats = [
    { number: "50+", label: "Projets Réalisés" },
    { number: "3", label: "Années d'Expérience" },
    { number: "98%", label: "Clients Satisfaits" },
    { number: "24/7", label: "Support Disponible" }
  ];

  const expertise = [
    "Développement Web sur Mesure",
    "Optimisation SEO Avancée",
    "Automatisation avec IA",
    "Intégration d'APIs",
    "Design Responsive",
    "Performance & Sécurité"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background animations */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-20" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-float" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-lg animate-bounce-gentle" />
      </div>

      <div className="container mx-auto px-6 py-16 space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="inline-block">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient bg-300%">
              À Propos de Kleero
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-4 rounded-full" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre mission : Transformer vos idées en solutions numériques performantes et durables
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card hover-lift text-center group">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Notre Histoire</h2>
            </div>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Fondée par des passionnés du web et de l'intelligence artificielle, 
                <span className="text-primary font-semibold"> Kleero</span> est née d'une ambition simple : 
                aider les entreprises à prospérer dans le monde numérique.
              </p>
              <p>
                Nous croyons en une approche centrée sur le client, où chaque projet 
                est une collaboration étroite pour atteindre des objectifs concrets. 
                Notre équipe combine l'expertise technique à une compréhension approfondie 
                des enjeux business.
              </p>
            </div>
            
            <div className="flex items-center gap-2 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <Zap className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-medium">Innovation • Performance • Excellence</span>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-3" />
            <Card className="relative glass-card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team working" 
                  className="rounded-lg shadow-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Nos Valeurs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass-card hover-lift group cursor-pointer border-primary/20 hover:border-primary/40 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="space-y-12">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Notre Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des compétences techniques pointues au service de votre réussite
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Prêt à Transformer Votre Vision en Réalité ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discutons de votre projet et découvrons comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                Démarrer un Projet
              </button>
              <button className="px-8 py-3 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300">
                Voir nos Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
