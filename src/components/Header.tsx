import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-gradient p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">StudyPro</span>
              <span className="text-primary font-bold">-UF</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hem')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Hem
            </button>
            <button 
              onClick={() => scrollToSection('larare')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Lärare
            </button>
            <button 
              onClick={() => scrollToSection('amnen')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Ämnen
            </button>
            <button 
              onClick={() => scrollToSection('prissattning')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Prissättning
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Kontakt
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" onClick={() => scrollToSection('kontakt')}>
              Kom Igång
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('hem')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Hem
              </button>
              <button 
                onClick={() => scrollToSection('larare')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Lärare
              </button>
              <button 
                onClick={() => scrollToSection('amnen')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Ämnen
              </button>
              <button 
                onClick={() => scrollToSection('prissattning')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Prissättning
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Kontakt
              </button>
              <Button variant="hero" className="w-full mt-2" onClick={() => scrollToSection('kontakt')}>
                Kom Igång
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;