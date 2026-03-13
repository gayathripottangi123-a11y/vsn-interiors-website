import { useEffect, useState } from 'react';
import { Package, Palette, Ruler } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { supabase, Product } from '../lib/supabase';

export const Gallery = () => {
  const { isDark } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('featured', true)
        .order('display_order');

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === 'All' ? products : products.filter((p) => p.category === selectedCategory);

  const productImages: Record<string, string> = {
    'Steel Cupboards': 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Office Desks': 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Industrial Racks': 'https://images.pexels.com/photos/4481260/pexels-photo-4481260.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Home Almirahs': 'https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg?auto=compress&cs=tinysrgb&w=800',
  };

  return (
    <section id="gallery" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl sm:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Product Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6" />
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore our exclusive collection of premium steel furniture
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? isDark
                    ? 'bg-yellow-600 text-black'
                    : 'bg-yellow-600 text-white'
                  : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Loading products...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`group rounded-2xl overflow-hidden transition-all hover:transform hover:scale-105 ${
                  isDark
                    ? 'bg-black border border-yellow-600/20 hover:border-yellow-600/40 hover:shadow-xl hover:shadow-yellow-600/10'
                    : 'bg-white border border-gray-200 hover:border-yellow-600/40 hover:shadow-xl'
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image_url || productImages[product.category]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isDark
                          ? 'bg-yellow-600/90 text-black backdrop-blur-sm'
                          : 'bg-yellow-600/90 text-white backdrop-blur-sm'
                      }`}
                    >
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`font-serif text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {product.name}
                  </h3>

                  <p className={`text-base mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {product.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div
                      className={`p-3 rounded-lg text-center ${
                        isDark ? 'bg-gray-900' : 'bg-gray-50'
                      }`}
                    >
                      <Package size={20} className={`mx-auto mb-1 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{product.material}</div>
                    </div>
                    <div
                      className={`p-3 rounded-lg text-center ${
                        isDark ? 'bg-gray-900' : 'bg-gray-50'
                      }`}
                    >
                      <Ruler size={20} className={`mx-auto mb-1 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{product.sizes.length} Sizes</div>
                    </div>
                    <div
                      className={`p-3 rounded-lg text-center ${
                        isDark ? 'bg-gray-900' : 'bg-gray-50'
                      }`}
                    >
                      <Palette size={20} className={`mx-auto mb-1 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{product.colors.length} Colors</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      isDark
                        ? 'bg-yellow-600 text-black hover:bg-yellow-500'
                        : 'bg-yellow-600 text-white hover:bg-yellow-700'
                    }`}
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
