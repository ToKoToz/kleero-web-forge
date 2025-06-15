
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Preview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main logo/title */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4 animate-fade-in-up">
            Kleero
          </h1>
          <div className="flex items-center justify-center gap-2 animate-fade-in-up animate-delayed-1">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              L'avenir de l'automatisation commence ici
            </p>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </div>

        {/* Catchphrase */}
        <div className="mb-12 animate-fade-in-up animate-delayed-2">
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Transformez vos processus,
          </p>
          <p className="text-2xl md:text-3xl font-semibold gradient-text">
            Libérez votre potentiel
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up animate-delayed-3">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-xl shadow-large hover:shadow-glow transition-all duration-300 group"
          >
            Découvrir nos solutions
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Bottom subtle text */}
        <div className="mt-16 animate-fade-in-up animate-delayed-4">
          <p className="text-sm text-muted-foreground/60">
            Une révolution technologique à portée de main
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
