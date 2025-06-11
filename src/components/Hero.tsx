
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Sparkles, Zap } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    window.open(portfolioConfig.social.resume, "_blank");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-secondary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-accent/30 rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-neon-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary rounded-full animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-accent rounded-full animate-neon-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Matrix-style background lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-matrix-rain"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 relative group">
              {/* Glowing ring around profile */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1 animate-spin" style={{ animationDuration: '3s' }}>
                <div className="w-full h-full rounded-full bg-background"></div>
              </div>
              
              {/* Profile image container */}
              <div className="absolute inset-2 rounded-full glass-card overflow-hidden group-hover:scale-110 transition-all duration-500">
                <img 
                  src={portfolioConfig.personal.profileImage}
                  alt={portfolioConfig.personal.name}
                  className="w-full h-full object-cover animate-hologram"
                />
              </div>
              
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2">
                <Zap className="w-5 h-5 text-primary animate-bounce" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in neon-text">
            {portfolioConfig.personal.name}
          </h1>
          
          <div className="glass-card p-6 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
              {portfolioConfig.personal.description}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="glass-button group animate-fade-in neon-border futuristic-hover relative overflow-hidden"
              style={{ animationDelay: '0.4s' }}
              onClick={() => window.open(portfolioConfig.social.github, "_blank")}
            >
              <div className="absolute inset-0 bg-shimmer animate-glass-shimmer"></div>
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">GitHub</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-button group animate-fade-in neon-border futuristic-hover relative overflow-hidden"
              style={{ animationDelay: '0.5s' }}
              onClick={() => window.open(portfolioConfig.social.linkedin, "_blank")}
            >
              <div className="absolute inset-0 bg-shimmer animate-glass-shimmer" style={{ animationDelay: '0.5s' }}></div>
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform relative z-10" />
              <span className="relative z-10">LinkedIn</span>
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="glass-button group animate-fade-in neon-border futuristic-hover relative overflow-hidden"
              style={{ animationDelay: '0.6s' }}
              onClick={downloadResume}
            >
              <div className="absolute inset-0 bg-shimmer animate-glass-shimmer" style={{ animationDelay: '1s' }}></div>
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform relative z-10" />
              <span className="relative z-10">Resume</span>
            </Button>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass-card p-4 rounded-full text-foreground/70 hover:text-primary transition-all duration-300 group animate-bounce neon-border"
        >
          <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
