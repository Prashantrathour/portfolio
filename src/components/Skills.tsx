
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Redux Toolkit", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Chakra UI", level: 85 },
        { name: "Angular", level: 75 }
      ]
    },
    {
      title: "Backend & Database", 
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "Python", level: 80 },
        { name: "Django", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "JWT", level: 90 },
        { name: "Sequelize ORM", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "AWS (Basic)", level: 70 },
        { name: "Generative AI", level: 85 },
        { name: "Prompt Engineering", level: 80 },
        { name: "React Testing", level: 75 },
        { name: "Cypress Testing", level: 70 }
      ]
    }
  ];

  const additionalSkills = [
    "Socket.io", "Cursor AI", "GitHub Copilot", "Apache ECharts", 
    "Multer", "OpenAI", "JSON Server", "Real-time Chat", "Payment Processing", "AI Tools"
  ];

  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Masai School",
      description: "Comprehensive full-stack web development program with 2160 hours of practical learning",
      image: "/doc-uploads/89859735-946e-4b48-8fd8-5409ec7f4040.png",
      date: "Sep 2023"
    },{
      title: "Assessment Assistantship Program",
      issuer: "Masai School",
      description: "Participated as a mentor in the Assessment Assistantship Program, conducting technical interviews with students as part of their practice sessions.",
      image: "https://ik.imagekit.io/ntmgxa7c6/progressio/PRASHANT%20RATHOUR.jpg?updatedAt=1750680404650",
      date: "Apr 2024"
    },
    {
      title: "Certified Prompt Engineer",
      issuer: "Masai School",
      description: "Specialized certification in Prompt Engineering for Generative AI applications",
      image: "/doc-uploads/b4866930-bbd0-41b7-869f-a2bd8acf841b.png",
      date: "2024"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive tech stack built through hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="hover-scale animate-fade-in glass-card futuristic-hover"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-center neon-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out neon-glow"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <Card className="hover-scale animate-fade-in glass-card futuristic-hover mb-12" style={{ animationDelay: '0.6s' }}>
          <CardHeader>
            <CardTitle className="text-center neon-text">Additional Technologies & AI Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {additionalSkills.map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="text-sm animate-fade-in glass-button futuristic-hover neon-border"
                  style={{ animationDelay: `${0.8 + (index * 0.05)}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certificates Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-text">
            Certificates & Achievements
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <Card 
              key={certificate.title}
              className={`glass-card rounded-3xl overflow-hidden group futuristic-hover animate-fade-in relative`}
              style={{ animationDelay: `${1.0 + index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-shimmer animate-glass-shimmer opacity-0 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 glass-card p-2 rounded-xl">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-lg text-primary neon-text group-hover:scale-105 transition-transform">
                      {certificate.title}
                    </h4>
                    <Badge variant="outline" className="text-xs neon-border">
                      {certificate.date}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 font-medium">
                    {certificate.issuer}
                  </p>
                  
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    {certificate.description}
                  </p>
                  
                  <button 
                    onClick={() => window.open(certificate.image, '_blank')}
                    className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors glass-button p-2 rounded-lg futuristic-hover"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
