import { EducationItem, Project, SocialLink, Skill } from './types';

export const PERSONAL_DETAILS = {
  name: "LOCHAN B R",
  tagline: "Aspiring Full Stack Web Developer & Engineering Student.",
  email: "lochanbr2@gmail.com",
  about: "I am passionate about Full Stack Web Development and building end-to-end digital solutions. My strong foundation in C and C++ has sharpened my algorithmic thinking and problem-solving skills, while my knowledge of SQL ensures efficient data management. I combine these core technical skills with HTML to structure the web. I am eager to evolve these capabilities into building dynamic, responsive, and user-centric web applications that bridge the gap between complex backend logic and intuitive frontend design."
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    type: 'Engineering',
    institution: 'KVG COLLEGE OF ENGINEERING SULLIA',
    locationLink: 'https://maps.app.goo.gl/aPXR5S4a1Yrc9u2a7?g_st=aw',
  },
  {
    type: 'Pre-University',
    institution: 'ST PHILOMENA COLLEGE PUTTUR',
    locationLink: 'https://maps.app.goo.gl/28QaJPNFCdUJ5TQC6?g_st=aw',
  },
  {
    type: 'School',
    institution: 'ST JOSEPH COLLEGE SULLIA',
    locationLink: 'https://maps.app.goo.gl/b9cFBnh2o9np4cF98?g_st=aw',
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    name: "C",
    description: "A foundational procedural language. I leverage C to master low-level memory management, pointers, and efficient algorithm implementation, forming the bedrock of my computer science understanding."
  },
  {
    name: "C++",
    description: "A high-performance language supporting object-oriented programming. I utilize C++ for competitive programming, complex data structures, and building robust software systems with the Standard Template Library (STL)."
  },
  {
    name: "HTML",
    description: "The standard markup language for the web. I construct semantic, accessible, and SEO-friendly document structures that serve as the solid backbone for modern web applications."
  },
  {
    name: "SQL",
    description: "The standard language for relational database management. I write complex queries to normalize databases, manage relationships, and ensure data integrity for backend systems."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "AI BASED AUTO FORM FILLING",
    description: "An AI-powered tool to automate form filling processes, significantly reducing manual data entry time and errors.",
    link: "https://github.com/lochanbr/Brainwave",
    tags: ["AI", "Automation", "Python"]
  },
  {
    title: "ALGORITHM VISUALIZER",
    description: "An interactive educational tool designed to visualize how various algorithms work in real-time to aid learning.",
    link: "https://github.com/lochanbr/Algovis-interactive-algorithm-visualizer",
    tags: ["Web", "Algorithms", "Interactive"]
  },
  {
    title: "NEWS FEED APPLICATION",
    description: "A dynamic news feed application that aggregates and displays news content with modern UI and real-time updates.",
    link: "https://github.com/lochanbr/newsfeed",
    tags: ["Web", "News", "React"]
  },
  {
    title: "AI TRAVEL AGENCY",
    description: "An intelligent travel agency platform powered by AI to provide personalized travel recommendations and booking assistance.",
    link: "https://github.com/lochanbr/ai-travel-agency",
    tags: ["AI", "Travel", "Web"]
  },
  {
    title: "LADY BUDDY - WOMEN SAFETY APP",
    description: "A comprehensive women safety application with emergency features, location tracking, and safety alerts to ensure women's security and peace of mind.",
    link: "https://github.com/lochanbr/LadyBuddy-A-woman-safety-app",
    tags: ["Safety", "Mobile", "Emergency"]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/lochan-b-r-3a229437b",
    iconName: "Linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/lochanbr",
    iconName: "Github"
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/lochan.30_",
    iconName: "Instagram"
  }
];