
import AppHeader from "../components/AppHeader";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import ServicesSection from "../components/ServicesSection";
import Process from "../components/Process";
import PortfolioCarousel from "../components/PortfolioCarousel";
import VideoShowcase from "../components/VideoShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import AppFooter from "../components/AppFooter";

// The landing page is restructured to match the uploaded wireframe layout and order.
const Index = () => (
  <div className="font-sans bg-gradient-to-b from-dp-blue-light via-white to-dp-blue-dark min-h-screen w-full">
    <AppHeader />
    <main>
      {/* 1. Hero Section */}
      <Hero />
      {/* 2. Trust/Logo Bar - brand/partner logos */}
      <TrustSection />
      {/* 3. Value Proposition 3-feature Section */}
      <ServicesSection />
      {/* 4. How it Works/Process Section */}
      <Process />
      {/* 5. Portfolio/Our Work Carousel */}
      <PortfolioCarousel />
      {/* 6. Video/Showcase Section */}
      <VideoShowcase />
      {/* 7. Client Testimonials */}
      <TestimonialsSection />
    </main>
    {/* 8. Footer/End Banner */}
    <AppFooter />
  </div>
);

export default Index;
