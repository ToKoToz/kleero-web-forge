
import { Card } from '@/components/ui/card';
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

        <div className="flex justify-center">
          {/* Contact Form */}
          <div className="animate-fade-in-up animate-delayed-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
