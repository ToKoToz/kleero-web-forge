
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { X, Plus } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import MediaUpload from '../MediaUpload';

interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  name: string;
}

interface Automation {
  id: string;
  title: string;
  description: string;
  complexity: string;
  time_gain: string;
  benefits: string[];
  tags: string[];
  icon_name: string;
  is_public: boolean;
  is_active: boolean;
  details_title?: string;
  details_description?: string;
  details_video_url?: string;
  details_images?: string[];
}

interface AutomationFormProps {
  automation?: Automation | null;
  onClose: () => void;
}

const AutomationForm: React.FC<AutomationFormProps> = ({ automation, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    complexity: 'Simple',
    time_gain: '',
    benefits: [''],
    tags: [''],
    icon_name: 'Zap',
    is_public: true,
    is_active: true,
    details_title: '',
    details_description: '',
    details_video_url: '',
  });
  const [medias, setMedias] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (automation) {
      setFormData({
        title: automation.title,
        description: automation.description,
        complexity: automation.complexity,
        time_gain: automation.time_gain,
        benefits: automation.benefits.length > 0 ? automation.benefits : [''],
        tags: automation.tags.length > 0 ? automation.tags : [''],
        icon_name: automation.icon_name,
        is_public: automation.is_public,
        is_active: automation.is_active,
        details_title: automation.details_title || '',
        details_description: automation.details_description || '',
        details_video_url: automation.details_video_url || '',
      });

      // Convertir les URLs existantes en objets MediaItem
      if (automation.details_images && automation.details_images.length > 0) {
        const existingMedias = automation.details_images.map((url, index) => ({
          id: `existing-${index}`,
          url,
          type: url.includes('video') || url.includes('.mp4') || url.includes('.webm') ? 'video' as const : 'image' as const,
          name: `Média existant ${index + 1}`
        }));
        setMedias(existingMedias);
      }
    }
  }, [automation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const dataToSave = {
        ...formData,
        benefits: formData.benefits.filter(b => b.trim() !== ''),
        tags: formData.tags.filter(t => t.trim() !== ''),
        details_images: medias.map(media => media.url),
        updated_at: new Date().toISOString(),
      };

      if (automation) {
        // Mise à jour
        const { error } = await supabase
          .from('automations')
          .update(dataToSave)
          .eq('id', automation.id);

        if (error) {
          toast.error('Erreur lors de la mise à jour');
          return;
        }

        toast.success('Automatisation mise à jour');
      } else {
        // Création
        const { error } = await supabase
          .from('automations')
          .insert([dataToSave]);

        if (error) {
          toast.error('Erreur lors de la création');
          return;
        }

        toast.success('Automatisation créée');
      }

      onClose();
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la sauvegarde');
    } finally {
      setIsLoading(false);
    }
  };

  const addArrayField = (field: 'benefits' | 'tags') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const updateArrayField = (field: 'benefits' | 'tags', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const removeArrayField = (field: 'benefits' | 'tags', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>
            {automation ? 'Modifier l\'automatisation' : 'Nouvelle automatisation'}
          </CardTitle>
          <Button variant="outline" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Titre</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="icon_name">Icône</Label>
              <Select value={formData.icon_name} onValueChange={(value) => setFormData(prev => ({ ...prev, icon_name: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Zap">Zap</SelectItem>
                  <SelectItem value="Share2">Share2</SelectItem>
                  <SelectItem value="MailCheck">MailCheck</SelectItem>
                  <SelectItem value="Bot">Bot</SelectItem>
                  <SelectItem value="Workflow">Workflow</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              required
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="complexity">Complexité</Label>
              <Select value={formData.complexity} onValueChange={(value) => setFormData(prev => ({ ...prev, complexity: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Simple">Simple</SelectItem>
                  <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                  <SelectItem value="Avancé">Avancé</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="time_gain">Gain de temps</Label>
              <Input
                id="time_gain"
                value={formData.time_gain}
                onChange={(e) => setFormData(prev => ({ ...prev, time_gain: e.target.value }))}
                placeholder="ex: 15h/semaine"
                required
              />
            </div>
          </div>

          <div>
            <Label>Bénéfices clés</Label>
            <div className="space-y-2">
              {formData.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={benefit}
                    onChange={(e) => updateArrayField('benefits', index, e.target.value)}
                    placeholder="Bénéfice"
                  />
                  {formData.benefits.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayField('benefits', index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addArrayField('benefits')}
              >
                <Plus className="w-4 h-4 mr-2" />
                Ajouter un bénéfice
              </Button>
            </div>
          </div>

          <div>
            <Label>Tags</Label>
            <div className="space-y-2">
              {formData.tags.map((tag, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={tag}
                    onChange={(e) => updateArrayField('tags', index, e.target.value)}
                    placeholder="Tag"
                  />
                  {formData.tags.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayField('tags', index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addArrayField('tags')}
              >
                <Plus className="w-4 h-4 mr-2" />
                Ajouter un tag
              </Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Détails (pour la popup)</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="details_title">Titre des détails</Label>
                <Input
                  id="details_title"
                  value={formData.details_title}
                  onChange={(e) => setFormData(prev => ({ ...prev, details_title: e.target.value }))}
                  placeholder="Titre pour la popup de détails"
                />
              </div>

              <div>
                <Label htmlFor="details_description">Description détaillée</Label>
                <Textarea
                  id="details_description"
                  value={formData.details_description}
                  onChange={(e) => setFormData(prev => ({ ...prev, details_description: e.target.value }))}
                  placeholder="Description complète pour la popup"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="details_video_url">URL de la vidéo (optionnel)</Label>
                <Input
                  id="details_video_url"
                  value={formData.details_video_url}
                  onChange={(e) => setFormData(prev => ({ ...prev, details_video_url: e.target.value }))}
                  placeholder="https://youtube.com/..."
                />
              </div>

              <MediaUpload
                medias={medias}
                onMediasChange={setMedias}
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
              <Switch
                id="is_public"
                checked={formData.is_public}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_public: checked }))}
              />
              <Label htmlFor="is_public">Public (bouton visible)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
              />
              <Label htmlFor="is_active">Actif</Label>
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AutomationForm;
