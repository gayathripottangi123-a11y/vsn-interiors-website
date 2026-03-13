import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? 'bg-black/95 backdrop-blur-sm border-b border-yellow-600/20'
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className={`font-serif text-2xl sm:text-3xl font-bold tracking-wide ${
                isDark
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800'
              }`}
            >
              VSN INTERIORS
            </button>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:text-yellow-400'
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isDark ? 'text-yellow-400' : 'text-gray-700'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`lg:hidden border-t ${
            isDark ? 'border-yellow-600/20 bg-black' : 'border-gray-200 bg-white'
          }`}
        >
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:bg-yellow-600/20 hover:text-yellow-400'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
