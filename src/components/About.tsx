import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const About = () => {
  const { isDark } = useTheme();

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handcrafted with finest stainless steel and superior materials',
    },
    {
      icon: Users,
      title: 'Expert Craftsmen',
      description: 'Decades of combined experience in luxury furniture design',
    },
    {
      icon: TrendingUp,
      title: 'Modern Designs',
      description: 'Contemporary aesthetics meets timeless elegance',
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'Guaranteed durability backed by comprehensive warranty',
    },
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl sm:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            About VSN Interiors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6" />
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Established as Vizianagaram's premier destination for luxury steel furniture and interior solutions, VSN Interiors has been
            transforming spaces into masterpieces. We specialize in bespoke steel cupboards, executive office furniture, industrial-grade
            storage solutions, and elegant home almirahs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all hover:transform hover:scale-105 ${
                  isDark
                    ? 'bg-black border border-yellow-600/20 hover:border-yellow-600/40'
                    : 'bg-white border border-gray-200 hover:border-yellow-600/40 shadow-sm'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isDark ? 'bg-yellow-600/20' : 'bg-yellow-50'
                  }`}
                >
                  <Icon className={isDark ? 'text-yellow-400' : 'text-yellow-600'} size={24} />
                </div>
                <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`rounded-2xl p-8 sm:p-12 ${isDark ? 'bg-black border border-yellow-600/20' : 'bg-white shadow-lg'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`font-serif text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Why Choose VSN Interiors?
              </h3>
              <div className="space-y-4">
                {[
                  'Custom-built furniture tailored to your exact specifications',
                  'Premium stainless steel with rust-proof guarantee',
                  'Multiple color and finish options for perfect aesthetics',
                  'Professional installation and after-sales support',
                  'Competitive pricing without compromising quality',
                  'Fast turnaround time with meticulous attention to detail',
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isDark ? 'bg-yellow-600/20' : 'bg-yellow-50'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-yellow-400' : 'bg-yellow-600'}`} />
                    </div>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '1000+', label: 'Projects Completed' },
                { number: '15+', label: 'Years Experience' },
                { number: '5.0', label: 'Google Rating' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl text-center ${
                    isDark ? 'bg-gradient-to-br from-yellow-600/10 to-yellow-600/5 border border-yellow-600/20' : 'bg-gradient-to-br from-yellow-50 to-white border border-yellow-200'
                  }`}
                >
                  <div
                    className={`font-serif text-3xl sm:text-4xl font-bold mb-2 ${
                      isDark ? 'text-yellow-400' : 'text-yellow-600'
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
