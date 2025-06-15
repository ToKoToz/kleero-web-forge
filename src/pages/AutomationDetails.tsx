
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Zap, Brain, Target, CheckCircle, ArrowRight, Sparkles, Code, MessageSquare, BarChart3, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const AutomationDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-500/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="space-y-20">
          {/* Header Section */}
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full text-purple-600 font-medium text-sm border border-purple-500/20">
              <Bot className="w-4 h-4" />
              Intelligence Artificielle
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Automatisation & LLMO
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Exploitez la puissance des Large Language Models pour automatiser vos processus, 
                améliorer votre service client et créer des expériences utilisateur innovantes.
              </p>
            </div>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Chatbots Intelligents */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm hover-lift transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative z-10 p-1">
                <div className="bg-background/80 backdrop-blur-xl rounded-lg p-8">
                  <CardHeader className="text-center p-0 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Chatbots Intelligents
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground text-center mb-6">
                      Des assistants virtuels capables de comprendre et répondre naturellement à vos clients 24h/24.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Support client automatisé",
                        "Réponses contextuelles intelligentes",
                        "Intégration multiplateforme",
                        "Apprentissage continu"
                      ].map((feature, index) => (
                        <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-purple-500/20">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Génération de Contenu */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm hover-lift transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative z-10 p-1">
                <div className="bg-background/80 backdrop-blur-xl rounded-lg p-8">
                  <CardHeader className="text-center p-0 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Génération de Contenu
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground text-center mb-6">
                      Automatisez la création de contenu de qualité pour vos campagnes marketing et votre communication.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Articles de blog optimisés SEO",
                        "Descriptions produits automatisées",
                        "Campagnes email personnalisées",
                        "Contenu réseaux sociaux"
                      ].map((feature, index) => (
                        <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-purple-500/20">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Analyse de Données */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm hover-lift transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative z-10 p-1">
                <div className="bg-background/80 backdrop-blur-xl rounded-lg p-8">
                  <CardHeader className="text-center p-0 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Analyse de Données
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground text-center mb-6">
                      Transformez vos données brutes en insights exploitables avec l'intelligence artificielle.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Rapports automatisés",
                        "Prédictions comportementales",
                        "Analyse de sentiment",
                        "Recommandations personnalisées"
                      ].map((feature, index) => (
                        <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-purple-500/20">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Optimisation des Processus */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm hover-lift transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative z-10 p-1">
                <div className="bg-background/80 backdrop-blur-xl rounded-lg p-8">
                  <CardHeader className="text-center p-0 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Cog className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Optimisation des Processus
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground text-center mb-6">
                      Automatisez vos tâches répétitives et optimisez vos workflows pour gagner en efficacité.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Workflows automatisés",
                        "Gestion intelligente des tâches",
                        "Intégrations API avancées",
                        "Monitoring en temps réel"
                      ].map((feature, index) => (
                        <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-purple-500/20">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>

          {/* Process Section */}
          <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Notre Approche LLMO
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Large Language Model Optimization - Une méthodologie éprouvée pour maximiser l'efficacité de l'IA générative dans votre entreprise.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <Target className="w-8 h-8" />, title: "Analyse", desc: "Étude approfondie de vos besoins et processus existants" },
                { icon: <Brain className="w-8 h-8" />, title: "Conception", desc: "Développement de solutions IA sur mesure adaptées à vos défis" },
                { icon: <Zap className="w-8 h-8" />, title: "Implémentation", desc: "Déploiement et intégration dans votre environnement existant" },
                { icon: <BarChart3 className="w-8 h-8" />, title: "Optimisation", desc: "Monitoring continu et amélioration des performances" }
              ].map((step, index) => (
                <Card key={step.title} className="relative overflow-hidden border-0 bg-gradient-to-b from-purple-500/10 to-transparent backdrop-blur-sm hover-lift transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-4 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Technologies & Modèles</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nous travaillons avec les technologies d'IA les plus avancées du marché.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "GPT-4 & GPT-4o",
                "Claude 3.5 Sonnet",
                "Gemini Pro",
                "Llama 3.1",
                "Mistral Large",
                "OpenAI Whisper",
                "Stable Diffusion",
                "LangChain"
              ].map((tech, index) => (
                <div key={tech} className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center font-medium hover:scale-105 transition-transform duration-300">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Prêt à révolutionner vos processus avec l'IA ?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Discutons de vos défis et découvrons ensemble comment l'automatisation intelligente peut transformer votre entreprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-purple-500/25 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <NavLink to="/contact">
                      Démarrons votre projet IA
                      <Sparkles className="w-5 h-5 ml-2" />
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/5 px-8 py-3 rounded-full">
                    <NavLink to="/services">
                      Voir tous nos services
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationDetails;
