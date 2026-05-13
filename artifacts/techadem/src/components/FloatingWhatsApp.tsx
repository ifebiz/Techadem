import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WA_LINK = "https://wa.me/2349044399437";

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="btn-floating-whatsapp"
      aria-label="Chat with Techadem on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
