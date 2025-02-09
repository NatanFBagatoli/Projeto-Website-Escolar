import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import PedagogicalProject from "./pages/PedagogicalProject";
import HighSchool from "./pages/HighSchool";
import PreUniversity from "./pages/PreUniversity";
import Results from "./pages/Results";
import Events from "./pages/Events";
import YourTeam from "./pages/YourTeam";
import CultureMaker from "./pages/CultureMaker";
import Labs from "./pages/Labs";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pedagogical-project" element={<PedagogicalProject />} />
          <Route path="/high-school" element={<HighSchool />} />
          <Route path="/pre-university" element={<PreUniversity />} />
          <Route path="/results" element={<Results />} />
          <Route path="/events" element={<Events />} />
          <Route path="/your-team" element={<YourTeam />} />
          <Route path="/culture-maker" element={<CultureMaker />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;