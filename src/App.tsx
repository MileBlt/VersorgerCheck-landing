import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ErgebnisChat1 from "./pages/ErgebnisChat1";
import ErgebnisChat2 from "./pages/ErgebnisChat2";
import ErgebnisChat3 from "./pages/ErgebnisChat3";
import ErgebnisChat4 from "./pages/ErgebnisChat4";
import LandingCopy from "./pages/LandingCopy";
import Beauftragen from "./pages/Beauftragen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ergebnis-chat1" element={<ErgebnisChat1 />} />
          <Route path="/ergebnis-chat2" element={<ErgebnisChat2 />} />
          <Route path="/ergebnis-chat3" element={<ErgebnisChat3 />} />
          <Route path="/ergebnis-chat4" element={<ErgebnisChat4 />} />
          <Route path="/ergebnis" element={<ErgebnisChat4 />} />
          <Route path="/landing-copy" element={<LandingCopy />} />
          <Route path="/beauftragen" element={<Beauftragen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
