import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "BE Computer Science and Engineering",
      institution: "Mahendra College of Engineering",
      duration: "2021-25",
      cgpa: "6.9/10",
      location: "India",
      status: "Current",
      description: "Pursuing Bachelor's degree with focus on software engineering, algorithms, and web development."
    },
    {
      degree: "Class 12th Pavendar Matric Higher Sec School",
      institution: "Pavendar Matric Higher Secondary School",
      duration: "2021",
      percentage: "75%",
      location: "India",
      status: "Completed",
      description: "Higher Secondary education with focus on Science and Mathematics."
    },
    {
      degree: "Class 10th Public School",
      institution: "Public School",
      duration: "2019",
      percentage: "62%",
      location: "India", 
      status: "Completed",
      description: "Secondary education with strong foundation in core subjects."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Education
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in computer science and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <Card className="md:ml-16 group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <Badge 
                              variant={edu.status === "Current" ? "default" : "secondary"}
                              className={edu.status === "Current" ? "bg-primary" : ""}
                            >
                              {edu.status}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                          <p className="text-lg font-medium text-primary mb-1">{edu.institution}</p>
                        </div>
                        
                        <div className="flex flex-col md:items-end gap-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="font-medium">
                            {edu.cgpa && `CGPA: ${edu.cgpa}`}
                            {edu.percentage && `Score: ${edu.percentage}`}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;