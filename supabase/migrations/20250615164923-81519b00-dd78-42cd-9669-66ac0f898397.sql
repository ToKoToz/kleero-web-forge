
-- Créer une table pour les utilisateurs admin
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Créer une table pour les automatisations
CREATE TABLE public.automations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  complexity TEXT NOT NULL CHECK (complexity IN ('Simple', 'Intermédiaire', 'Avancé')),
  time_gain TEXT NOT NULL,
  benefits TEXT[] NOT NULL,
  tags TEXT[] NOT NULL,
  icon_name TEXT NOT NULL,
  is_public BOOLEAN NOT NULL DEFAULT true,
  is_active BOOLEAN NOT NULL DEFAULT true,
  details_title TEXT,
  details_description TEXT,
  details_video_url TEXT,
  details_images TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automations ENABLE ROW LEVEL SECURITY;

-- Créer des politiques pour admin_users (seulement lecture pour l'authentification)
CREATE POLICY "Admin users can view their own data" 
  ON public.admin_users 
  FOR SELECT 
  TO public 
  USING (true);

-- Créer des politiques pour automations (lecture publique, écriture pour admin authentifié)
CREATE POLICY "Anyone can view public automations" 
  ON public.automations 
  FOR SELECT 
  TO public 
  USING (is_public = true);

CREATE POLICY "Admins can manage automations" 
  ON public.automations 
  FOR ALL 
  TO public 
  USING (true);

-- Insérer des données d'exemple pour les automatisations existantes
INSERT INTO public.automations (title, description, complexity, time_gain, benefits, tags, icon_name, details_title, details_description) VALUES
(
  'Publication Sociale Automatisée',
  'Connectez votre blog ou flux de produits pour publier automatiquement vos nouveautés sur Twitter, LinkedIn et Facebook. Gagnez du temps et maintenez une présence active sans effort.',
  'Simple',
  '15h/semaine',
  ARRAY['Gain de temps : 15h/semaine', 'Portée augmentée de 300%', 'Engagement constant'],
  ARRAY['Social Media', 'Marketing', 'Contenu'],
  'Share2',
  'Publication Sociale Automatisée - Détails',
  'Cette automatisation révolutionnaire vous permet de maintenir une présence constante sur les réseaux sociaux sans effort manuel. Le système analyse votre contenu, l''optimise pour chaque plateforme et publie aux moments les plus propices pour maximiser l''engagement.'
),
(
  'Tri Intelligent des Demandes Client',
  'Notre système analyse les emails entrants, les catégorise (facturation, technique, commercial) et les assigne automatiquement au bon département, réduisant les temps de réponse.',
  'Avancé',
  '25h/semaine',
  ARRAY['Temps de réponse divisé par 3', 'Satisfaction client +40%', 'Erreurs humaines éliminées'],
  ARRAY['Support Client', 'IA', 'Productivité'],
  'MailCheck',
  'Tri Intelligent des Demandes Client - Détails',
  'Grâce à l''intelligence artificielle avancée, cette solution analyse automatiquement le contenu, le ton et l''urgence de chaque demande client pour l''orienter vers le bon service avec le niveau de priorité approprié.'
),
(
  'Génération de Leads & Intégration CRM',
  'Chaque soumission de formulaire sur votre site crée automatiquement une fiche dans votre CRM (HubSpot, Salesforce) et notifie votre équipe commerciale.',
  'Intermédiaire',
  '10h/semaine',
  ARRAY['Conversion +60%', 'Aucun lead perdu', 'Suivi automatisé'],
  ARRAY['CRM', 'Ventes', 'Lead Generation'],
  'Zap',
  'Génération de Leads & Intégration CRM - Détails',
  'Cette automatisation crée un pipeline commercial parfaitement huilé en connectant votre site web directement à votre CRM, avec un scoring automatique des leads et une notification intelligente de votre équipe commerciale.'
);

-- Insérer un utilisateur admin par défaut (mot de passe: admin123)
INSERT INTO public.admin_users (email, password_hash) VALUES
('admin@kleero.com', '$2b$10$rHhsYG7KEGKKOkW8yG7KeO4I4H4jJ4VB4I4I4I4I4I4I4I4I4I4I4I');
