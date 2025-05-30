
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5551980891199"; // Formato internacional sem espaços ou caracteres especiais
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center gap-2"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="font-medium text-sm whitespace-nowrap">Entre em contato!</span>
    </a>
  );
};

export default WhatsAppButton;
