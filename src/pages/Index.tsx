
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, TrendingUp, Bot, ArrowRight, CheckCircle, Briefcase, Target, Users, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Création de site web",
    description: "Des sites performants, responsives et 100% pensés pour vos objectifs. Que ce soit une vitrine, un portfolio ou un CMS dynamique, chaque projet est conçu pour allier impact visuel, efficacité et autonomie.",
    features: ["100% sur mesure", "Solutions E-Commerce", "Responsive Design", "Integration CMS"],
    cta: "Créez votre site",
    link: "/services"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Optimisation SEO",
    description: "Optimisez votre visibilité durablement. Nous combinons SEO technique, contenu, netlinking et campagnes Ads pour faire décoller votre trafic et générer des leads qualifiés.",
    features: ["Optimisation technique", "Wireframes & Prototypes", "Netlinking stratégique", "Campagnes sur-mesure"],
    cta: "Optimiser votre SEO",
    link: "/services"
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Systèmes d'automatisations",
    description: "Automatisez vos tâches répétitives et libérez du temps. De la publication d’annonces à la synchronisation d’outils, nous créons des flux sur mesure avec n8n, Make, Zapier ou des scripts personnalisés.",
    features: ["Automatisations sur mesure", "Synchronisation d’outils", "Gain de temps quotidien", "Fiabilité et contrôle"],
    cta: "Explorez l'automatisation",
    link: "/automations"
  }
];

const approachSteps = [
    {
        icon: <Target className="w-8 h-8 text-primary" />,
        step: "01",
        title: "Comprendre vos besoins",
        description: "Tout commence par l’écoute. Nous analysons vos objectifs et posons les bonnes bases. Objectifs, outils, contraintes : on cadre clairement le projet."
    },
    {
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        step: "02",
        title: "Élaborer la bonne stratégie",
        description: "Nous construisons une stratégie simple et sur mesure. Chaque action a un but précis et mesurable."
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        step: "03",
        title: "Donner vie à votre projet",
        description: "Nous mettons en place, ajustons et testons. Et surtout, nous restons à vos côtés pour assurer le suivi."
    }
];

const projects = [
    {
        category: "Branding",
        title: "Elevano – Elevating Web Design Excellence",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
    },
    {
        category: "Web Development",
        title: "Site officiel Actifs Immobilier",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    }
];

const team = [
    {
        name: "CALMON Tristan",
        role: "Co-founder",
        avatar: "CT"
    },
    {
        name: "ANGLARD Loïc",
        role: "Co-founder",
        avatar: "AL"
    }
];


const Index = () => {
  return (
    <div className="space-y-20 sm:space-y-32">
      <section className="relative text-center animate-fade-in-up overflow-hidden rounded-lg shadow-2xl min-h-screen flex items-center" style={{ animationDelay: '0.1s' }}>
        <div className="absolute inset-0">
          <img src="/lovable-uploads/d984d06a-2b9a-4827-bcd3-73902741e0bb.png" alt="Paysage de montagne brumeux" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Façonnez votre présence digitale.
            <br />
            <span className="text-primary">Avec Kleero</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Nous construisons des sites web sur mesure, automatisons vos tâches clés et boostons votre visibilité en ligne avec des solutions concrètes, efficaces et pensées pour durer.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <NavLink to="/contact">Commencer dès maintenant</NavLink>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-3xl font-bold tracking-tight">Notre Agence</h2>
                <p className="text-muted-foreground">
                    Chez Kleero, nous construisons des sites web sur mesure, automatisons vos tâches clés et boostons votre visibilité en ligne avec des solutions concrètes, efficaces et pensées pour durer.
                </p>
                <p className="text-muted-foreground pt-4">
                    Des résultats concrets pour accélérer votre croissance digitale : plus de temps, plus de visibilité, plus de clients.
                </p>
                <Button asChild className="mt-4">
                    <NavLink to="/about">En savoir plus <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Temps gagné</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary">7200h</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Visibilité web</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary">+38%</div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Leads qualifiés</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary">x2</div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-3xl font-bold tracking-tight">Nos services</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Kleero vous proposes des services capables de booster votre entreprise.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={service.title} className="bg-card flex flex-col p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: `${0.9 + index * 0.2}s` }}>
                <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground flex-grow mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                    {service.features.map(feature => (
                        <li key={feature} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <Button asChild>
                    <NavLink to={service.link}>{service.cta} <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
                </Button>
            </Card>
          ))}
        </div>
      </section>
      
      <section>
          <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
              <h2 className="text-3xl font-bold tracking-tight">Notre approche</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Une méthode claire, des résultats concrets. Notre processus en 3 étapes garantit des solutions adaptées et des résultats durables.
              </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3 relative">
              <div className="absolute top-8 left-0 right-0 h-px bg-border hidden md:block -z-10" />
              {approachSteps.map((step, index) => (
                  <div key={step.step} className="relative flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${1.3 + index * 0.2}s` }}>
                      <div className="mb-6 bg-background z-10 px-2">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary border-4 border-background ring-2 ring-primary/20">
                              {step.icon}
                          </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground px-4">{step.description}</p>
                      <p className="absolute -top-2 left-1/2 -translate-x-1/2 text-7xl font-bold text-primary/10 -z-10">{step.step}</p>
                  </div>
              ))}
          </div>
      </section>

      <section>
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
              <h2 className="text-3xl font-bold tracking-tight">Nos réalisations</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                  Découvrez comment nous avons transformé des idées en expériences digitales concrètes et performantes. Sites web, automatisations, branding… chaque projet est conçu pour générer de l’impact et des résultats durables.
              </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                  <Card key={project.title} className="overflow-hidden group animate-fade-in-up transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ animationDelay: `${1.7 + index * 0.2}s` }}>
                      <div className="overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="p-6 bg-card">
                          <p className="text-sm text-primary font-semibold">{project.category}</p>
                          <CardTitle className="text-xl mt-1">{project.title}</CardTitle>
                      </div>
                  </Card>
              ))}
          </div>
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '1.9s' }}>
              <Button variant="outline" size="lg" asChild>
                <NavLink to="/services">
                  Visualiser plus <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
          </div>
      </section>
      
      <section>
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '2.1s' }}>
              <h2 className="text-3xl font-bold tracking-tight">Les experts derrière Kleero</h2>
              <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                  Une équipe passionnée par le digital, dédiée à transformer vos idées en solutions concrètes, durables et sur-mesure.
              </p>
          </div>
          <div className="flex justify-center gap-8 md:gap-16 animate-fade-in-up" style={{ animationDelay: '2.3s' }}>
              {team.map((member) => (
                  <div key={member.name} className="text-center">
                      <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20 shadow-lg">
                          <AvatarFallback className="text-2xl bg-secondary font-semibold text-primary">{member.avatar}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                  </div>
              ))}
          </div>
      </section>
    </div>
  );
};

export default Index;
