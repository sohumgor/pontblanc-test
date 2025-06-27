
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import StrategyConsulting from "./pages/services/StrategyConsulting";
import OperationsConsulting from "./pages/services/OperationsConsulting";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import Industries from "./pages/Industries";
import StartupsIndustry from "./pages/industries/StartupsIndustry";
import ManufacturingIndustry from "./pages/industries/ManufacturingIndustry";
import HealthcareIndustry from "./pages/industries/HealthcareIndustry";
import NonprofitsIndustry from "./pages/industries/NonprofitsIndustry";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Testimonials from "./pages/Testimonials";
import FAQs from "./pages/FAQs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="services/strategy" element={<StrategyConsulting />} />
            <Route path="services/operations" element={<OperationsConsulting />} />
            <Route path="services/digital" element={<DigitalTransformation />} />
            <Route path="industries" element={<Industries />} />
            <Route path="industries/startups" element={<StartupsIndustry />} />
            <Route path="industries/manufacturing" element={<ManufacturingIndustry />} />
            <Route path="industries/healthcare" element={<HealthcareIndustry />} />
            <Route path="industries/nonprofits" element={<NonprofitsIndustry />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="blog" element={<Blog />} />
            <Route path="resources" element={<Resources />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="faqs" element={<FAQs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
