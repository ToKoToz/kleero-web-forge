
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, TrendingUp, Bot, ArrowRight, CheckCircle, Briefcase, Target, Users, Clock, Sparkles, Star, Zap, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Création de site web",
    description: "Des sites performants, responsives et 100% pensés pour vos objectifs. Que ce soit une vitrine, un portfolio ou un CMS dynamique, chaque projet est conçu pour allier impact visuel, efficacité et autonomie.",
    features: ["100% sur mesure", "Solutions E-Commerce", "Responsive Design", "Integration CMS"],
    cta: "Créez votre site",
    link: "/services/creation-web",
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderGradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Optimisation SEO",
    description: "Optimisez votre visibilité durablement. Nous combinons SEO technique, contenu, netlinking et campagnes Ads pour faire décoller votre trafic et générer des leads qualifiés.",
    features: ["Optimisation technique", "Wireframes & Prototypes", "Netlinking stratégique", "Campagnes sur-mesure"],
    cta: "Optimiser votre SEO",
    link: "/services/optimisation-seo",
    gradient: "from-green-500/10 to-emerald-500/10",
    borderGradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Systèmes d'automatisations",
    description: "Automatisez vos tâches répétitives et libérez du temps. De la publication d'annonces à la synchronisation d'outils, nous créons des flux sur mesure avec n8n, Make, Zapier ou des scripts personnalisés.",
    features: ["Automatisations sur mesure", "Synchronisation d'outils", "Gain de temps quotidien", "Fiabilité et contrôle"],
    cta: "Explorez l'automatisation",
    link: "/services/automatisation-llmo",
    gradient: "from-purple-500/10 to-pink-500/10",
    borderGradient: "from-purple-500/20 to-pink-500/20"
  }
];

const approachSteps = [
    {
        icon: <Target className="w-8 h-8 text-primary" />,
        step: "01",
        title: "Comprendre vos besoins",
        description: "Tout commence par l'écoute. Nous analysons vos objectifs et posons les bonnes bases. Objectifs, outils, contraintes : on cadre clairement le projet.",
        color: "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20"
    },
    {
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        step: "02",
        title: "Élaborer la bonne stratégie",
        description: "Nous construisons une stratégie simple et sur mesure. Chaque action a un but précis et mesurable.",
        color: "bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20"
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        step: "03",
        title: "Donner vie à votre projet",
        description: "Nous mettons en place, ajustons et testons. Et surtout, nous restons à vos côtés pour assurer le suivi.",
        color: "bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20"
    }
];

const team = [
    {
        name: "CALMON Tristan",
        role: "Co-founder & Tech Lead",
        avatar: "CT",
        gradient: "from-blue-500 to-purple-500",
        specialties: ["Full-Stack", "DevOps", "Architecture"]
    },
    {
        name: "ANGLARD Loïc",
        role: "Co-founder & Design Lead",
        avatar: "AL",
        gradient: "from-green-500 to-blue-500",
        specialties: ["UI/UX", "Branding", "Strategy"]
    }
];

