
import { Card } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Contactez-nous</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Une question ? Un projet en tête ? Nous sommes à votre écoute.
        </p>
      </div>
      <Card className="max-w-lg mx-auto p-8 bg-secondary/40 border-secondary">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Par Email</h3>
              <a href="mailto:contact@kleero.com" className="text-muted-foreground hover:text-primary transition-colors">
                contact@kleero.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Par Téléphone</h3>
              <p className="text-muted-foreground">+33 1 23 45 67 89</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
