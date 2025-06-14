
import Header from "../components/Header";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import Trust from "../components/Trust";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Process />
      <Testimonials />
      <Portfolio />
      <Trust />
      <Footer />
    </div>
  );
};

export default Index;
