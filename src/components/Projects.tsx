import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Code, Palette, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      period: "April 2025",
      description: "Developed a responsive personal portfolio using HTML and CSS to showcase projects, skills, and achievements.",
      link: "https://sivarajr.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Focused on clean UI, cross-device compatibility, and accessible design",
        "Demonstrated frontend development proficiency and attention to detail",
        "Responsive design across all devices"
      ],
      icon: Palette,
      status: "Live"
    },
    {
      title: "Tic Tac Toe Game",
      period: "March 2025",
      description: "Built an interactive Tic Tac Toe game using vanilla JavaScript, HTML, and CSS with complete game functionality.",
      technologies: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
      features: [
        "Implemented core game logic including player turns, win/draw detection, and reset functionality",
        "Designed a responsive and visually appealing UI using modern CSS techniques",
        "Demonstrated proficiency in JavaScript fundamentals, DOM manipulation, and UI/UX principles"
      ],
      icon: Code,
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my development skills through practical projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card overflow-hidden">
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="bg-gradient-hero p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 leading-relaxed">{project.description}</p>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <Button size="sm" asChild className="bg-gradient-hero hover:shadow-elegant">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more projects or collaborate on something amazing?
          </p>
          <Button size="lg" className="bg-gradient-hero hover:shadow-elegant">
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
