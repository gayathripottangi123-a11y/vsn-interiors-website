import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { supabase, Testimonial } from '../lib/supabase';

export const Testimonials = () => {
  const { isDark } = useTheme();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="testimonials" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl sm:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6" />

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-yellow-600/10 border border-yellow-600/20 mb-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className={`text-lg font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
              5.0 / 5.0
            </span>
          </div>

          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Trusted by hundreds of satisfied customers across Vizianagaram
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Loading testimonials...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`p-8 rounded-2xl transition-all hover:transform hover:scale-105 relative ${
                  isDark
                    ? 'bg-gray-900 border border-yellow-600/20 hover:border-yellow-600/40'
                    : 'bg-gray-50 border border-gray-200 hover:border-yellow-600/40 shadow-sm hover:shadow-lg'
                }`}
              >
                <Quote
                  size={48}
                  className={`absolute top-6 right-6 opacity-20 ${
                    isDark ? 'text-yellow-400' : 'text-yellow-600'
                  }`}
                />

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className={`text-lg mb-6 leading-relaxed relative z-10 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {testimonial.review}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.client_name}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {testimonial.client_location}
                    </div>
                  </div>
                  {testimonial.project_type && (
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? 'bg-yellow-600/20 text-yellow-400'
                          : 'bg-yellow-50 text-yellow-600'
                      }`}
                    >
                      {testimonial.project_type}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={`mt-12 p-8 rounded-2xl text-center ${isDark ? 'bg-gradient-to-r from-yellow-600/10 to-yellow-600/5 border border-yellow-600/20' : 'bg-gradient-to-r from-yellow-50 to-white border border-yellow-200'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={24} className="fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <h3 className={`font-serif text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Join Our Happy Customers
          </h3>
          <p className={`text-base mb-6 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Experience the VSN Interiors difference. Premium quality, exceptional service, and unmatched craftsmanship.
          </p>
          <a
            href="https://www.google.com/maps/search/VSN+INTERIORS+Vizianagaram"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-3 rounded-lg font-semibold transition-all ${
              isDark
                ? 'bg-yellow-600 text-black hover:bg-yellow-500'
                : 'bg-yellow-600 text-white hover:bg-yellow-700'
            }`}
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
};
