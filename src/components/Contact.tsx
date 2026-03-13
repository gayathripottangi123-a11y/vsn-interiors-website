import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { supabase, ContactSubmission } from '../lib/supabase';

export const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    phone: '',
    message: '',
    product_interest: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert([formData]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        product_interest: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try calling us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl sm:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6" />
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to transform your space? Contact us for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all ${
                    isDark
                      ? 'bg-black border border-yellow-600/20 text-white focus:border-yellow-600/40'
                      : 'bg-white border border-gray-300 text-gray-900 focus:border-yellow-600'
                  } focus:outline-none focus:ring-2 focus:ring-yellow-600/20`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all ${
                    isDark
                      ? 'bg-black border border-yellow-600/20 text-white focus:border-yellow-600/40'
                      : 'bg-white border border-gray-300 text-gray-900 focus:border-yellow-600'
                  } focus:outline-none focus:ring-2 focus:ring-yellow-600/20`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all ${
                    isDark
                      ? 'bg-black border border-yellow-600/20 text-white focus:border-yellow-600/40'
                      : 'bg-white border border-gray-300 text-gray-900 focus:border-yellow-600'
                  } focus:outline-none focus:ring-2 focus:ring-yellow-600/20`}
                  placeholder="+91 97039 55686"
                />
              </div>

              <div>
                <label
                  htmlFor="product_interest"
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Product Interest
                </label>
                <select
                  id="product_interest"
                  name="product_interest"
                  value={formData.product_interest}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg transition-all ${
                    isDark
                      ? 'bg-black border border-yellow-600/20 text-white focus:border-yellow-600/40'
                      : 'bg-white border border-gray-300 text-gray-900 focus:border-yellow-600'
                  } focus:outline-none focus:ring-2 focus:ring-yellow-600/20`}
                >
                  <option value="">Select a product</option>
                  <option value="Steel Cupboards">Steel Cupboards</option>
                  <option value="Office Desks">Office Desks</option>
                  <option value="Industrial Racks">Industrial Racks</option>
                  <option value="Home Almirahs">Home Almirahs</option>
                  <option value="Custom Solution">Custom Solution</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg transition-all resize-none ${
                    isDark
                      ? 'bg-black border border-yellow-600/20 text-white focus:border-yellow-600/40'
                      : 'bg-white border border-gray-300 text-gray-900 focus:border-yellow-600'
                  } focus:outline-none focus:ring-2 focus:ring-yellow-600/20`}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting || submitted}
                className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-green-600 text-white'
                    : isDark
                      ? 'bg-yellow-600 text-black hover:bg-yellow-500'
                      : 'bg-yellow-600 text-white hover:bg-yellow-700'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {submitted ? (
                  'Message Sent Successfully!'
                ) : submitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div
              className={`p-8 rounded-2xl ${
                isDark ? 'bg-black border border-yellow-600/20' : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <h3 className={`font-serif text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:+919703955686"
                  className={`flex items-start gap-4 group ${isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'} transition-colors`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-yellow-600/20' : 'bg-yellow-50'
                    }`}
                  >
                    <Phone className={isDark ? 'text-yellow-400' : 'text-yellow-600'} size={20} />
                  </div>
                  <div>
                    <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Phone</div>
                    <div>+91 97039 55686</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-yellow-600/20' : 'bg-yellow-50'
                    }`}
                  >
                    <Mail className={isDark ? 'text-yellow-400' : 'text-yellow-600'} size={20} />
                  </div>
                  <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</div>
                    <div>info@vsninteriors.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-yellow-600/20' : 'bg-yellow-50'
                    }`}
                  >
                    <MapPin className={isDark ? 'text-yellow-400' : 'text-yellow-600'} size={20} />
                  </div>
                  <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Address</div>
                    <div>Ayya Koneru S Rd, Vizianagaram</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-yellow-600/20' : 'bg-yellow-50'
                    }`}
                  >
                    <Clock className={isDark ? 'text-yellow-400' : 'text-yellow-600'} size={20} />
                  </div>
                  <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Business Hours</div>
                    <div>Mon - Sat: 9:00 AM - 7:00 PM</div>
                    <div>Sunday: By Appointment</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      isDark
                        ? 'bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30'
                        : 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100'
                    }`}
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      isDark
                        ? 'bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30'
                        : 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100'
                    }`}
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      isDark
                        ? 'bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30'
                        : 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100'
                    }`}
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-80 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.3487!2d83.3974!3d18.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA2JzYwLjEiTiA4M8KwMjMnNTAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VSN Interiors Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
