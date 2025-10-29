"use client";

import StarryProjectGrid, { type StarryProject } from "@/components/StarryProjectGrid";

const projects: StarryProject[] = [
  {
    title: "Essential_Tools",
    description:
      "Essential Tools (Flask) is a modern, local-first PDF utility suite with a glassmorphic UI. Merge, split, compress, convert, sign, and secure PDFs via a responsive web UI and REST API. Designed for elegant UX, offline-first processing, and optional system-tool integration.",
    link: "https://essential-tools-7iuo.onrender.com/",
    github: "https://github.com/PravakarDas/Essential_Tools",
    image: "/projects/essential-tools.png", // replace with your actual screenshot
    skills: [
      "Flask",
      "Python",
      "REST API",
      "PyPDF2",
      "Pillow/img2pdf",
      "HTML/CSS",
      "JavaScript",
      "Tailwind CSS",
      "Docker",
      "Render",
    ],
  },
  {
    title: "Arena_Strike",
    description:
      "3D cannon-defense game built with Python and OpenGL: defend the arena with bullets, bombs, and lasers. Features real-time 3D rendering, multiple enemy types and levels, dynamic camera modes, and optional hand-gesture controls using OpenCV + MediaPipe.",
    link: "https://github.com/PravakarDas/Arena_Strike",
    github: "https://github.com/PravakarDas/Arena_Strike",
    image: "/projects/arena-strike.jpg", // replace with your actual screenshot
    skills: [
      "Python",
      "OpenGL (PyOpenGL)",
      "Pygame",
      "OpenCV",
      "MediaPipe",
      "OOP",
      "Game Loops",
    ],
  },
  {
    title: "Auris",
    description:
      "A modern, full-featured hotel booking platform (MERN) to explore rooms, book stays, manage reservations, and share reviews. Responsive animated UI, real-time updates, secure Firebase + JWT auth, and interactive maps for a smooth, personalized experience.",
    link: "https://hotel-client-side.web.app/",
    github: "https://github.com/PravakarDas/Auris",
    image: "/projects/auris.jpg", // replace with your actual screenshot
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "Firebase Auth",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
      "Interactive Map",
    ],
  },
  {
    title: "Meghna_Oil_Agency",
    description:
      "Full-stack MERN e-commerce platform for an oil products business with separate client and admin frontends. Browse/filter products (cooking, motor, industrial oils) while the admin panel manages inventory and data via robust API endpoints.",
    link: "https://github.com/PravakarDas/Meghna-Oil-Agency",
    github: "https://github.com/PravakarDas/Meghna-Oil-Agency",
    image: "/projects/meghna-oil-agency.jpg", // replace with your actual screenshot
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "React Router",
      "Tailwind CSS",
      "Admin Dashboard",
      "REST APIs",
    ],
  },
  {
    title: "TurfManagementSystem",
    description:
      "An ongoing MERN platform to streamline turf booking and administration with three roles: Client, Turf Manager, and Project Admin. Secure, role-based access with real-time updates and a responsive UI for bookings, schedules, and operations.",
    link: "https://github.com/PravakarDas/TurfManagementSystem",
    github: "https://github.com/PravakarDas/TurfManagementSystem",
    image: "/projects/turf-management.jpg", // replace with your actual screenshot
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "Role-Based Access",
      "Tailwind CSS",
      "REST APIs",
      "Real-time Updates",
    ],
  },
];

export default function Projects() {
  return (
    <StarryProjectGrid
      id="projects"
      title="Some of my Projects!"
      projects={projects}
      withGradient={false}
      withStarfield={false}
      starCount={200}
      meteorEveryMs={2800}
      gridColsClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      enableFlip
      flipIntervalMs={5000}
    />
  );
}
