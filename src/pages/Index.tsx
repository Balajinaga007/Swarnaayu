import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechnologySection from "@/components/TechnologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProblemStatementSection from "@/components/ProblemStatementSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemStatementSection />
      
      {/* Uncomment the following line if you want to include the ProblemsSection */}
      {/* <ProblemsSection /> */}
      <AboutSection />

      {/* <FeaturesSection /> */}
      {/* <TechnologySection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
