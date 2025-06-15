
import React from 'react';

const Preview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex flex-col justify-center items-center p-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto flex flex-col justify-between min-h-screen py-16">
        {/* Main logo/title - Top section */}
        <div className="flex-1 flex items-center justify-center">
          <div>
            <h1 className="text-[8rem] md:text-[14rem] lg:text-[16rem] font-bold gradient-text mb-8 animate-fade-in-up leading-none">
              Kleero
            </h1>
          </div>
        </div>

        {/* Catchphrase - Middle section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-fade-in-up animate-delayed-2">
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
              L'avenir de l'automatisation
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex-1 flex items-end justify-center">
          <div className="animate-fade-in-up animate-delayed-3">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              Transformez votre entreprise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
