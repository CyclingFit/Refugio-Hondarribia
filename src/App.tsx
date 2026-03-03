import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/hooks/useTheme";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import Refugio from "./pages/Refugio";
import Acceso from "./pages/Acceso";
import Servicios from "./pages/Servicios";
import Normas from "./pages/Normas";
import Emergencias from "./pages/Emergencias";
import Meteo from "./pages/Meteo";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/refugio" element={<PageTransition><Refugio /></PageTransition>} />
        <Route path="/acceso" element={<PageTransition><Acceso /></PageTransition>} />
        <Route path="/servicios" element={<PageTransition><Servicios /></PageTransition>} />
        <Route path="/normas" element={<PageTransition><Normas /></PageTransition>} />
        <Route path="/emergencias" element={<PageTransition><Emergencias /></PageTransition>} />
        <Route path="/meteo" element={<PageTransition><Meteo /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><Contacto /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
