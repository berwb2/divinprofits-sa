
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Shibui <span className="text-orange-500">Digital</span>
            </h3>
            <p className="text-gray-300 mb-4">
              The Web Design Agency driving Growth for Businesses just like you.
            </p>
            <div className="text-sm text-gray-400">
              <p>info@shibuicommerce.com</p>
              <p>📍 St Johns Drive, 2614</p>
              <p>📍 Melbourne, Australia</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">SEO</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Branding</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-sm">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-sm">ig</span>
              </a>
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium w-full">
              Book A Call 
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Shibui Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
