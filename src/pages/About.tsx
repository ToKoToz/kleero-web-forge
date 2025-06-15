
const About = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">À Propos de Kleero</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Notre mission : Rendre la technologie accessible et performante pour tous.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Notre Histoire</h2>
          <p className="text-muted-foreground space-y-4">
            Fondée par des passionnés du web et de l'intelligence artificielle, Kleero est née d'une ambition simple : aider les entreprises à prospérer dans le monde numérique. Nous croyons en une approche centrée sur le client, où chaque projet est une collaboration étroite pour atteindre des objectifs concrets.
            <br/><br/>
            Nous combinons l'expertise technique à une compréhension approfondie des enjeux business pour livrer des solutions qui ne sont pas seulement belles, mais surtout efficaces.
          </p>
        </div>
        <div className="bg-secondary/40 rounded-lg p-8">
           <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop" alt="Team working" className="rounded-lg shadow-lg"/>
        </div>
      </div>
    </div>
  );
};

export default About;
