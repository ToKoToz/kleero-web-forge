
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, TrendingUp, Bot, ArrowRight, CheckCircle, Briefcase, Target, Users, Clock, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Création de site web",
    description: "Des sites performants, responsives et 100% pensés pour vos objectifs. Que ce soit une vitrine, un portfolio ou un CMS dynamique, chaque projet est conçu pour allier impact visuel, efficacité et autonomie.",
    features: ["100% sur mesure", "Solutions E-Commerce", "Responsive Design", "Integration CMS"],
    cta: "Créez votre site",
    link: "/services",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Optimisation SEO",
    description: "Optimisez votre visibilité durablement. Nous combinons SEO technique, contenu, netlinking et campagnes Ads pour faire décoller votre trafic et générer des leads qualifiés.",
    features: ["Optimisation technique", "Wireframes & Prototypes", "Netlinking stratégique", "Campagnes sur-mesure"],
    cta: "Optimiser votre SEO",
    link: "/services",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Systèmes d'automatisations",
    description: "Automatisez vos tâches répétitives et libérez du temps. De la publication d'annonces à la synchronisation d'outils, nous créons des flux sur mesure avec n8n, Make, Zapier ou des scripts personnalisés.",
    features: ["Automatisations sur mesure", "Synchronisation d'outils", "Gain de temps quotidien", "Fiabilité et contrôle"],
    cta: "Explorez l'automatisation",
    link: "/automations",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

const approachSteps = [
    {
        icon: <Target className="w-8 h-8 text-primary" />,
        step: "01",
        title: "Comprendre vos besoins",
        description: "Tout commence par l'écoute. Nous analysons vos objectifs et posons les bonnes bases. Objectifs, outils, contraintes : on cadre clairement le projet.",
        color: "bg-blue-500/10 border-blue-500/20"
    },
    {
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        step: "02",
        title: "Élaborer la bonne stratégie",
        description: "Nous construisons une stratégie simple et sur mesure. Chaque action a un but précis et mesurable.",
        color: "bg-green-500/10 border-green-500/20"
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        step: "03",
        title: "Donner vie à votre projet",
        description: "Nous mettons en place, ajustons et testons. Et surtout, nous restons à vos côtés pour assurer le suivi.",
        color: "bg-purple-500/10 border-purple-500/20"
    }
];

const projects = [
    {
        category: "Branding",
        title: "Elevano – Elevating Web Design Excellence",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
        gradient: "from-orange-500/80 to-red-500/80"
    },
    {
        category: "Web Development",
        title: "Site officiel Actifs Immobilier",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        gradient: "from-blue-500/80 to-cyan-500/80"
    }
];

const team = [
    {
        name: "CALMON Tristan",
        role: "Co-founder",
        avatar: "CT",
        gradient: "from-blue-500 to-purple-500"
    },
    {
        name: "ANGLARD Loïc",
        role: "Co-founder",
        avatar: "AL",
        gradient: "from-green-500 to-blue-500"
    }
];

const stats = [
    {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Temps gagné",
        value: "7200h",
        description: "d'automatisations déployées",
        gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-primary" />,
        title: "Visibilité web",
        value: "+38%",
        description: "de trafic organique en moyenne",
        gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Leads qualifiés",
        value: "x2",
        description: "de conversion client",
        gradient: "from-purple-500/10 to-pink-500/10"
    }
];

