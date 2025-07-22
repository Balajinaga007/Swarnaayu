import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Users, Building, Heart } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      type: "general"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactTypes = [
    { value: "general", label: "General Inquiry", icon: Mail },
    { value: "family", label: "For Families", icon: Heart },
    { value: "provider", label: "Service Provider", icon: Building },
    { value: "investor", label: "Investment", icon: Users }
  ];

  return (
    <section id="contact" className="py-0 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Swarn Aayu Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a family seeking care solutions, a service provider interested in partnerships, 
            or an investor exploring opportunities, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="animate-slide-up shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Type Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    I'm interested as a:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {contactTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, type: type.value })}
                          className={`p-3 rounded-lg border transition-all duration-200 ${
                            formData.type === type.value
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <IconComponent className="h-5 w-5 mx-auto mb-1" />
                          <span className="text-xs font-medium">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your needs or interests..."
                    rows={5}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Partnership */}
          <div className="space-y-8 animate-fade-in">
            {/* Contact Information */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">hello@swaraaayu.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-trust/10">
                      <Phone className="h-5 w-5 text-trust" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground">+91 9876 543 210</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-care/20">
                      <MapPin className="h-5 w-5 text-care" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-muted-foreground">Bangalore, India</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partnership Information */}
            <Card className="bg-gradient-care text-care-foreground shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Partner with Us</h3>
                <p className="mb-6 opacity-90">
                  Join our open platform ecosystem and help us transform senior care in India. 
                  We're looking for healthcare providers, wellness platforms, and AgeTech companies.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-care-foreground/60" />
                    <span className="text-sm">API Integration Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-care-foreground/60" />
                    <span className="text-sm">Quality Assurance Standards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-care-foreground/60" />
                    <span className="text-sm">Revenue Sharing Models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-care-foreground/60" />
                    <span className="text-sm">Verified Customer Access</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-hero shadow-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Ready to Transform Senior Care?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join us in creating a future where every senior lives their golden years with dignity and joy.
                </p>
                <Button variant="hero" size="lg">
                  Schedule a Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;