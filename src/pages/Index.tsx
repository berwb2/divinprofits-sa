
import AppHeader from "../components/AppHeader";
import Hero from "../components/Hero";
import VideoShowcase from "../components/VideoShowcase";
import PortfolioCarousel from "../components/PortfolioCarousel";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TrustSection from "../components/TrustSection";
import AppFooter from "../components/AppFooter";

const Index = () => (
  <div className="font-sans bg-gradient-to-b from-dp-blue-light via-white to-dp-blue-dark min-h-screen w-full">
    <AppHeader />
    <main>
      <Hero />
      <VideoShowcase />
      <PortfolioCarousel />
      <ServicesSection />
      <TestimonialsSection />
      <TrustSection />
    </main>
    <AppFooter />
  </div>
);
export default Index;
