import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { AboutSection, Achivement, ExperienceSection, HomeSection, PortfolioSection, SkillsSection, EducationSection } from "../types/Interfaces";
import { SiC, SiCplusplus, SiDart, SiDocker, SiExpress, SiFlutter, SiGit, SiGithub, SiJavascript, SiLinux, SiMongodb, SiMongoose, SiMysql, SiPostgresql, SiPrisma, SiPython, SiTypescript } from "react-icons/si";

export const homeData: HomeSection = {
  name: "Pravakar",
  title: "Pravakar Das",
  subtitle: "",
  description:
    "I’m a backend developer specialising in JavaScript, TypeScript, Node.js, Prisma, and modern frontend tools like Next.js. I love turning ideas into clean and functional digital products.",
  profileImage: "/assets/profile.png",
  resume: '/assets/CV & Resume/Resume.pdf',
  cv: '/assets/CV & Resume/CV.pdf',
  socialLinks: {
    github: "https://github.com/PravakarDas",
    linkedin: "https://www.linkedin.com/in/pravakarda",
    facebook: "https://www.facebook.com/pd.PravakarDa/"
  }
};

export const aboutData: AboutSection = {
  fullName: "Pravakar Das",
  bio: "I am a dedicated full-stack developer focused on building modern, responsive, and user-friendly web applications. I enjoy solving real-world problems using clean architecture and optimized backend logic.",
  email: "pravakar459@gmail.com",
  whatsapp: '+8801515675655',
  location: "Chittagong, Bangladesh",
  interests: [
    "Backend Development - first priority",
    "Full-stack development",
    "AI & ML Model Integration into Applications"
  ],
  profileImage: "/assets/profile.png"
};

export const skillsData: SkillsSection = {
  title: "My Skills",
  skills: [
    { name: "JavaScript", icon: SiJavascript, category: "language" },
    { name: "TypeScript", category: "language", icon: SiTypescript },
    { name: "Python", icon: SiPython, category: "language" },
    // { name: "Dart", icon: SiDart, category: "language" },
    // { name: "C", icon: SiC, category: "language" },
    // { name: "Cpp", icon: SiCplusplus, category: "language" },
    { name: "github", icon: SiGithub, category: "devops" },
    { name: "git", icon: SiGit, category: "devops" },
    { name: "Next.js", icon: RiNextjsFill, category: "framework" },
    { name: "React.js", icon: RiReactjsFill, category: "library" },
    { name: "Node.js", icon: RiNodejsFill, category: "runtime" },
    { name: "Express.js", icon: SiExpress, category: "framework" },
    // { name: "Prisma ORM", icon: SiPrisma, category: "library" },
    // { name: "PostgreSQL", icon: SiPostgresql, category: "database" },
    { name: "TailwindCSS", category: "framework", icon: RiTailwindCssFill },
    // { name: "Docker", category: "devops", icon: SiDocker },
    { name: "MongoDb", category: "database", icon: SiMongodb },
    // { name: "Mongoose ORM", category: "library", icon: SiMongoose },
    { name: "MySql", category: "database", icon: SiMysql },
    // { name: "Flutter", category: "framework", icon: SiFlutter },
    { name: "OOP", category: "CS Fundamentals" },
    { name: "DSA", category: "CS Fundamentals" },
    { name: "Linux (basic commands)", icon: SiLinux, category: "devops" },

  ]
};

