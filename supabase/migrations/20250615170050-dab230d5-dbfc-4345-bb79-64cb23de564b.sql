
-- Créer un bucket pour stocker les médias des automatisations
INSERT INTO storage.buckets (id, name, public) 
VALUES ('automation-media', 'automation-media', true);

-- Créer des politiques pour permettre l'upload et la lecture des fichiers
CREATE POLICY "Anyone can view automation media" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'automation-media');

CREATE POLICY "Authenticated users can upload automation media" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'automation-media');

CREATE POLICY "Authenticated users can update automation media" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'automation-media');

CREATE POLICY "Authenticated users can delete automation media" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'automation-media');
