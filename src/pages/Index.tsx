
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, TrendingUp, Bot, ArrowRight, CheckCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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

const testimonials = [
  {
    quote: "Kleero a transformé notre présence en ligne. Leur expertise en SEO et en développement web est inégalée. Nous avons vu une augmentation de 50% de notre trafic organique en seulement 3 mois.",
    name: "Julien Moreau",
    title: "CEO, Innovatech",
    avatar: "JM"
  },
  {
    quote: "L'automatisation mise en place pour notre service client a révolutionné notre façon de travailler. Moins de tâches manuelles, plus de temps pour nos clients. C'est un vrai game-changer.",
    name: "Sophie Dubois",
    title: "Responsable Opérations, Solutions Futura",
    avatar: "SD"
  },
  {
    quote: "Leur approche stratégique et leur design impeccable ont donné vie à notre marque. Le site est non seulement magnifique, mais aussi incroyablement performant.",
    name: "Marc Petit",
    title: "Fondateur, La Boîte Créative",
    avatar: "MP"
  }
];

const Index = () => {
  return (
    <div className="space-y-20 sm:space-y-32">
      <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Façonnez votre présence digitale.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Kleero est votre partenaire stratégique pour la création de sites web, le référencement et l'intégration d'intelligence artificielle.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <NavLink to="/services">Découvrir nos services</NavLink>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <NavLink to="/automations">Nos automatisations <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
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
            <Card key={service.title} className="bg-secondary/40 border-secondary animate-fade-in-up transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
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
      
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight animate-fade-in-up" style={{ animationDelay: '1.1s' }}>De la Stratégie à la Réalité Numérique</h2>
          <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            Nous ne nous contentons pas de construire des sites web. Nous créons des écosystèmes digitaux performants qui alimentent votre croissance. Notre approche est centrée sur des résultats mesurables et un partenariat à long terme.
          </p>
          <ul className="space-y-3 pt-2">
            <li className="flex items-center animate-fade-in-up group" style={{ animationDelay: '1.3s' }}>
              <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
              <span>Solutions sur-mesure adaptées à vos objectifs</span>
            </li>
            <li className="flex items-center animate-fade-in-up group" style={{ animationDelay: '1.4s' }}>
              <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
              <span>Expertise technique de pointe et veille continue</span>
            </li>
            <li className="flex items-center animate-fade-in-up group" style={{ animationDelay: '1.5s' }}>
              <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
              <span>Communication transparente et accompagnement dédié</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <img src="photo-1498050108023-c5249f4df085" alt="Bureau avec un ordinateur portable affichant du code" className="rounded-lg shadow-2xl aspect-video object-cover" />
        </div>
      </section>

      <section className="animate-fade-in-up" style={{ animationDelay: '1.7s' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Ce que nos clients disent de nous</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            La confiance et la satisfaction de nos partenaires sont notre plus grande fierté.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col justify-between h-full bg-secondary/40 border-secondary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.title}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </section>
      
      <section className="text-center bg-secondary/40 rounded-lg p-8 md:p-16 animate-fade-in-up" style={{ animationDelay: '1.9s' }}>
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
