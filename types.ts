export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface EducationItem {
  institution: string;
  locationLink: string;
  period?: string; // Optional if not provided
  degree?: string; // Optional based on context
  type: 'Engineering' | 'Pre-University' | 'School';
}

export interface Skill {
  name: string;
  description: string;
  level?: number; 
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'Linkedin' | 'Github' | 'Instagram' | 'Mail';
}