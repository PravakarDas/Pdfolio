
import React from "react";
import { IconType } from "react-icons";

export interface HomeSection {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  profileImage: string;
  resume: string,
  socialLinks: {
    github: string;
    linkedin: string;
    facebook: string;
  };
}

export interface AboutSection {
  fullName: string;
  bio: string;
  email: string;
  whatsapp: string,
  location: string;
  interests: string[];
  profileImage: string;
}

export interface Skill {
  name: string;
  category?: "language" | "framework" | "library" | "database"  | "CS Fundamentals"  | "runtime" | "devops";
  icon?: IconType;
}

export interface SkillsSection {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string[]
  image: string;
  github?: {
    frontend?: string,
    backend? : string;
  };
  liveDemo?: string;
  feature: string[]
}

export interface PortfolioSection {
  title: string;
  projects: Project[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface ExperienceSection {
  title: string;
  experiences: Experience[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  result?: string;
  focus?: string[];
}

export interface EducationSection {
  title: string;
  education: Education[];
}

export interface Achivement {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
  image? : string[];
}
