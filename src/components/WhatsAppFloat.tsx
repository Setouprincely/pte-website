import { waLink } from "@/lib/whatsapp";
import floatIcon from "@/assets/icon.jpg";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 overflow-hidden rounded-full shadow-elegant transition-transform duration-300 hover:scale-110 animate-pulse-ring"
    >
      <img src={floatIcon} alt="" className="h-full w-full object-cover" />
    </a>
  );
}
