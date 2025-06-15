
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Portfolio = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Notre Portfolio</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
        Découvrez quelques-unes de nos réalisations.
      </p>
      <Card className="mt-12 p-16 bg-secondary/40 border-secondary">
        <h2 className="text-2xl font-bold">Le portfolio arrive bientôt !</h2>
        <p className="mt-4 text-muted-foreground">
          Nous sommes en train de préparer une sélection de nos meilleurs projets. Revenez bientôt pour les découvrir.
        </p>
        <Button className="mt-8" asChild>
          <a href="/contact">Contactez-nous pour voir des exemples</a>
        </Button>
      </Card>
    </div>
  );
};

export default Portfolio;
