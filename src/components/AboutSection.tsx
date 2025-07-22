import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, Heart, Sparkles } from "lucide-react";
import familyImage from "@/assets/family-connection.jpg";

const AboutSection = () => {
  const visionPoints = [
    {
      icon: Users,
      title: "For Seniors",
      description: "Choice, quality assurance, and personalized care that respects cultural values and individual preferences.",
      benefits: ["Personalized AI companion", "Cultural understanding", "24/7 support"]
    },
    {
      icon: Heart,
      title: "For Families",
      description: "Peace of mind through transparent care tracking and seamless communication with loved ones.",
      benefits: ["Real-time updates", "Care coordination", "Family involvement"]
    },
    {
      icon: Shield,
      title: "For Providers",
      description: "Access to verified senior customers through our open platform ecosystem.",
      benefits: ["Verified customers", "API integration", "Quality standards"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Our Vision</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            An Open Platform for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Collaborative Care
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Swarn Aayu creates a thriving ecosystem where seniors, families, and service providers 
            work together to deliver exceptional, culturally-sensitive care.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Vision Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Fostering a Collaborative Ecosystem
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our open platform brings together the best of technology, healthcare, and human connection. 
                By understanding Indian cultural values and individual needs, we create meaningful relationships 
                that go beyond traditional care models.
              </p>
            </div>

            <div className="grid gap-6">
              {visionPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <Card key={index} className="group hover:shadow-card transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{point.title}</h4>
                          <p className="text-muted-foreground text-sm mb-3">{point.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {point.benefits.map((benefit, i) => (
                              <span key={i} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('features')}
              className="group"
            >
              Explore How It Works
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={familyImage}
                alt="Family connecting across generations through technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">300M+</div>
                <div className="text-xs text-muted-foreground">Seniors by 2050</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-care p-4 rounded-xl shadow-card text-care-foreground">
              <div className="text-center">
                <div className="text-lg font-bold">Open Platform</div>
                <div className="text-xs opacity-90">Collaborative Care</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Mission: स्वर्ण आयु (Golden Age)
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            To create a future where every senior in India lives their golden years with dignity, 
            connection, and joy - supported by technology that understands their heart, 
            respects their culture, and empowers their choices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;