export const portfolioData: PortfolioSection = {
  title: "My Projects",
  projects: [
    {
      id: "p1",
      title: "IntegraFlow",
      category: ["fullstack", "frontend", "backend"],
      description: `Enterprise-grade ERP platform with comprehensive admin panel, HR, inventory, sales, and automated workflows for scalable business management.`,
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "JWT", "ShadCN/UI"],
      image: "/assets/projects/source/5013256.jpg",
      github: {
        frontend: "https://github.com/PravakarDas/IntegraFlow"
      },
      liveDemo: "https://integra-flow-iota.vercel.app",
      feature: [
        "Modern ERP with inventory, HR, sales & analytics modules",
        "Responsive, database-driven UI with real-time metrics",
        "Dark/Light theme support and PWA readiness",
        "Secure authentication with JWT",
        "Role-based access control and dashboards",
        "Reusable components with shadcn/ui",
        "SEO-optimized with structured data",
        "API routes for multi-module data handling"
      ]
    },
    {
      id: "p2",
      title: "Employee Attendance Portal",
      category: ["fullstack", "backend", "ml"],
      description: `AI-powered employee attendance system using facial recognition for automated check-in/out, analytics, and real-time logging.`,
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "FastAPI", "DeepFace", "JWT"],
      image: "/assets/projects/source/5013256.jpg",
      github: {
        frontend: "https://github.com/PravakarDas/Employee-Attendence-Portal",
        backend: "https://github.com/PravakarDas/Employee-Attendence-Portal"
      },
      liveDemo: "",
      feature: [
        "AI-powered facial recognition for attendance",
        "JWT authentication and role-based access",
        "Real-time employee & admin dashboards",
        "Attendance analytics and reports export",
        "Secure RESTful backend services",
        "Responsive UI with Tailwind CSS",
        "Modular frontend with Next.js",
        "DeepFace based vision model integration"
      ]
    },
    {
      id: "p3",
      title: "Auris",
      category: ["fullstack", "frontend", "backend"],
      description: `A full-featured hotel booking platform built on the MERN stack with dynamic reservations, payments, and responsive UI elements.`,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "/assets/projects/source/5013256.jpg",
      github: {
        frontend: "https://github.com/PravakarDas/Auris",
        backend: "https://github.com/PravakarDas/Auris"
      },
      liveDemo: "https://hotel-client-side.web.app",
      feature: [
        "Hotel reservation management",
        "User authentication and sessions",
        "Real-time booking calendar",
        "Responsive UI across devices",
        "Payment integration",
        "MERN stack architecture",
        "Dynamic room availability updates",
        "Clean UI with hotel-focused layouts"
      ]
    },
    {
      id: "p4",
      title: "Essential Tools",
      category: ["backend", "fullstack", "utility"],
      description: `Privacy-first PDF toolkit built with Flask offering merge, split, compress, convert and other utilities with a sleek UI.`,
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      image: "/assets/projects/source/5013256.jpg",
      github: {
        backend: "https://github.com/PravakarDas/Essential_Tools"
      },
      liveDemo: "https://essential-tools-7iuo.onrender.com",
      feature: [
        "Merge and split PDF files",
        "Compress and convert PDFs",
        "Flask-powered REST backend",
        "Secure local-first processing",
        "Clean glassmorphic UI",
        "Drag and drop file uploads",
        "Fast PDF transformations",
        "Utility-focused toolkit"
      ]
    },
    {
      id: "p5",
      title: "HostCast",
      category: ["backend", "networking", "utility"],
      description: `High-performance LAN file sharing and screen mirroring tool for seamless collaboration on local networks.`,
      technologies: ["Python", "Socket Programming", "Networking"],
      image: "/assets/projects/source/5013256.jpg",
      github: {
        backend: "https://github.com/PravakarDas/HostCast"
      },
      liveDemo: "",
      feature: [
        "Local network file sharing",
        "Real-time screen mirroring",
        "Low-latency streaming",
        "Cross-device connectivity",
        "Simple CLI UI",
        "Optimized networking performance",
        "Secure local transfers",
        "Efficient bandwidth utilization"
      ]
    },
    {
      id: "p6",
      title: "Arena Strike",
      category: ["game", "python", "graphics"],
      description: `3D cannon-defense game using Python and OpenGL with gesture-based gameplay mechanics.`,
      technologies: ["Python", "OpenGL", "MediaPipe"],
      image: "/assets/projects/source/5013256.jpg",
      github: {
        backend: "https://github.com/PravakarDas/Arena_Strike"
      },
      liveDemo: "",
      feature: [
        "3D cannon-defense gameplay",
        "Python game engine with OpenGL",
        "Gesture-based controls with MediaPipe",
        "Immersive game environment",
        "Real-time physics interactions",
        "Dynamic obstacles and enemies",
        "Performance-optimized rendering",
        "Keyboard & gesture input support"
      ]
    }

  ]
};

