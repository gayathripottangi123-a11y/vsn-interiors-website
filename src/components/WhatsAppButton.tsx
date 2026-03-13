import { MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const WhatsAppButton = () => {
  const { isDark } = useTheme();
  const phoneNumber = '919703955686';
  const message = 'Hi! I would like to inquire about VSN Interiors furniture.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 ${
        isDark
          ? 'bg-green-500 hover:bg-green-600 shadow-green-500/50'
          : 'bg-green-500 hover:bg-green-600 shadow-green-500/30'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};
