import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Palette, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Frontend Developer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Sivaraj R
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A passionate Frontend Developer focused on creating clean, responsive, and user-centric web applications. 
              I bring digital ideas to life through elegant interfaces and seamless user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-hero hover:shadow-elegant px-8 py-6 text-lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/10">
                Get In Touch
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-card rounded-xl p-6 shadow-card-custom hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, efficient code with modern best practices
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card-custom hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Responsive Design</h3>
                <p className="text-sm text-muted-foreground">
                  Creating seamless experiences across all devices and screen sizes
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card-custom hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">UI/UX Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Designing intuitive interfaces with attention to user experience
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;