const stats = [
    {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Temps gagné",
        value: "7200h",
        description: "d'automatisations déployées",
        gradient: "from-blue-500/10 to-cyan-500/10",
        change: "+24%"
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-primary" />,
        title: "Visibilité web",
        value: "+38%",
        description: "de trafic organique en moyenne",
        gradient: "from-green-500/10 to-emerald-500/10",
        change: "+12%"
    },
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Leads qualifiés",
        value: "x2",
        description: "de conversion client",
        gradient: "from-purple-500/10 to-pink-500/10",
        change: "+67%"
    }
];

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 -z-20">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-cyan-500/5 animate-pulse-glow" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-full blur-3xl animate-float opacity-60" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float opacity-60" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-float opacity-60" style={{ animationDuration: '30s', animationDelay: '10s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-float opacity-60" style={{ animationDuration: '22s', animationDelay: '15s' }} />
        
        {/* Animated particles */}
        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDuration: '8s', animationDelay: '0s' }} />
        <div className="absolute top-2/5 right-1/5 w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-3/5 left-2/5 w-1 h-1 bg-cyan-500/30 rounded-full animate-float" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        <div className="absolute bottom-1/5 right-2/5 w-2.5 h-2.5 bg-green-500/30 rounded-full animate-float" style={{ animationDuration: '9s', animationDelay: '6s' }} />
        <div className="absolute bottom-2/5 left-1/6 w-1.5 h-1.5 bg-pink-500/30 rounded-full animate-float" style={{ animationDuration: '11s', animationDelay: '8s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(0,152,177,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,152,177,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="space-y-32 relative">
        {/* Enhanced Hero Section with improved animations */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Enhanced Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/d984d06a-2b9a-4827-bcd3-73902741e0bb.png" 
              alt="Paysage de montagne brumeux" 
              className="w-full h-full object-cover scale-105 transition-transform duration-[20s] hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/70 to-background/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-purple-500/10" />
            
            {/* Additional animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-fade-in opacity-50" style={{ animationDuration: '3s', animationIterationCount: 'infinite', animationDirection: 'alternate' }} />
          </div>
          
          {/* Enhanced Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          
          {/* New animated elements */}
          <div className="absolute top-1/5 right-1/5 w-24 h-24 bg-green-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }} />
          <div className="absolute bottom-1/5 left-1/5 w-36 h-36 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s', animationDuration: '12s' }} />
          
          <div className="relative z-10 container-custom text-center">
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Badge de présentation avec animation améliorée */}
              <div className="animate-bounce-in opacity-0" style={{ animationDelay: '0.2s' }}>
                <Badge variant="secondary" className="glass-card px-4 py-2 text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  L'excellence digitale à votre portée
                </Badge>
              </div>
              
              {/* Titre principal avec typographie améliorée et animation */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 animate-fade-in-up opacity-0 hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.4s' }}>
                Façonnez votre présence
                <br />
                <span className="gradient-text animate-pulse-glow">digitale</span>
              </h1>
              
              {/* Sous-titre avec meilleure lisibilité et animation */}
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
                Nous construisons des sites web sur mesure, automatisons vos tâches clés et boostons votre visibilité en ligne avec des solutions
                <span className="text-primary font-semibold animate-pulse"> concrètes, efficaces et pensées pour durer.</span>
              </p>
              
              {/* CTA amélioré avec animations */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
                <Button size="lg" asChild className="btn-primary px-8 py-4 text-lg hover-lift group hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300">
                  <NavLink to="/contact">
                    <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Commencer dès maintenant
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </NavLink>
                </Button>
                <Button variant="outline" size="lg" asChild className="glass-card px-8 py-4 text-lg hover-lift border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <NavLink to="/services">
                    Découvrir nos services
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section with improved animations */}
        <section className="container-custom section-padding relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <Badge variant="secondary" className="mb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Notre expertise
                </Badge>
                <h2 className="text-4xl lg:text-6xl font-black tracking-tight gradient-text">
                  Des résultats qui parlent
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Chez Kleero, nous transformons vos défis digitaux en opportunités concrètes. 
                  Notre approche combine innovation technique et vision stratégique pour 
                  <span className="text-primary font-semibold"> accélérer votre croissance digitale.</span>
                </p>
              </div>
              <Button asChild className="btn-primary hover-lift group mt-8">
                <NavLink to="/about">
                  <Star className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Découvrir notre histoire
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </NavLink>
              </Button>
            </div>
            
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <Card key={stat.title} className={`glass-card hover-lift hover-glow group transition-all duration-500 bg-gradient-to-br ${stat.gradient} border-0 animate-slide-in-right opacity-0 hover:scale-105`} style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <div className="space-y-2">
                      <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.title}</CardTitle>
                      <div className="flex items-baseline gap-2">
                        <div className="text-4xl font-black text-primary group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                        <Badge variant="secondary" className="text-xs font-semibold text-green-600">
                          {stat.change}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground font-medium">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Section with better animations */}
        <section className="container-custom section-padding relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s' }} />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s', animationDelay: '5s' }} />
          </div>
          
          <div className="text-center mb-20 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <Badge variant="secondary" className="mb-6">
              <Code className="w-4 h-4 mr-2" />
              Nos services
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight gradient-text mb-6">
              Excellence sur mesure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kleero vous propose des services capables de transformer votre présence digitale 
              et <span className="text-primary font-semibold">booster votre entreprise.</span>
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={service.title} className={`glass-card group bg-gradient-to-br ${service.gradient} backdrop-blur-sm border-0 p-8 transition-all duration-500 hover-lift hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-scale opacity-0 relative overflow-hidden hover:scale-105`} style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
                <div className="relative z-10 bg-background/95 rounded-lg p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </div>
                  
                  <p className="text-muted-foreground flex-grow mb-8 leading-relaxed text-lg">{service.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className={`flex items-center text-sm transition-all duration-300 opacity-0 animate-fade-in-up`} style={{ animationDelay: `${0.6 + index * 0.2 + featureIndex * 0.1}s` }}>
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="btn-primary hover-lift group w-full">
                    <NavLink to={service.link}>
                      <span>{service.cta}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </NavLink>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Approach Section */}
        <section className="container-custom section-padding relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '20s' }} />
            <div className="absolute bottom-1/3 right-0 w-56 h-56 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '22s', animationDelay: '8s' }} />
          </div>
          
          <div className="text-center mb-20 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <Badge variant="secondary" className="mb-6">
              <Target className="w-4 h-4 mr-2" />
              Notre approche
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight gradient-text mb-6">
              Méthode éprouvée
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une méthode claire, des résultats concrets. Notre processus en 3 étapes garantit 
              <span className="text-primary font-semibold"> des solutions adaptées et des résultats durables.</span>
            </p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-3 relative">
            <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block -z-10" />
            {approachSteps.map((step, index) => (
              <div key={step.step} className={`relative flex flex-col items-center text-center group animate-fade-in-up opacity-0`} style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                <div className="mb-8 bg-background z-10 px-4">
                  <div className={`w-24 h-24 rounded-2xl ${step.color} flex items-center justify-center border-2 group-hover:scale-110 transition-all duration-500 hover-glow`}>
                    <div className="p-2">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-muted-foreground px-4 leading-relaxed text-lg">{step.description}</p>
                <p className="absolute -top-4 left-1/2 -translate-x-1/2 text-9xl font-black text-primary/5 -z-10 group-hover:text-primary/10 transition-colors duration-500">{step.step}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Enhanced Team Section */}
        <section className="container-custom section-padding relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl animate-pulse-glow" />
          </div>
          
          <div className="text-center mb-20 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <Badge variant="secondary" className="mb-6">
              <Users className="w-4 h-4 mr-2" />
              Notre équipe
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight gradient-text mb-6">
              Les experts derrière Kleero
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une équipe passionnée par le digital, dédiée à transformer vos idées en 
              <span className="text-primary font-semibold"> solutions concrètes, durables et sur-mesure.</span>
            </p>
          </div>
          
          <div className="flex justify-center gap-16 md:gap-24">
            {team.map((member, index) => (
              <div key={member.name} className={`text-center group animate-fade-in-scale opacity-0`} style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                <div className="relative mb-8">
                  <Avatar className="w-40 h-40 mx-auto border-4 border-primary/20 shadow-2xl group-hover:scale-110 transition-all duration-500 hover-glow">
                    <AvatarFallback className={`text-4xl font-black text-white bg-gradient-to-br ${member.gradient} group-hover:animate-pulse`}>
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
                <h3 className="font-black text-2xl mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                <p className="text-muted-foreground mb-4 text-lg group-hover:text-foreground transition-colors duration-300">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">{specialty}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
