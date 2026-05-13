import React from "react";
import { Link } from "wouter";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <div className="bg-primary rounded-xl overflow-hidden" style={{width: 120, height: 52}}>
            <img src="/logo.png" alt="Techadem" className="w-full h-full object-contain" />
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/data-analysis" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Data Analysis
          </Link>
          <Link href="/cybersecurity" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Cybersecurity
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/学" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-4 shadow-lg absolute w-full">
          <Link href="/" className="block text-base font-medium text-foreground py-2 border-b" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/data-analysis" className="block text-base font-medium text-foreground py-2 border-b" onClick={() => setIsOpen(false)}>
            Data Analysis
          </Link>
          <Link href="/cybersecurity" className="block text-base font-medium text-foreground py-2" onClick={() => setIsOpen(false)}>
            Cybersecurity
          </Link>
        </div>
      )}
    </header>
  );
}
