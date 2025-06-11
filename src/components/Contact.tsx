
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Prashantrathour",
      icon: Github,
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prashant-rathour-web-developer/",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      url: "mailto:prathour884@gmail.com",
      icon: Mail,
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-scale group transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="mr-2 h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                Send a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                </div>
                <div>
                  <Input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject} 
                    onChange={handleInputChange} 
                    required 
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>
                <div>
                  <Textarea 
                    name="message" 
                    placeholder="Your message..." 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full hover-scale group transition-all duration-300" 
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <Card className="hover-scale group transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  Let's Connect
                </CardTitle>
                <CardDescription>
                  I'm always open to discussing new opportunities and interesting projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 group/item hover:bg-muted/50 p-2 rounded transition-colors">
                  <h4 className="font-semibold flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary group-hover/item:scale-110 transition-transform" />
                    Location
                  </h4>
                  <p className="text-muted-foreground ml-6">Shahjahanpur, UttarPradesh</p>
                </div>
                <div className="space-y-2 group/item hover:bg-muted/50 p-2 rounded transition-colors">
                  <h4 className="font-semibold flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-primary group-hover/item:scale-110 transition-transform" />
                    Email
                  </h4>
                  <p className="text-muted-foreground ml-6">prathour884@gmail.com</p>
                </div>
                <div className="space-y-2 group/item hover:bg-muted/50 p-2 rounded transition-colors">
                  <h4 className="font-semibold flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary group-hover/item:scale-110 transition-transform" />
                    Response Time
                  </h4>
                  <p className="text-muted-foreground ml-6">Usually within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale group transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Github className="mr-2 h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                  Social Media
                </CardTitle>
                <CardDescription>
                  Connect with me on various platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={social.name}
                        variant="outline"
                        className={`justify-start hover-scale group/btn transition-all duration-300 ${social.color} animate-fade-in`}
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                        onClick={() => window.open(social.url, "_blank")}
                      >
                        <IconComponent className="mr-3 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        {social.name}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground">
            © 2024 Prashant Rathour. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
