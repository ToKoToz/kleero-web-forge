
import React from 'react';

const Preview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main logo/title */}
        <div className="mb-16">
          <h1 className="text-9xl md:text-[12rem] font-bold gradient-text mb-8 animate-fade-in-up leading-none">
            Kleero
          </h1>
          <p className="text-3xl md:text-4xl text-muted-foreground font-light animate-fade-in-up animate-delayed-1">
            L'avenir de l'automatisation commence ici
          </p>
        </div>

        {/* Enhanced catchphrase */}
        <div className="mb-20 animate-fade-in-up animate-delayed-2">
          <p className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Transformez vos processus
          </p>
          <p className="text-4xl md:text-5xl font-bold gradient-text mb-8 leading-tight">
            Libérez votre potentiel
          </p>
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Une révolution technologique à portée de main
          </p>
        </div>

        {/* Additional inspiring text */}
        <div className="animate-fade-in-up animate-delayed-3">
          <p className="text-xl md:text-2xl text-muted-foreground/80 font-light max-w-3xl mx-auto leading-relaxed">
            Découvrez comment l'intelligence artificielle peut transformer votre entreprise
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
