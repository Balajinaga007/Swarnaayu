import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-seniors.jpg";

const HeroSection = () => {

  const careTypes = ["Trusted Care"];
  const [careTypeIndex, setCareTypeIndex] = useState(0);
  const careType = careTypes[careTypeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCareTypeIndex((prev) => (prev + 1) % careTypes.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Empowering Seniors with{" "}
                <span className="bg-primary bg-clip-text text-transparent">
                  {careType}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A caring AI companion for elders — offering trusted, personalized support that feels just like family.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">140M+</div>
                <div className="text-sm text-muted-foreground">Seniors in India</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-care/20 mx-auto mb-2">
                  <Heart className="h-6 w-6 text-care" />
                </div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">AI Companion</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-trust/20 mx-auto mb-2">
                  <Shield className="h-6 w-6 text-trust" />
                </div>
                <div className="text-2xl font-bold text-foreground">Trusted</div>
                <div className="text-sm text-muted-foreground">Care Network</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="group"
              >
                Discover Our Vision
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('features')}
              >
                Explore Features
              </Button>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm font-medium">Powered by AI, Guided by Empathy</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Happy Indian senior couple using technology together"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 p-4 bg-card rounded-xl shadow-card animate-gentle-bounce">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 bg-care/90 text-care-foreground rounded-xl shadow-card">
              <span className="text-sm font-medium">AAYU AI Companion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;