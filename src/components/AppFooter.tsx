
const AppFooter = () => (
  <footer className="py-12 bg-dp-blue-dark text-blue-100">
    <div className="container flex flex-col md:flex-row md:justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-display font-bold text-2xl text-white">DeepDiveProfits</span>
        </div>
        <p className="mb-0 text-blue-200 text-base">
          Creating premium websites that drive profit—for businesses who demand results.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <a href="#services" className="hover:text-dp-accent transition-colors font-medium">Services</a>
        <a href="#portfolio" className="hover:text-dp-accent transition-colors font-medium">Our Work</a>
        <a href="#clients" className="hover:text-dp-accent transition-colors font-medium">Clients</a>
        <a href="#contact" className="hover:text-dp-accent transition-colors font-medium">Contact</a>
      </div>
    </div>
    <div className="text-center mt-7 text-blue-400 text-sm opacity-70">
      &copy; {new Date().getFullYear()} DeepDiveProfits. All rights reserved.
    </div>
  </footer>
);

export default AppFooter;
