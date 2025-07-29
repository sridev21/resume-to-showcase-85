import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Palette, GitBranch, Globe, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Globe,
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "CSS", level: 90 },
        { name: "HTML", level: 95 },
        { name: "React", level: 75 }
      ],
      color: "text-blue-500"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 85 }
      ],
      color: "text-green-500"
    },
    {
      title: "Backend Technologies",
      icon: Server,
      skills: [
        { name: "SQL", level: 70 },
        { name: "Database Design", level: 65 }
      ],
      color: "text-purple-500"
    },
    {
      title: "Version Control & Tools",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 }
      ],
      color: "text-orange-500"
    }
  ];

  const additionalSkills = [
    "Responsive Web Design",
    "Cross-device Compatibility", 
    "UI/UX Principles",
    "Modern CSS Techniques",
    "DOM Manipulation",
    "Frontend Optimization",
    "Accessible Design",
    "Clean Code Practices"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Skills & Technologies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuously learning and growing my technical skill set
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <Card className="border-0 bg-gradient-card shadow-card-custom">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Additional Competencies</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {additionalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <Badge 
                      variant="outline" 
                      className="w-full justify-center py-3 text-center hover:bg-primary/10 hover:border-primary transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Summary */}
          <div className="text-center mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Frontend Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">Years of Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;