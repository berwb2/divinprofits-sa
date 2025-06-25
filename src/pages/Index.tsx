
import AppHeader from "../components/AppHeader";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Process from "../components/Process";
import VideoShowcase from "../components/VideoShowcase";
import PortfolioCarousel from "../components/PortfolioCarousel";
import InfiniteScrollPortfolio from "../components/InfiniteScrollPortfolio";
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
      {/* 2. Value Proposition 3-feature Section */}
      <section id="services">
        <ServicesSection />
      </section>
      {/* 3. How it Works/Process Section */}
      <Process />
      {/* 4. Video/Showcase Section - moved to appear right after Process */}
      <VideoShowcase />
      {/* 5. Portfolio/Our Work Carousel */}
      <section id="portfolio">
        <PortfolioCarousel />
      </section>
      {/* 5.5. Infinite Scroll Portfolio */}
      <InfiniteScrollPortfolio />
      {/* 6. Client Testimonials */}
      <section id="clients">
        <Testimonials />
      </section>
      {/* 7. Contact Section */}
      <ContactSection />
    </main>
    {/* 8. Footer/End Banner */}
    <AppFooter />
  </div>
);

export default Index;
