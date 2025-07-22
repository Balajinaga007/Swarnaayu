import { Heart, Users, MessageCircle } from "lucide-react";

const ProblemStatementSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Understanding the Challenge
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              As we grow older, staying connected and cared for becomes more important. 
              Many seniors look for meaningful conversations, timely support, and a true 
              sense of belonging in their everyday lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Meaningful Conversations
              </h3>
              <p className="text-muted-foreground">
                Regular, engaging interactions that go beyond basic check-ins
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Timely Support
              </h3>
              <p className="text-muted-foreground">
                Responsive care when it's needed most, available 24/7
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Sense of Belonging
              </h3>
              <p className="text-muted-foreground">
                Connection to community and feeling valued in daily life
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;