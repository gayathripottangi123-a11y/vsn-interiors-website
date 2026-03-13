import { useTheme } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
