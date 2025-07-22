import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Swarn Aayu</h1>
              <p className="text-xs text-muted-foreground">स्वर्ण आयु</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            {/*  <button
              onClick={() => scrollToSection('technology')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            > 
              Technology
            </button> */}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button variant="hero" size="sm">
              Learn More
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <Button variant="hero" size="sm" className="w-fit">
                Learn More
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;