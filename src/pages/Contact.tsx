
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-60 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            <span className="gradient-text">Contactez-nous</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Une question ? Un projet en tête ? Nous sommes à votre écoute pour vous accompagner dans votre transformation digitale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in-up animate-delayed-2">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up animate-delayed-3">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-4">Nos coordonnées</h2>
              <p className="text-muted-foreground mb-8">
                Plusieurs moyens pour nous joindre et échanger sur vos besoins.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-background/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a 
                      href="mailto:contact@kleero.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@kleero.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Réponse sous 24h
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lun-Ven 9h-18h
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p className="text-muted-foreground">
                      123 Avenue des Entrepreneurs<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Horaires</h3>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi : 9h00 - 18h00<br />
                      Weekend : Sur rendez-vous
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Response Info */}
            <Card className="p-6 bg-gradient-to-r from-primary/5 via-background to-accent/5 border border-primary/20">
              <h3 className="font-semibold text-lg mb-3 gradient-text">
                Réponse rapide garantie
              </h3>
              <p className="text-muted-foreground text-sm">
                Nous nous engageons à vous répondre dans les 24 heures ouvrées. 
                Pour les demandes urgentes, n'hésitez pas à nous appeler directement.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
