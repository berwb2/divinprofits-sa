
import AppHeader from "../components/AppHeader";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import ServicesSection from "../components/ServicesSection";
import Process from "../components/Process";
import VideoShowcase from "../components/VideoShowcase";
import PortfolioCarousel from "../components/PortfolioCarousel";
import InfiniteScrollCarousel from "../components/InfiniteScrollCarousel";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import AppFooter from "../components/AppFooter";

// The landing page is restructured to match the uploaded wireframe layout and order.
const Index = () => (
  <div className="font-sans bg-white min-h-screen w-full">
    <AppHeader />
    <main>
      {/* 1. Hero Section */}
      <section id="home">
        <Hero />
      </section>
      {/* 2. Trust/Logo Bar - brand/partner logos */}
      <TrustSection />
      {/* 3. Value Proposition 3-feature Section */}
      <section id="services">
        <ServicesSection />
      </section>
      {/* 4. How it Works/Process Section */}
      <Process />
      {/* 5. Video/Showcase Section - moved to appear right after Process */}
      <VideoShowcase />
      {/* 6. Portfolio/Our Work Carousel */}
      <section id="portfolio">
        <PortfolioCarousel />
      </section>
      {/* 7. Infinite Scroll Carousel - New addition beneath portfolio */}
      <InfiniteScrollCarousel />
      {/* 8. Client Testimonials */}
      <section id="clients">
        <Testimonials />
      </section>
      {/* 9. Contact Section */}
      <ContactSection />
    </main>
    {/* 10. Footer/End Banner */}
    <AppFooter />
  </div>
);

export default Index;
