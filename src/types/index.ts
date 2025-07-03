export interface Repository {
  name: string;
  description: string | null;
  topics: string[];
  html_url?: string;
  homepage?: string;
}

export interface Project {
  name: string;
  description: string;
  topics: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Skill {
  category: string;
  technologies: string[];
} 