
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, TrendingUp, Bot, CheckCircle } from 'lucide-react';

const servicesDetails = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Création Web sur Mesure",
    description: "Nous développons des sites internet et des applications web qui allient design moderne, expérience utilisateur intuitive et performances techniques irréprochables.",
    features: ["Sites vitrines & e-commerce", "Applications web complexes", "Design responsive (mobile-first)", "Optimisation de la vitesse"]
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Optimisation SEO",
    description: "Notre expertise en référencement naturel (SEO) vous garantit une place de choix sur Google, attirant ainsi des prospects qualifiés et augmentant votre chiffre d'affaires.",
    features: ["Audit technique complet", "Recherche de mots-clés stratégiques", "Création de contenu optimisé", "Netlinking de qualité"]
  },
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "Automatisation & LLMO",
    description: "Nous exploitons la puissance des Large Language Models (comme GPT) pour automatiser vos tâches, améliorer votre service client et créer des fonctionnalités innovantes.",
    features: ["Chatbots intelligents", "Génération de contenu automatisée", "Analyse de données et rapports", "Optimisation des processus internes"]
  }
];

const Services = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Nos Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Des solutions complètes pour construire, développer et optimiser votre présence en ligne.
        </p>
      </div>
      <div className="space-y-16">
        {servicesDetails.map((service, index) => (
          <Card key={service.title} className="bg-secondary/40 border-secondary overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-secondary/60 p-8 flex flex-col justify-center items-center text-center">
                {service.icon}
                <CardTitle className="mt-4 text-2xl">{service.title}</CardTitle>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
