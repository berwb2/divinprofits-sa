
import AppHeader from "../components/AppHeader";
import Hero from "../components/Hero";
import VideoShowcase from "../components/VideoShowcase";
import PortfolioCarousel from "../components/PortfolioCarousel";
import InfiniteScrollPortfolio from "../components/InfiniteScrollPortfolio";
import ServicesSection from "../components/ServicesSection";
import Process from "../components/Process";
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
      {/* 2. Video/Showcase Section - moved to appear right after Hero */}
      <VideoShowcase />
      {/* 3. Infinite Scroll Portfolio - moved to appear after Video */}
      <InfiniteScrollPortfolio />
      {/* 4. Value Proposition 3-feature Section */}
      <section id="services">
        <ServicesSection />
      </section>
      {/* 5. How it Works/Process Section */}
      <Process />
      {/* 6. Check Out Our Work - moved to appear before testimonials */}
      <section id="portfolio">
        <PortfolioCarousel />
      </section>
      {/* 7. Client Testimonials */}
      <section id="clients">
        <Testimonials />
      </section>
      {/* 8. Contact Section */}
      <ContactSection />
    </main>
    {/* 9. Footer/End Banner */}
    <AppFooter />
  </div>
);

export default Index;
