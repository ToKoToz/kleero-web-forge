
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Plus, Edit, Eye, EyeOff, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import AutomationForm from './AutomationForm';

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

const AdminAutomations = () => {
  const [automations, setAutomations] = useState<Automation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAutomation, setEditingAutomation] = useState<Automation | null>(null);

  useEffect(() => {
    fetchAutomations();
  }, []);

  const fetchAutomations = async () => {
    try {
      const { data, error } = await supabase
        .from('automations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erreur:', error);
        toast.error('Erreur lors du chargement des automatisations');
        return;
      }

      setAutomations(data || []);
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors du chargement des automatisations');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleVisibility = async (id: string, isPublic: boolean) => {
    try {
      const { error } = await supabase
        .from('automations')
        .update({ is_public: !isPublic })
        .eq('id', id);

      if (error) {
        toast.error('Erreur lors de la mise à jour');
        return;
      }

      toast.success('Visibilité mise à jour');
      fetchAutomations();
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la mise à jour');
    }
  };

  const toggleStatus = async (id: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('automations')
        .update({ is_active: !isActive })
        .eq('id', id);

      if (error) {
        toast.error('Erreur lors de la mise à jour');
        return;
      }

      toast.success('Statut mis à jour');
      fetchAutomations();
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la mise à jour');
    }
  };

  const deleteAutomation = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette automatisation ?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('automations')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error('Erreur lors de la suppression');
        return;
      }

      toast.success('Automatisation supprimée');
      fetchAutomations();
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  const handleEdit = (automation: Automation) => {
    setEditingAutomation(automation);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingAutomation(null);
    fetchAutomations();
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (showForm) {
    return (
      <AutomationForm
        automation={editingAutomation}
        onClose={handleCloseForm}
      />
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">Chargement des automatisations...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Automatisations ({automations.length})</CardTitle>
            <Button onClick={() => setShowForm(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Nouvelle automatisation
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre</TableHead>
                <TableHead>Complexité</TableHead>
                <TableHead>Gain de temps</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Visibilité</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {automations.map((automation) => (
                <TableRow key={automation.id}>
                  <TableCell className="font-medium">{automation.title}</TableCell>
                  <TableCell>
                    <Badge className={getComplexityColor(automation.complexity)}>
                      {automation.complexity}
                    </Badge>
                  </TableCell>
                  <TableCell>{automation.time_gain}</TableCell>
                  <TableCell>
                    <Badge className={automation.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                      {automation.is_active ? 'Actif' : 'Inactif'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={automation.is_public ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}>
                      {automation.is_public ? 'Public' : 'Privé'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(automation)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleVisibility(automation.id, automation.is_public)}
                      >
                        {automation.is_public ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleStatus(automation.id, automation.is_active)}
                      >
                        {automation.is_active ? 'Désactiver' : 'Activer'}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteAutomation(automation.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAutomations;
