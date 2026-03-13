import { Star, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Hero = () => {
  const { isDark } = useTheme();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-600/10 border border-yellow-600/20 mb-8">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className={`text-sm font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
              5.0 Google Rating
            </span>
          </div>

          <h1
            className={`font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            VSN INTERIORS
          </h1>

          <p
            className={`font-serif text-xl sm:text-2xl lg:text-3xl mb-8 ${
              isDark
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800'
            }`}
          >
            Luxury Living Redefined in Vizianagaram
          </p>

          <p className={`text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Premium steel furniture and interior solutions for discerning homes and businesses. Experience unparalleled craftsmanship,
            bespoke designs, and timeless elegance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 shadow-lg shadow-yellow-600/50'
                  : 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-white hover:from-yellow-500 hover:to-yellow-600 shadow-lg shadow-yellow-600/50'
              }`}
            >
              Get Free Quote
            </button>

            <a
              href="tel:+919703955686"
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 flex items-center gap-2 ${
                isDark
                  ? 'border-yellow-600 text-yellow-400 hover:bg-yellow-600/10'
                  : 'border-yellow-600 text-yellow-600 hover:bg-yellow-50'
              }`}
            >
              <Phone size={20} />
              Call Us
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <MapPin size={18} className={isDark ? 'text-yellow-400' : 'text-yellow-600'} />
              <span>Ayya Koneru S Rd, Vizianagaram</span>
            </div>
            <div className={`hidden sm:block ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>|</div>
            <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <Phone size={18} className={isDark ? 'text-yellow-400' : 'text-yellow-600'} />
              <a href="tel:+919703955686" className="hover:underline">
                +91 97039 55686
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${
          isDark ? 'from-gray-900 to-transparent' : 'from-gray-50 to-transparent'
        }`}
      />
    </section>
  );
};
