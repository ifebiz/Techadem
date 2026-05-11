import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  text: string;
}

export function WhatsAppButton({ text }: WhatsAppButtonProps) {
  return (
    <a
      href="https://wa.me/2347055796976?text=Hello%20Techadem%2C%20I%20just%20completed%20some%20lessons%20and%20I%27d%20like%20to%20learn%20more."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <FaWhatsapp className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );
}
