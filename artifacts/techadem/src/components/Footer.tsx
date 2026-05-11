import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-display font-bold text-2xl tracking-tight text-white flex items-center mb-4">
              Techade
              <span className="relative">
                m
                <svg className="absolute -top-1 -right-3 w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
            </span>
            <p className="text-gray-400 max-w-xs">
              Beginner-friendly video lessons in Data Analysis and Cybersecurity designed to help you start your tech journey.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/data-analysis" className="hover:text-white transition-colors">Data Analysis</Link>
              </li>
              <li>
                <Link href="/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Ife, Nigeria</li>
              <li>support@techadem.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Techadem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
