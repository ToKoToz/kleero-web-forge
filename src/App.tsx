
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Automations from "./pages/Automations";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import WebCreationDetails from "./pages/WebCreationDetails";
import SEOOptimizationDetails from "./pages/SEOOptimizationDetails";
import AutomationDetails from "./pages/AutomationDetails";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/creation-web" element={<WebCreationDetails />} />
                <Route path="/services/optimisation-seo" element={<SEOOptimizationDetails />} />
                <Route path="/services/automatisation-llmo" element={<AutomationDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/automations" element={<Automations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
