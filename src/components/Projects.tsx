
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/config/portfolio";
import { Github, ExternalLink, Star, Calendar, Zap, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('[data-index]');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto animate-fade-in text-lg" style={{ animationDelay: '0.1s' }}>
            A collection of 6+ major projects showcasing full-stack development skills and modern technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioConfig.projects.map((project, index) => (
            <Card 
              key={project.title}
              data-index={index}
              className={`glass-card rounded-3xl group transition-all duration-500 hover:shadow-2xl overflow-hidden relative futuristic-hover ${
                project.featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
              } ${
                visibleProjects.has(index) ? 'animate-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-shimmer animate-glass-shimmer opacity-0 group-hover:opacity-100"></div>
              
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-6 left-6 z-20">
                  <Badge variant="secondary" className="glass-card neon-border flex items-center animate-pulse px-4 py-2">
                    <Star className="mr-2 h-4 w-4 text-accent animate-neon-pulse" />
                    <Sparkles className="mr-1 h-3 w-3" />
                    Featured
                  </Badge>
                </div>
              )}

              <div className={`relative overflow-hidden ${project.featured ? 'order-2' : ''}`}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Floating tech indicators */}
                <div className="absolute top-4 right-4 glass-card p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
              </div>
              
              <div className={`p-8 relative z-10 ${project.featured ? 'order-1' : ''}`}>
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors neon-text">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="glass-card neon-border text-sm flex items-center px-3 py-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      {project.date}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className={`glass-card neon-border text-sm hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 ${
                          visibleProjects.has(index) ? 'animate-fade-in' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${index * 0.2 + techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-button group/btn futuristic-hover transition-all duration-300 neon-border flex-1 relative overflow-hidden"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <div className="absolute inset-0 bg-shimmer animate-glass-shimmer opacity-0 group-hover/btn:opacity-100"></div>
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform relative z-10" />
                      <span className="relative z-10">GitHub</span>
                    </Button>
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="glass-button group/btn futuristic-hover transition-all duration-300 neon-border flex-1 relative overflow-hidden"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        <div className="absolute inset-0 bg-shimmer animate-glass-shimmer opacity-0 group-hover/btn:opacity-100"></div>
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform relative z-10" />
                        <span className="relative z-10">Live Demo</span>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
