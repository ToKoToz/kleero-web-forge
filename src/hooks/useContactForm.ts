
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContactMessage = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          subject: data.subject,
          message: data.message,
        }]);

      if (error) {
        console.error('Erreur lors de l\'envoi:', error);
        toast.error('Une erreur est survenue. Veuillez réessayer.');
        return false;
      }

      toast.success('Votre message a été envoyé avec succès !');
      return true;
    } catch (error) {
      console.error('Erreur inattendue:', error);
      toast.error('Une erreur inattendue est survenue.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitContactMessage, isSubmitting };
};
