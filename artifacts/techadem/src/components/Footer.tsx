import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-display font-bold text-2xl tracking-tight text-white flex items-center mb-4">
              TechadeM
            </span>
            <p className="text-white/70 max-w-xs text-sm leading-relaxed">
              Beginner-friendly video lessons in Data Analysis and Cybersecurity designed to help you start your tech journey the right way.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/data-analysis" className="hover:text-white transition-colors">
                  7-Day Data Analysis Class
                </Link>
              </li>
              <li>
                <Link href="/cybersecurity" className="hover:text-white transition-colors">
                  7-Day Cybersecurity Class
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>support@techadem.com</li>
              <li>
                <a
                  href="https://wa.me/2347055796976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: 07055796976
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Techadem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
