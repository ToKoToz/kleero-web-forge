
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import AdminContactMessages from '@/components/admin/AdminContactMessages';
import AdminAutomations from '@/components/admin/AdminAutomations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, MessageSquare, Zap } from 'lucide-react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const adminAuth = localStorage.getItem('admin_authenticated');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .single();

      if (error || !data) {
        toast.error('Identifiants incorrects');
        return;
      }

      if (password === 'admin123') {
        setIsAuthenticated(true);
        localStorage.setItem('admin_authenticated', 'true');
        toast.success('Connexion réussie');
      } else {
        toast.error('Identifiants incorrects');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      toast.error('Erreur de connexion');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
    setEmail('');
    setPassword('');
    toast.success('Déconnexion réussie');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">Administration Kleero</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Panel d'Administration</h1>
            <p className="text-muted-foreground">Gérez votre site Kleero</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Déconnexion
          </Button>
        </div>

        <Tabs defaultValue="messages" className="space-y-6">
          <TabsList className="grid grid-cols-2 w-fit">
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Messages Contact
            </TabsTrigger>
            <TabsTrigger value="automations" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Automatisations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="messages">
            <AdminContactMessages />
          </TabsContent>

          <TabsContent value="automations">
            <AdminAutomations />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
