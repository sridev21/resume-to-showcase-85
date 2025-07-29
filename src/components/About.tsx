import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: Zap,
      title: "Easy Adaptable",
      description: "Quickly adapt to different situations and learn new technologies"
    },
    {
      icon: Target,
      title: "Smart Working",
      description: "Focus on efficient solutions and strategic problem-solving"
    },
    {
      icon: CheckCircle,
      title: "Quality Focus",
      description: "Always aim for quality, clarity, and creativity in work"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excel in collaborative environments and team projects"
    }
  ];

  const highlights = [
    "HTML, CSS & JavaScript expertise",
    "React development experience", 
    "Responsive web design",
    "Cross-device compatibility",
    "Clean UI/UX principles",
    "Modern CSS techniques"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Digital Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative web solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed text-foreground">
                A passionate Frontend Developer focused on creating clean, responsive, and user-centric web applications. 
                With a strong foundation in HTML, ReactJS, and JavaScript, I bring digital ideas to life through 
                elegant interfaces and seamless user experiences.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I enjoy building intuitive web solutions that not only look good but also perform efficiently 
                across devices. Whether it's crafting a landing page, building a full-fledged dashboard, 
                or contributing to team projects, I always aim for quality, clarity, and creativity in my work.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strengths Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <strength.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{strength.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;