export const experienceData: ExperienceSection = {
  title: "Experience",
  experiences: [
    {
      id: "e1",
      role: "Researcher (machine learning / software engineering)",
      company: "Brac University",
      duration: "Oct 2024 - Oct 2025",
      description: [
        "Designing and executing an applied research project from proposal to evaluation and reporting.",
        "Collecting and curating datasets; building reproducible preprocessing and training pipelines.",
        "Developing and iterating on ML models; comparing baselines with clear metrics and ablations.",
        "Documenting methodology and results; preparing artifacts for thesis defense and publication."
      ]
    },
    {
      id: "e2",
      role: "Backend / Full-Stack Developer",
      company: "RenderLab (Remote)",
      duration: "Sep 2025 - Present",
      description: [
        "Building and maintaining backend services and REST APIs; integrating databases and authentication.",
        "Collaborating on Next.js and React frontends and shared component patterns when needed.",
        "Adding tests and CI/CD workflows to improve reliability and deployment speed.",
        "Participating in code reviews, grooming, and incremental delivery of features."
      ]
    },
  ]
};

export const achivementData: Achivement[] = [
  {
  id: "c1",
  title: "Completed DataCamp MLOps Fundamentals Track",
  date: "September 2025",
  description: "Completed the MLOps Fundamentals skill track on DataCamp, covering machine learning model lifecycle, CI/CD, experiment tracking, deployment strategies, and production monitoring. Statement of Accomplishment earned.",
  link: "https://www.datacamp.com/statement-of-accomplishment/track/c1e908d427b12e2716601388a7fb551166fa1203?raw=1",
  image: [
    "/assets/certificates/ml_op.jpg"
  ]
},
{
  id: "c2",
  title: "Udemy Course Completion Certificate",
  date: "2025",
  description: "Completed a Udemy online course and earned a Certificate of Completion demonstrating knowledge and skills acquired through the course.",
  link: "https://www.udemy.com/certificate/UC-d13b82ed-f82e-4800-93a2-fe464692fcf4/",
  image: [
    "/assets/certificates/ml-dlp.jpg"
  ]
},
{
  id: "c3",
  title: "Udemy Course Completion Certificate",
  date: "2025",
  description: "Completed a Udemy online course and earned a Certificate of Completion demonstrating knowledge and skills acquired through the course.",
  link: "https://www.udemy.com/certificate/UC-d15d07f7-904d-4d59-aafe-96b8a0b2d0b5/",
  image: [
    "/assets/certificates/html.jpg"
  ]
},
{
  id: "c4",
  title: "Udemy Course Completion Certificate",
  date: "2025",
  description: "Completed a Udemy online course and earned a Certificate of Completion demonstrating knowledge and skills acquired through the course.",
  link: "https://www.udemy.com/certificate/UC-aaf49160-43a1-4cdb-b3eb-70345cab2ccd/",
  image: [
    "/assets/certificates/ofc_admin.jpg"
  ]
},
{
  id: "c5",
  title: "Udemy Course Completion Certificate",
  date: "2025",
  description: "Completed a Udemy online course and earned a Certificate of Completion demonstrating knowledge and skills acquired through the course.",
  link: "https://www.udemy.com/certificate/UC-9925fc94-d998-4f05-b66b-f5f15b342c75/",
  image: [
    "/assets/certificates/centos.jpg"
  ]
}
];

export const educationData: EducationSection = {
  title: "Education",
  education: [
    {
      id: "ed1",
      degree: "Bachelor of Science in Computer Science",
      institution: "BRAC University",
      location: "Dhaka, Bangladesh",
      duration: "2022 – 2025",
      
      focus: [
        "Machine Learning",
        "Software Engineering"
      ]
    },
    {
      id: "ed2",
      degree: "Higher Secondary Certificate (Science)",
      institution: "Islamia Degree College",
      location: "Chattogram, Bangladesh",
      duration: "2020 – 2022",
      
    },
    {
      id: "ed3",
      degree: "Secondary School Certificate",
      institution: "Hazi Md. Mohsin Government High School",
      location: "Chattogram, Bangladesh",
      duration: "2012 – 2018",
      
    }
  ]
};
