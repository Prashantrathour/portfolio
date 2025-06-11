
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Green Mentor (Backed by IIMB - NSRCEL)",
      role: "Software Development Engineer 1",
      period: "Aug 2024 - Present",
      location: "Mumbai, Maharashtra (Remote)",
      description: "Developed a sustainability platform enabling users to create accounts with role-based functionalities, input data for sustainability metrics, and visualize results through dynamic charts.",
      responsibilities: [
        "Front-End Development: Designed responsive user interfaces using HTML, CSS, JavaScript, React, Redux Toolkit, and Tailwind CSS",
        "Back-End Development: Implemented server-side applications with Node.js and Express, utilizing JWT tokens for secure authentication and Multer for file handling",
        "Database Management: Managed PostgreSQL databases with Sequelize ORM for efficient data storage and retrieval",
        "Role-Based Access Control: Established role-based access, allowing administrators to assign specific roles and functionalities to users",
        "Data Visualization: Integrated Apache ECharts within React to create interactive charts representing sustainability metrics",
        "Report Generation: Enabled users to download comprehensive PDF reports of their sustainability data and analyses"
      ],
      achievements: [
        "Enhanced User Engagement: Achieved significant increase in user engagement through seamless and intuitive UI",
        "Improved Data Security: Strengthened platform security through robust authentication and role-based access control",
        "Efficient Data Processing: Optimized data processing workflows, reducing data retrieval times"
      ],
      technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Sequelize", "Apache ECharts", "JWT", "Multer", "Git"]
    },
    {
      title: "Green Mentor (Backed by IIMB - NSRCEL)",
      role: "Software Development Engineer (SDE) - Intern",
      period: "Feb 2024 - Aug 2024",
      location: "Mumbai, Maharashtra (Remote)",
      description: "Started as an intern and contributed to the development of the sustainability platform, learning and implementing modern development practices.",
      responsibilities: [
        "Contributed to front-end development using React and modern CSS frameworks",
        "Assisted in back-end development with Node.js and Express",
        "Learned database management with PostgreSQL and Sequelize ORM",
        "Participated in code reviews and team standups",
        "Implemented responsive UI components and features"
      ],
      achievements: [
        "Successfully transitioned from intern to full-time Software Development Engineer",
        "Demonstrated strong learning ability and adaptation to new technologies",
        "Contributed effectively to team projects and development workflows"
      ],
      technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JavaScript", "Git"]
    },
    {
      title: "Masai School",
      role: "Assessment Assistant (Mentor)",
      period: "Nov 2023 - Apr 2024",
      location: "Bengaluru, Karnataka (Remote)",
      description: "Participated as a mentor in the Assessment Assistantship Program, conducting technical interviews with students as part of their practice sessions.",
      responsibilities: [
        "Conducted technical interviews with students for practice sessions",
        "Provided feedback and guidance to help students improve their technical skills",
        "Mentored aspiring developers in full-stack development concepts",
        "Helped students prepare for real-world technical interviews",
        "Contributed to the growth and success of aspiring professionals"
      ],
      achievements: [
        "Successfully mentored numerous students in their technical development",
        "Received AA certification for dedication and commitment to student success",
        "Made positive impact in helping students develop skills and achieve goals"
      ],
      technologies: ["Full-Stack Development", "Technical Interviewing", "Mentorship", "Communication"]
    },
    {
      title: "Tech Mahindra",
      role: "Customer Service Associate",
      period: "Jun 2022 - Sep 2022",
      location: "Noida, Uttar Pradesh (On-site)",
      description: "Worked with Bank of Baroda process, providing customer support and service to banking clients.",
      responsibilities: [
        "Provided customer support for Bank of Baroda banking processes",
        "Handled customer inquiries and resolved banking-related issues",
        "Maintained high standards of customer service and satisfaction",
        "Processed customer requests efficiently and accurately",
        "Collaborated with team members to ensure smooth operations"
      ],
      achievements: [
        "Maintained excellent customer satisfaction ratings",
        "Developed strong communication and problem-solving skills",
        "Gained valuable experience in professional customer service environment"
      ],
      technologies: ["Customer Support", "Banking Processes", "Communication", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions to various projects
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={`${exp.title}-${exp.period}`}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardHeader>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <Badge variant="secondary">{exp.period}</Badge>
                        </div>
                        <CardDescription className="text-lg font-medium text-primary">
                          {exp.role}
                        </CardDescription>
                        {exp.location && (
                          <CardDescription className="text-sm text-muted-foreground">
                            {exp.location}
                          </CardDescription>
                        )}
                        <CardDescription className="text-base leading-relaxed">
                          {exp.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {exp.achievements && (
                          <div>
                            <h4 className="font-semibold mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div>
                          <h4 className="font-semibold mb-2">Technologies & Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