const Index = () => {
  return (
    <div className="relative">
      {/* Floating elements for visual appeal */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse" />
      <div className="fixed top-40 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="fixed bottom-40 left-20 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="space-y-32">
        {/* Hero Section with enhanced animations */}
        <section className="relative text-center overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img src="/lovable-uploads/d984d06a-2b9a-4827-bcd3-73902741e0bb.png" alt="Paysage de montagne brumeux" className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10" />
          </div>
          <div className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 w-full">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-7xl text-white mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Façonnez votre présence digitale.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 animate-pulse">
                Avec Kleero
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Nous construisons des sites web sur mesure, automatisons vos tâches clés et boostons votre visibilité en ligne avec des solutions concrètes, efficaces et pensées pour durer.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <Button size="lg" asChild className="group relative overflow-hidden">
                <NavLink to="/contact" className="relative z-10">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Commencer dès maintenant</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Agency Section */}
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Notre Agence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chez Kleero, nous construisons des sites web sur mesure, automatisons vos tâches clés et boostons votre visibilité en ligne avec des solutions concrètes, efficaces et pensées pour durer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Des résultats concrets pour accélérer votre croissance digitale : plus de temps, plus de visibilité, plus de clients.
              </p>
              <Button asChild className="group mt-6">
                <NavLink to="/about" className="inline-flex items-center">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </NavLink>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <Card key={stat.title} className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${stat.gradient} border-0 animate-fade-in-up opacity-0`} style={{ animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards' }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <div className="space-y-1">
                      <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                      <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Nos services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Kleero vous propose des services capables de booster votre entreprise.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={service.title} className={`group bg-gradient-to-br ${service.gradient} backdrop-blur-sm border-0 flex flex-col p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up opacity-0`} style={{ animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={feature} className={`flex items-center text-sm transition-all duration-300 opacity-0 animate-fade-in-up`} style={{ animationDelay: `${0.6 + index * 0.2 + featureIndex * 0.1}s`, animationFillMode: 'forwards' }}>
                      <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="group relative overflow-hidden">
                  <NavLink to={service.link} className="relative z-10">
                    <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <span className="relative">{service.cta}</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </NavLink>
                </Button>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Enhanced Approach Section */}
        <section className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Notre approche
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Une méthode claire, des résultats concrets. Notre processus en 3 étapes garantit des solutions adaptées et des résultats durables.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3 relative">
            <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block -z-10" />
            {approachSteps.map((step, index) => (
              <div key={step.step} className={`relative flex flex-col items-center text-center group animate-fade-in-up opacity-0`} style={{ animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards' }}>
                <div className="mb-8 bg-background z-10 px-2">
                  <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center border-2 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg`}>
                    <div className="p-2">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-muted-foreground px-4 leading-relaxed">{step.description}</p>
                <p className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-bold text-primary/5 -z-10 group-hover:text-primary/10 transition-colors duration-500">{step.step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Nos réalisations
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Découvrez comment nous avons transformé des idées en expériences digitales concrètes et performantes. Sites web, automatisations, branding… chaque projet est conçu pour générer de l'impact et des résultats durables.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={project.title} className={`overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up opacity-0`} style={{ animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards' }}>
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                    <Button variant="secondary" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      Voir le projet
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6 bg-card group-hover:bg-gradient-to-br group-hover:from-card group-hover:to-secondary/20 transition-all duration-300">
                  <p className="text-sm text-primary font-semibold group-hover:animate-pulse">{project.category}</p>
                  <CardTitle className="text-xl mt-2 group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button variant="outline" size="lg" asChild className="group">
              <NavLink to="/services" className="relative overflow-hidden">
                <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative">Visualiser plus</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </NavLink>
            </Button>
          </div>
        </section>
        
        {/* Enhanced Team Section */}
        <section className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Les experts derrière Kleero
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Une équipe passionnée par le digital, dédiée à transformer vos idées en solutions concrètes, durables et sur-mesure.
            </p>
          </div>
          <div className="flex justify-center gap-12 md:gap-20">
            {team.map((member, index) => (
              <div key={member.name} className={`text-center group animate-fade-in-up opacity-0`} style={{ animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards' }}>
                <div className="relative mb-6">
                  <Avatar className="w-32 h-32 mx-auto border-4 border-primary/20 shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-primary/40">
                    <AvatarFallback className={`text-3xl font-bold text-white bg-gradient-to-br ${member.gradient} group-hover:animate-pulse`}>
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
