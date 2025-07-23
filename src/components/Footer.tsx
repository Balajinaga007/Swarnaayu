import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-primary">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Swarn Aayu</h3>
                <p className="text-sm opacity-80">स्वर्ण आयु</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              An AI-powered open platform for senior care services, designed to bridge gaps 
              in Indian senior care through technology, empathy, and cultural understanding.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@swarnaayu.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 6305517488</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Razole, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#technology" className="hover:text-background transition-colors">Technology</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><span className="hover:text-background transition-colors cursor-pointer">AI Companion</span></li>
              <li><span className="hover:text-background transition-colors cursor-pointer">Health Monitoring</span></li>
              <li><span className="hover:text-background transition-colors cursor-pointer">Care Coordination</span></li>
              <li><span className="hover:text-background transition-colors cursor-pointer">Family Connect</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60">
              © {currentYear} Swarn Aayu. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span className="hover:text-background transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-background transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-background transition-colors cursor-pointer">Cookie Policy</span>
            </div>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;