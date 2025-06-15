
-- Créer une table pour stocker les messages de contact
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- Activer Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Créer une politique pour permettre les insertions publiques (pour le formulaire de contact)
CREATE POLICY "Anyone can submit contact messages" 
  ON public.contact_messages 
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Créer une politique pour que seuls les administrateurs puissent voir les messages
-- (pour l'instant, on permet la lecture publique, vous pourrez la restreindre plus tard)
CREATE POLICY "Public can view contact messages" 
  ON public.contact_messages 
  FOR SELECT 
  TO public 
  USING (true);
