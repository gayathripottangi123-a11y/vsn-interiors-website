import { Archive, Briefcase, Warehouse, Home } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Services = () => {
  const { isDark } = useTheme();

  const services = [
    {
      icon: Archive,
      title: 'Steel Cupboards',
      description: 'Premium stainless steel cupboards with reinforced shelves, modern locking systems, and elegant finishes',
      features: ['Multiple sizes available', 'Custom color options', 'Mirror finish available', 'Soft-close doors'],
    },
    {
      icon: Briefcase,
      title: 'Office Desks',
      description: 'Ergonomic office furniture designed for productivity with spacious work surfaces and integrated cable management',
      features: ['Executive designs', 'Adjustable heights', 'Storage drawers', 'Modern aesthetics'],
    },
    {
      icon: Warehouse,
      title: 'Industrial Racks',
      description: 'Heavy-duty storage solutions with adjustable shelving, perfect for warehouses and commercial spaces',
      features: ['High load capacity', 'Modular design', 'Easy assembly', 'Durable construction'],
    },
    {
      icon: Home,
      title: 'Home Almirahs',
      description: 'Luxury steel almirahs that combine security with sophistication for your bedroom and living spaces',
      features: ['Elegant designs', 'Custom finishes', 'Spacious interiors', 'Premium quality'],
    },
  ];

  return (
    <section id="services" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl sm:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6" />
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive furniture solutions tailored to your residential and commercial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all hover:transform hover:scale-105 ${
                  isDark
                    ? 'bg-gray-900 border border-yellow-600/20 hover:border-yellow-600/40 hover:shadow-xl hover:shadow-yellow-600/10'
                    : 'bg-gray-50 border border-gray-200 hover:border-yellow-600/40 hover:shadow-xl'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                    isDark
                      ? 'bg-yellow-600/20 group-hover:bg-yellow-600/30'
                      : 'bg-yellow-50 group-hover:bg-yellow-100'
                  }`}
                >
                  <Icon className={isDark ? 'text-yellow-400' : 'text-yellow-600'} size={32} />
                </div>

                <h3 className={`font-serif text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>

                <p className={`text-base mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          isDark ? 'bg-yellow-400' : 'bg-yellow-600'
                        }`}
                      />
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 p-8 rounded-2xl text-center ${isDark ? 'bg-gradient-to-r from-yellow-600/10 to-yellow-600/5 border border-yellow-600/20' : 'bg-gradient-to-r from-yellow-50 to-white border border-yellow-200'}`}>
          <h3 className={`font-serif text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Custom Solutions Available
          </h3>
          <p className={`text-base mb-6 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Every space is unique. Our design team works closely with you to create custom furniture solutions that perfectly match your
            vision, space requirements, and budget.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              isDark
                ? 'bg-yellow-600 text-black hover:bg-yellow-500'
                : 'bg-yellow-600 text-white hover:bg-yellow-700'
            }`}
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};
