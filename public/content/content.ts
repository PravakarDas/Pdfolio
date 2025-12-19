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
  resume: 'https://drive.google.com/uc?export=download&id=1wBtEHACnzIFvP1lzHJ_2PS-vuHcLYl8K',
  socialLinks: {
    github: "https://github.com/PravakarDas",
    linkedin: "www.linkedin.com/in/pravakarda",
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
    { name: "Dart", icon: SiDart, category: "language" },
    { name: "C", icon: SiC, category: "language" },
    { name: "Cpp", icon: SiCplusplus, category: "language" },
    { name: "github", icon: SiGithub, category: "devops" },
    { name: "git", icon: SiGit, category: "devops" },
    { name: "Next.js", icon: RiNextjsFill, category: "framework" },
    { name: "React.js", icon: RiReactjsFill, category: "library" },
    { name: "Node.js", icon: RiNodejsFill, category: "runtime" },
    { name: "Express.js", icon: SiExpress, category: "framework" },
    { name: "Prisma ORM", icon: SiPrisma, category: "library" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "database" },
    { name: "TailwindCSS", category: "framework", icon: RiTailwindCssFill },
    { name: "Docker", category: "devops", icon: SiDocker },
    { name: "MongoDb", category: "database", icon: SiMongodb },
    { name: "Mongoose ORM", category: "library", icon: SiMongoose },
    { name: "MySql", category: "database", icon: SiMysql },
    { name: "Flutter", category: "framework", icon: SiFlutter },
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
      title: "Bangla-py",
      category: ["backend", "fullstack", 'frontend'],
      description:
        `bengali to python language converter | Developed an interactive platform for children to learn Python programming in their native Bengali
        language. The platform allows kids to write code in Bengali, displays errors and feedback in Bengali,
        and tracks learning progress over time using a visual heatmap`,
      technologies: ["TypeScript", "JavaScript", "React.js", "Next.js", "Node.js", "Express", "PostgreSql", "prisma", "piston Api", "OAuth", "session"],
      image: "https://i.ibb.co.com/vCgmY4Gm/Screenshot-2025-11-24-223933.png",
      github: {
        frontend: 'https://github.com/marmiju/banglaPy',
        backend: 'https://github.com/marmiju/banglaPy_backend'
      },
      liveDemo: "https://bangla-py.vercel.app",
      feature: [
        "Interactive Python tutorials in Bengali",
        "Beginner-friendly explanations and examples",
        "Live coding editor and test cases execution",
        "Authentication system with Google Login",
        "User progress tracking & learning badges",
        "REST API backend with scalable architecture",
        "Mobile-first responsive UI",
        "Quiz system with instant feedback",
        "Code challenges with difficulty levels",
        "Dynamic roadmap for Python learning path",
        "Dark/Light theme support",
        "Secure database with Prisma + PostgreSQL",
        "Admin panel for managing lessons & users"
      ]
    },

    {
      id: "p2",
      title: "Bidrirectional Chat App",
      category: ['backend',],
      description:
        ` frontend_under_development | Designed and developed a scalable real-time chat application backend that supports group messaging, online presence, and live typing indicators. The system efficiently handles both persistent message storage and real-time communication using REST APIs and WebSockets, ensuring reliable message delivery and a smooth user experience.`,
      technologies: ["Node.js", "Express.js", "MongoDB with Mongoose", "Socket.io (Web Socket)", "Rest API", "JWT Authentication", "vercel"],
      image: `https://i.ibb.co.com/8LV54Rw5/p2.png`,
      github: {
        backend: 'https://github.com/marmiju/chat_backend'
      },
      feature: [
        "Implemented Socket.IO rooms for efficient group- specific broadcasting",
        "Used REST APIs for initial data loading and WebSockets for live updates",
        "Designed a delivery status system(sent/ read) per message",
        "Managed multiple socket connections per user for accurate presence tracking",
        "Ensured clean socket lifecycle handling(connect, disconnect, join, leave)",
        "Prevented race conditions and memory leaks in real - time events"
      ]
    },
    {
      id: "p3",
      title: "nids_web",
      category: ['backend', 'frontend', 'fullstack'],
      description:
        "Built a responsive and dynamic website for NIDS College featuring admission info, notices, faculty details, contests, programs, and facilities with a clean and user-friendly UI.",
      technologies: ["React.js", "Next.js", "node.js", "express.js", "Mysql", "rest API", "JWT Authentication", "vercel"],
      image: "https://i.ibb.co.com/TMXBRRHk/Chat-x.png",
      liveDemo: "https://nids-two.vercel.app",
      github: {
        backend: 'https://github.com/marmiju/nidsb',
        frontend: 'https://github.com/marmiju/nids.com',
      },
      feature: [
        "responsive design",
        "Dark, Light mode based on user preference and system settings",
        "Student Contests and Programs",
        "tracking user progress in contests",
        "Admission information",
        "Authentication system with Google Login",
        "College programmes and facilities",
        "teachers' information",
        "notice board",
        "Contact section for inquiries and more",
      ]
    }
  ]
};

export const experienceData: ExperienceSection = {
  title: "Experience",
  experiences: [
    {
      id: "e1",
      role: "junior developer",
      company: "Inovate Digital",
      duration: " april 2024 - Nov 2025",
      description: [
        "Built custom websites and web apps for clients.",
        "Created backend APIs using Node.js & Prisma.",
        "Improved performance and SEO of client websites."
      ]
    },
    {
      id: "e2",
      role: "self-practiced developer",
      company: "Self Employed",
      duration: " jan 2023 - present",
      description: [
        "exploring new technologies and frameworks.",
        "creating personal projects to enhance my skills.",
        "developed problem-solving and coding abilities through consistent practice.",
        "makes mobile apps using flutter framework."
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
      result: "CGPA: 2.8 / 4.0",
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
      result: "GPA: 4.93 / 5.0"
    },
    {
      id: "ed3",
      degree: "Secondary School Certificate",
      institution: "Hazi Md. Mohsin Government High School",
      location: "Chattogram, Bangladesh",
      duration: "2012 – 2018",
      result: "GPA: 4.84 / 5.0"
    }
  ]
};
