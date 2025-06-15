
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Mail, Phone, Calendar, Eye, CheckCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: string;
  created_at: string;
}

const AdminContactMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erreur:', error);
        toast.error('Erreur lors du chargement des messages');
        return;
      }

      setMessages(data || []);
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors du chargement des messages');
    } finally {
      setIsLoading(false);
    }
  };

  const updateMessageStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id);

      if (error) {
        toast.error('Erreur lors de la mise à jour');
        return;
      }

      toast.success('Statut mis à jour');
      fetchMessages();
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la mise à jour');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'read': return 'bg-yellow-100 text-yellow-800';
      case 'replied': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new': return 'Nouveau';
      case 'read': return 'Lu';
      case 'replied': return 'Répondu';
      default: return 'Inconnu';
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">Chargement des messages...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Messages de Contact ({messages.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Sujet</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.subject || 'Sans sujet'}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(message.status)}>
                      {getStatusLabel(message.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(message.created_at).toLocaleDateString('fr-FR')}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedMessage(message)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      {message.status === 'new' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateMessageStatus(message.id, 'read')}
                        >
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedMessage && (
        <Card>
          <CardHeader>
            <CardTitle>Détails du message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="font-semibold">Nom:</Label>
                <p>{selectedMessage.name}</p>
              </div>
              <div>
                <Label className="font-semibold">Email:</Label>
                <p>{selectedMessage.email}</p>
              </div>
              {selectedMessage.phone && (
                <div>
                  <Label className="font-semibold">Téléphone:</Label>
                  <p>{selectedMessage.phone}</p>
                </div>
              )}
              <div>
                <Label className="font-semibold">Sujet:</Label>
                <p>{selectedMessage.subject || 'Sans sujet'}</p>
              </div>
            </div>
            <div>
              <Label className="font-semibold">Message:</Label>
              <p className="mt-2 p-4 bg-gray-50 rounded-lg">{selectedMessage.message}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => updateMessageStatus(selectedMessage.id, 'read')}
                disabled={selectedMessage.status !== 'new'}
              >
                Marquer comme lu
              </Button>
              <Button
                onClick={() => updateMessageStatus(selectedMessage.id, 'replied')}
                disabled={selectedMessage.status === 'replied'}
              >
                Marquer comme répondu
              </Button>
              <Button
                variant="outline"
                onClick={() => setSelectedMessage(null)}
              >
                Fermer
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminContactMessages;
