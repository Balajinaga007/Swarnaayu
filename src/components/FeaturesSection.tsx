import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Ear, Brain, Clock, Shield, Users, MessageCircle, Activity } from "lucide-react";
import aiCompanionImage from "@/assets/ai-companion.jpg";

const FeaturesSection = () => {
  const aayuFeatures = [
    {
      icon: Ear,
      title: "Active Listening",
      description: "Shows genuine empathy, seamlessly switches conversation topics, and provides proper conversational closure.",
      color: "care"
    },
    {
      icon: Clock,
      title: "Continuous Care",
      description: "Proactively initiates helpful conversations and maintains regular check-ins for ongoing support.",
      color: "trust"
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Understands personal context, respects cultural nuances, and ensures service fulfillment.",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Personal Companion",
      description: "Tailored interactions that recall past moments, preferences, and build lasting relationships.",
      color: "care"
    },
    {
      icon: Activity,
      title: "Health Assistant",
      description: "Manages medical protocols, coordinates geriatric care, and tracks health metrics.",
      color: "trust"
    },
    {
      icon: Users,
      title: "Service Discovery",
      description: "Helps discover and fulfill services, provides reminders, and remains always available.",
      color: "primary"
    }
  ];

  const conversationFlow = [
    {
    "step": "START",
    "title": "Friendly Hello",
    "description": "AAYU starts a gentle conversation and checks how you're doing"
  },
  {
    "step": "LISTEN",
    "title": "Truly Listens",
    "description": "Understands your feelings, needs, and respects your way of life"
  },
  {
    "step": "PROMPT",
    "title": "Talks With Care",
    "description": "Gives kind and useful replies, based on what you're feeling or asking"
  },
  {
    "step": "ACTION",
    "title": "Helps You Act",
    "description": "Arranges services or support smoothly, without confusion"
  }
  ];

  const learningCycle = [
    "Increased Engagement",
    "Need Monitoring",
    "Engaging Themes",
    "Fine-Tuning"
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">AAYU AI Companion</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet AAYU: Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Intelligent Companion
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AAYU is not just a chatbot - it's an AI companion designed to build long-term, 
            meaningful relationships with seniors through empathy, cultural understanding, and proactive care.
          </p>
        </div>

        {/* Main Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Features Grid */}
          <div className="grid gap-6 animate-slide-up">
            {aayuFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const colorClass = feature.color === 'care' ? 'text-care' : 
                                feature.color === 'trust' ? 'text-trust' : 'text-primary';
              const bgClass = feature.color === 'care' ? 'bg-care/10' : 
                             feature.color === 'trust' ? 'bg-trust/10' : 'bg-primary/10';
              
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 transform hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${bgClass} flex-shrink-0`}>
                        <IconComponent className={`h-6 w-6 ${colorClass}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* AAYU Interface Preview */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aiCompanionImage}
                alt="AAYU AI Companion interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating indicators */}
            <div className="absolute -top-4 -right-4 bg-care/90 text-care-foreground p-3 rounded-xl shadow-card animate-gentle-bounce">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card p-3 rounded-xl shadow-card">
              <div className="text-sm font-medium text-foreground">Always Available</div>
            </div>
          </div>
        </div>

        {/* Conversation Flow */}
        {/* <div className="mb-20 animate-slide-up">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            The Swarn Aayu Conversation Style
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {conversationFlow.map((flow, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <Badge variant="outline" className="mb-3">{flow.step}</Badge>
                  <h4 className="font-semibold text-foreground mb-2">{flow.title}</h4>
                  <p className="text-sm text-muted-foreground">{flow.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Learning & Improvement Cycle */}
        {/* <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Continuous Learning & Improvement
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AAYU grows smarter with every interaction, creating a positive cycle of enhanced care and deeper relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {learningCycle.map((cycle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-card shadow-soft flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cycle}</h4>
                <div className="w-full h-1 bg-primary/20 rounded-full">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                    style={{ width: `${(index + 1) * 25}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;