import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  type: 'Web App' | 'AI Model' | 'Research' | 'Deployment';
  metrics?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
}