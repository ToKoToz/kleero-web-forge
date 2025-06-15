
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, TrendingUp, Bot, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Création Web sur Mesure",
    description: "Des sites web performants, esthétiques et optimisés pour convertir vos visiteurs en clients."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Optimisation SEO",
    description: "Augmentez votre visibilité sur les moteurs de recherche et attirez un trafic qualifié durablement."
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Automatisation & LLMO",
    description: "Intégrez l'intelligence artificielle pour optimiser vos processus et créer des expériences uniques."
  }
];

const Index = () => {
  return (
    <div className="space-y-20 sm:space-y-32">
      <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Nous transformons vos idées en réalité numérique.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Kleero est votre partenaire stratégique pour la création de sites web, le référencement et l'intégration d'intelligence artificielle.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <NavLink to="/services">Découvrir nos services</NavLink>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <NavLink to="/portfolio">Voir nos réalisations <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
          </Button>
        </div>
      </section>

      <section>
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold tracking-tight">Nos Pôles d'Expertise</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Trois services pour une présence en ligne complète et performante.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={service.title} className="bg-secondary/40 border-secondary animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="text-center bg-secondary/40 rounded-lg p-8 md:p-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h2 className="text-3xl font-bold tracking-tight">Prêt à lancer votre projet ?</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Discutons de vos ambitions et voyons comment nous pouvons vous aider à les atteindre.
          </p>
        <div className="mt-8">
          <Button size="lg" asChild>
             <NavLink to="/contact">Planifier un appel <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
