import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`py-12 ${isDark ? 'bg-black border-t border-yellow-600/20' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              VSN INTERIORS
            </h3>
            <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
              Luxury Living Redefined in Vizianagaram. Premium steel furniture and interior solutions for discerning homes and
              businesses.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-white'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm transition-colors ${
                      isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-white'}`}>Our Products</h4>
            <ul className="space-y-2">
              {['Steel Cupboards', 'Office Desks', 'Industrial Racks', 'Home Almirahs', 'Custom Solutions'].map((product) => (
                <li key={product}>
                  <button
                    onClick={() => scrollToSection('gallery')}
                    className={`text-sm transition-colors ${
                      isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                    }`}
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-white'}`}>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className={`flex-shrink-0 mt-1 ${isDark ? 'text-yellow-400' : 'text-yellow-400'}`} />
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
                  Ayya Koneru S Rd, Vizianagaram
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className={`flex-shrink-0 mt-1 ${isDark ? 'text-yellow-400' : 'text-yellow-400'}`} />
                <a
                  href="tel:+919703955686"
                  className={`text-sm transition-colors ${
                    isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  +91 97039 55686
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className={`flex-shrink-0 mt-1 ${isDark ? 'text-yellow-400' : 'text-yellow-400'}`} />
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>info@vsninteriors.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`pt-8 border-t text-center ${
            isDark ? 'border-yellow-600/20 text-gray-400' : 'border-gray-800 text-gray-400'
          }`}
        >
          <p className="text-sm">
            &copy; {currentYear} VSN Interiors. All rights reserved. Crafted with excellence in Vizianagaram.
          </p>
        </div>
      </div>
    </footer>
  );
};
