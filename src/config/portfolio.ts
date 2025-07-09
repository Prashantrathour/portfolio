
// Portfolio Configuration
// Update these values to customize your portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Prashant Rathour",
    title: "Full-Stack Developer",
    description: "Full-Stack Developer crafting digital experiences with modern technologies",
    location: "Shahjahanpur, Uttar Pradesh",
    email: "prathour884@gmail.com",
    phone: "+91 6393277345",
    profileImage: "/doc-uploads/687d28df-1f6f-412c-b5a3-7a32911f0c3c.png"
  },

  // Social Links
  social: {
    github: "https://github.com/Prashantrathour",
    linkedin: "https://linkedin.com/in/prashant-rathour-web-developer",
    portfolio: "https://Prashantrathour.github.io",
    resume: "https://drive.google.com/file/d/1_YWaY9Sq2YRto36Bfc3r2bM0nTOGHgXN/view?usp=sharing"
  },

  // Projects Configuration
  projects: [
     {
      title: "Mood Spice",
      description: "So I created an app that suggests Indian recipes based on your mood. Select your mood: Happy, Comfort, Romantic, Adventurous, Calm, etc.Get a delicious Indian recipe to match it Don’t like it? Just hit Shuffle for more! Each recipe includes full instructions, prep/cook time, and ingredients And while your food is getting ready... you can even play a memory game inside the app 🎮",
      image: "https://res.cloudinary.com/djpuwf2xv/image/upload/v1752041894/1752041742442285_r4_311912384290887552_ouuvbz.png",
      techStack: ["React", "Redux Toolkit", "Node.js", "Express", "SQLite", "tailwindcss", "JWT"],
      githubUrl: "https://github.com/Prashant-Greenmentor/recipe-app",
      demoUrl: "https://moodspecs.netlify.app/",
      featured: true,
      date: "MAY 2025"
    },
    {
      title: "Car Sharing Platform",
      description: "A comprehensive full-stack car-sharing platform with JWT authentication, role-based (admin, driver, passenger) access control, real-time chat, trip management and otp based verification.",
      image: "/doc-uploads/carsharedemo.png",
      techStack: ["React", "Redux Toolkit", "Node.js", "Express", "PostgreSQL", "Socket.io", "tailwindcss", "JWT", "Firebase"],
      githubUrl: "https://github.com/Prashantrathour/car-share-application",
      demoUrl: "https://car-sharing-dev.netlify.app",
      featured: true,
      date: "APR 2025"
    }, {
      title: "TradeHub - Trading Platform",
      description: "A comprehensive trading platform with real-time market data, portfolio management, and advanced analytics.",
      image: "/doc-uploads/tradehub.png",
      techStack: ["React", "Redux", "Node.js", "MongoDB", "Chakra UI", "JWT", "Firebase"],
      githubUrl: "https://github.com/Prashantrathour/TradeHub",
      demoUrl: "https://tradehub-demo.vercel.app",
      featured: true,
      date: "Jun 2024"
    },
    {
      title: "Progressio - Learning Management System",
      description: "A comprehensive LMS platform that streamlines online education by managing content, assignments, and tracking student progress.",
      image: "/doc-uploads/progressio.png",
      techStack: ["Angular", "Python", "Django", "PostgreSQL", "Tailwind CSS", "JWT"],
      githubUrl: "https://github.com/Prashantrathour/progressio.com",
      demoUrl: "https://progressiolms.netlify.app/",
      featured: true,
      date: "Sep 2023"
    },
   
    {
      title: "Healthcare Hospital Platform",
      description: "An online platform for consulting with doctors and making appointments.",
      image: "/doc-uploads/healthcare.png",
      techStack: ["React", "Redux", "JSON Server", "Chakra UI", "CSS"],
      githubUrl: "https://github.com/Prashantrathour/Health-care-Hospital",
      demoUrl: "https://helthcarehopital.vercel.app/",
      featured: false,
      date: "May 2023"
    },
    {
      title: "Infinity - E-commerce Platform",
      description: "A complete e-commerce clone inspired by Myntra, featuring product browsing, shopping cart, and order management.",
      image: "/doc-uploads/infinity.png",
      techStack: ["React", "JavaScript", "Chakra UI", "React Router", "JSON Server"],
      githubUrl: "https://github.com/Prashantrathour/infinity",
      demoUrl: "https://prashantinfinity.netlify.app/",
      featured: false,
      date: "Apr 2024"
    },
    {
      title: "Cool-Clothing - E-commerce Platform",
      description: "Online shopping for women and men made easy at Koovs. Buy clothes and footwear online from latest collection of fashion apparel, accessories & more",
      image: "/doc-uploads/cool-clothing.png",
      techStack: ["JavaScript", "HTML", "CSS", "JSON Server"],
      githubUrl: "https://github.com/Prashantrathour/Cool-clothes",
      demoUrl: "https://storied-gumption-752ad0.netlify.app/",
      featured: false,
      date: "Mar 2023"
    }
  ]
};
