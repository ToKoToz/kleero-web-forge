
import React from 'react';

const Preview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex flex-col justify-center items-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center w-full max-w-7xl mx-auto flex flex-col justify-center items-center min-h-screen">
        {/* Logo */}
        <div className="animate-fade-in-up mb-8">
          <img 
            src="/lovable-uploads/128d0082-c3f0-4b5d-ab1d-02db01e617fd.png" 
            alt="Kleero Logo" 
            className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Main logo/title */}
        <div className="animate-fade-in-up animate-delayed-1">
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold gradient-text leading-none">
            Kleero
          </h1>
        </div>

        {/* Catchphrase - collé au titre */}
        <div className="animate-fade-in-up animate-delayed-2 -mt-4">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
            L'avenir de l'automatisation
          </p>
        </div>

        {/* Bottom section - collé au catchphrase */}
        <div className="animate-fade-in-up animate-delayed-3 -mt-2">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
            Transformez votre entreprise
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
