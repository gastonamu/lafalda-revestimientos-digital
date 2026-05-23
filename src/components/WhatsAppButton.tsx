import { MessageCircle } from "lucide-react";
import { waLink, waMensajes } from "@/lib/wa";

const WhatsAppButton = () => {
  return (
    <a
      href={waLink(waMensajes.consulta)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg hover:scale-105 transition-transform"
      style={{
        backgroundColor: "hsl(142,71%,40%)",
        animation: "wa-pulse 3s ease-in-out infinite",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      }}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
