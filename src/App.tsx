import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Search from "./pages/Search";
import Comparison from "./pages/Comparison";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Index />} />
          
          {/* Search pages with layout */}
          <Route 
            path="/search" 
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Search />
                </main>
                <Footer />
              </div>
            } 
          />
          
          {/* Comparison page with layout */}
          <Route 
            path="/comparison" 
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Comparison />
                </main>
                <Footer />
              </div>
            } 
          />
          
          {/* Login page (no header/footer) */}
          <Route path="/login" element={<Login />} />
          
          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
