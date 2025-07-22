import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  MessageSquare, 
  Brain, 
  Database, 
  Mic, 
  Globe, 
  Settings, 
  Plug,
  Shield,
  Zap
} from "lucide-react";

const TechnologySection = () => {
  const architectureComponents = [
    {
      icon: Smartphone,
      title: "User Interface",
      description: "WhatsApp and Mobile App with voice/text accessibility for familiar interaction",
      tech: "React Native, WhatsApp Business API"
    },
    {
      icon: Brain,
      title: "Conversational Core",
      description: "Advanced AI powered by ChatGPT 4o mini for intelligent, context-aware conversations",
      tech: "OpenAI GPT-4, Custom Fine-tuning"
    },
    {
      icon: Database,
      title: "Memory Management",
      description: "Persistent memory system that remembers past interactions and user preferences",
      tech: "Vector Database, Embeddings"
    },
    {
      icon: Mic,
      title: "Voice Interface",
      description: "Natural, culturally appropriate voice synthesis and recognition",
      tech: "Speech-to-Text, Text-to-Speech"
    },
    {
      icon: Globe,
      title: "Knowledge Storage",
      description: "Retrieval-augmented generation with localized Indian cultural context",
      tech: "RAG, Cultural Knowledge Base"
    },
    {
      icon: Settings,
      title: "Orchestrator",
      description: "Coordinates agents and tools for seamless, integrated user experience",
      tech: "Microservices, API Gateway"
    }
  ];

  const coreCapabilities = [
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Cultural context understanding with empathetic communication"
    },
    {
      icon: Database,
      title: "Memory System",
      description: "Long-term relationship building through persistent memory"
    },
    {
      icon: Plug,
      title: "Open APIs",
      description: "MCP support for seamless service provider integrations"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Data protection with family access controls"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Health tracking and medication adherence support"
    },
    {
      icon: Mic,
      title: "Voice-First",
      description: "Accessible interface designed for senior users"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Technology Stack</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built on{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Robust Architecture
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with cultural understanding 
            to deliver reliable, scalable, and empathetic senior care solutions.
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="mb-20 animate-slide-up">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Platform Architecture
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureComponents.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 transform hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-trust/10 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-trust" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{component.title}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{component.description}</p>
                        <Badge variant="outline" className="text-xs">{component.tech}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-20 animate-fade-in">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Core AI Capabilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-3">{capability.title}</h4>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Platform Benefits */}
        <div className="grid lg:grid-cols-2 gap-16 items-center animate-slide-up">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Platform Infrastructure Benefits
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <Plug className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Open APIs & MCP Support</h4>
                  <p className="text-muted-foreground text-sm">Seamless integration for service providers with standardized protocols</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-trust/10 flex-shrink-0">
                  <Shield className="h-5 w-5 text-trust" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Secure Data Management</h4>
                  <p className="text-muted-foreground text-sm">Enterprise-grade security with family access controls and privacy protection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-care/20 flex-shrink-0">
                  <Zap className="h-5 w-5 text-care" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Real-time Health Monitoring</h4>
                  <p className="text-muted-foreground text-sm">Continuous tracking with instant alerts and care coordination</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/20 flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp Integration</h4>
                  <p className="text-muted-foreground text-sm">Familiar interface that seniors already know and trust</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-care rounded-2xl p-8 text-care-foreground">
            <h4 className="text-xl font-bold mb-4">Scalable & Reliable</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Platform Uptime</span>
                <span className="font-semibold">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span>Response Time</span>
                <span className="font-semibold">&lt; 200ms</span>
              </div>
              <div className="flex justify-between">
                <span>Concurrent Users</span>
                <span className="font-semibold">1M+</span>
              </div>
              <div className="flex justify-between">
                <span>Data Security</span>
                <span className="font-semibold">SOC 2 Compliant</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-care-foreground/20">
              <p className="text-sm opacity-90">
                Built to scale with India's growing senior population while maintaining 
                the highest standards of security and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;