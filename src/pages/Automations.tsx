
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Share2, MailCheck } from 'lucide-react';

const automations = [
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: 'Publication Sociale Automatisée',
    description: "Connectez votre blog ou flux de produits pour publier automatiquement vos nouveautés sur Twitter, LinkedIn et Facebook. Gagnez du temps et maintenez une présence active sans effort."
  },
  {
    icon: <MailCheck className="w-8 h-8 text-primary" />,
    title: 'Tri Intelligent des Demandes Client',
    description: "Notre système analyse les emails entrants, les catégorise (facturation, technique, commercial) et les assigne automatiquement au bon département, réduisant les temps de réponse."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Génération de Leads & Intégration CRM',
    description: "Chaque soumission de formulaire sur votre site crée automatiquement une fiche dans votre CRM (HubSpot, Salesforce) et notifie votre équipe commerciale."
  }
];

const Automations = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Exemples d'Automatisations</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Découvrez comment nous pouvons optimiser vos processus et vous faire gagner un temps précieux.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {automations.map((automation, index) => (
          <Card key={automation.title} className="bg-secondary/40 border-secondary flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              {automation.icon}
              <CardTitle>{automation.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{automation.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Automations;
