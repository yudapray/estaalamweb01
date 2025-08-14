import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./whatsapp.css"; // file CSS untuk animasi

const queryClient = new QueryClient();
const waLink = "https://wa.me/628996939588";
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Floating WhatsApp Button dengan Shake Animation */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-4 bottom-4 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all hover:scale-110 whatsapp-shake"
            aria-label="Chat via WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.5 3.5A11 11 0 0012 1C6 1 1 6 1 12c0 2 .6 3.9 1.7 5.6L1 23l5.5-1.4A10.9 10.9 0 0012 23c6 0 11-5 11-11 0-1.9-.5-3.6-1.5-5.1zM12 21a9 9 0 01-4.7-1.3l-.3-.2-3.3.9.9-3.3-.2-.3A9 9 0 1112 21z" />
            </svg>
            <span className="hidden sm:inline">Hubungi</span>
          </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
