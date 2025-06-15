
import React from 'react';

const Preview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex flex-col justify-center items-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center w-full max-w-7xl mx-auto flex flex-col justify-center min-h-screen py-8 space-y-12">
        {/* Main logo/title */}
        <div>
          <h1 className="text-[10rem] md:text-[16rem] lg:text-[20rem] font-bold gradient-text animate-fade-in-up leading-none">
            Kleero
          </h1>
        </div>

        {/* Catchphrase */}
        <div className="animate-fade-in-up animate-delayed-2">
          <p className="text-4xl md:text-6xl lg:text-8xl font-bold gradient-text leading-tight">
            L'avenir de l'automatisation
          </p>
        </div>

        {/* Bottom section */}
        <div className="animate-fade-in-up animate-delayed-3">
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
            Transformez votre entreprise
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
