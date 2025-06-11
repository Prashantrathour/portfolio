
import { Card, CardContent } from "@/components/ui/card";
import { portfolioConfig } from "@/config/portfolio";
import { Brain, Code, Users, Lightbulb, Target, Clock, BookOpen, Zap, Cpu, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const softSkills = [
    { name: "Problem Solving", icon: Brain },
    { name: "Team Collaboration", icon: Users },
    { name: "Communication", icon: Code },
    { name: "Adaptability", icon: Zap },
    { name: "Leadership", icon: Target },
    { name: "Time Management", icon: Clock },
    { name: "Continuous Learning", icon: BookOpen },
    { name: "Innovation", icon: Lightbulb }
  ];

  const achievements = [
    { number: "1+", label: "Years of Professional Experience", icon: Rocket },
    { number: "800+", label: "OJ and LeetCode Problems Solved", icon: Cpu },
    { number: "400+", label: "Git Commits", icon: Code },
    { number: "8+", label: "Major Projects Done", icon: Target },
    { number: "20+", label: "Mini Projects", icon: Lightbulb },
    { number: "100+", label: "Hours of Soft Skills", icon: Brain }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent  ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-100 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            Highly skilled Full Stack Developer with 1+ years of experience in developing sustainable web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="w-80 h-80 mx-auto md:mx-0 relative">
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-1 animate-spin" style={{ animationDuration: '4s' }}>
                  <div className="w-full h-full rounded-3xl bg-background"></div>
                </div>
                
                {/* Glass container */}
                <div className="absolute inset-4 rounded-3xl glass-card overflow-hidden group-hover:scale-105 transition-all duration-500">
                  <img 
                    src={portfolioConfig.personal.profileImage}
                    alt={portfolioConfig.personal.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 animate-hologram"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 glass-card p-3 rounded-2xl animate-float">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <Rocket className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </div>
          </div>
          
          <div className={`space-y-8 transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group futuristic-hover">
              <div className="absolute inset-0 bg-shimmer animate-glass-shimmer opacity-0 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  Hi, I'm <span className="text-primary font-semibold neon-text">{portfolioConfig.personal.name}</span>, a highly skilled Full Stack Developer 
                  with 1+ years of experience in developing sustainable web applications using modern frontend and backend technologies. 
                  Currently working at Green Mentor, Bengaluru, where I design and develop scalable web solutions.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  I'm proficient in creating scalable and user-focused solutions with expertise in React, Redux Toolkit, 
                  Tailwind CSS, Node.js, Express, PostgreSQL, MongoDB, and AWS. I excel at collaborating in team environments 
                  and delivering robust CMS, user-specific features, and data visualization tools.
                </p>

                <p className="text-lg leading-relaxed text-foreground/80">
                  My journey from Mechanical Engineer to Full-Stack Developer began with a simple "Hello World" program. 
                  After completing my B.Tech in Mechanical Engineering and a comprehensive full-stack web development course 
                  at Masai School, I've successfully delivered 8+ major projects and 20+ mini-projects.
                </p>
              </div>
            </div>
            
            <Card className="glass-card rounded-3xl group futuristic-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-shimmer animate-glass-shimmer opacity-0 group-hover:opacity-100"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="font-bold mb-6 text-xl flex items-center text-primary neon-text">
                  <Brain className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Soft Skills & Abilities
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={skill.name}
                        className={`flex items-center text-sm text-foreground/80 hover:text-primary transition-all duration-300 glass-card p-3 rounded-xl group/item futuristic-hover ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        <IconComponent className="mr-3 h-5 w-5 group-hover/item:scale-110 transition-transform text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={achievement.label}
                className={`glass-card rounded-3xl text-center p-8 group futuristic-hover relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-shimmer animate-glass-shimmer opacity-0 group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="glass-card p-4 rounded-2xl">
                      <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform neon-text">
                    {achievement.number}
                  </div>
                  <div className="text-sm md:text-base text-foreground/80 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
