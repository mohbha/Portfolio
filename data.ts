import { Project, Experience, Skill, SocialLink } from './types';

export const USER_PROFILE = {
  name: "Mohan Jha",
  title: "Technical Specialist & Aspiring DevOps Engineer",
  bio: "AWS-certified engineer with a strong foundation in Java & DSA. Currently managing enterprise infrastructure at PSB Bank while building deep expertise in Cloud, Networking, and Automation.",
  location: "Greater Noida, India",
  email: "mohbha123@gmail.com",
  phone: "8700346932",
  availability: "Open to DevOps Roles",
  // Uses GitHub profile picture by default. 
  // If you want a specific local photo, save it as 'mohan.jpg' in public/ folder and change this back to './mohan.jpg'
  avatarUrl: "https://github.com/mohbha.png", 
  githubUrl: "https://github.com/mohbha",
  linkedinUrl: "https://www.linkedin.com/in/mohanjha321/"
};

export const SKILLS: Skill[] = [
  { name: "Java & DSA", category: "backend", level: 90 },
  { name: "AWS (Architecting)", category: "tools", level: 85 },
  { name: "Linux / Shell", category: "backend", level: 80 },
  { name: "Docker", category: "tools", level: 70 },
  { name: "Exchange / AD", category: "tools", level: 85 },
  { name: "SQL / DBMS", category: "backend", level: 75 },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "SAFAR",
    description: "A property booking web application allowing users to list and search stays by country, city, or type (e.g., romantic, historic).",
    tags: ["Web Dev", "Search Logic", "UI/UX"],
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    link: "https://safar-eyes.onrender.com/home",
    featured: true
  },
  {
    id: "2",
    title: "Outfit Suggester",
    description: "A fashion curation app where users can upload clothing items and receive outfit ideas based on trends and preferences.",
    tags: ["Web Dev", "Recommendation", "Frontend"],
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
    link: "https://fashionspellsx-2-y11c.onrender.com/home",
    featured: true
  },
  {
    id: "3",
    title: "Asclepius Hospital Site",
    description: "Deployed a functional hospital website handling page structure and information architecture for a real-world client.",
    tags: ["HTML/CSS", "Deployment", "Freelance"],
    imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop",
    featured: false
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Technical Specialist Trainee",
    company: "Noventiq (at PSB Bank)",
    period: "09/2025 - Present", // Adjusting based on CV "Deployed at PSB Bank"
    description: "Managing on-prem Exchange Server & Active Directory. Handling mailbox provisioning, delegation, server health monitoring, and troubleshooting mail flow/headers.",
    skills: ["Exchange Server", "Active Directory", "Networking", "Troubleshooting"]
  },
  {
    id: "2",
    role: "Product Tester",
    company: "Nothing Technologies",
    period: "03/2024 - 08/2024",
    description: "Conducted thorough product testing to ensure quality functionality. Identified and reported bugs contributing to product improvement and user satisfaction.",
    skills: ["QA Testing", "Bug Reporting", "Product Quality"]
  },
  {
    id: "3",
    role: "Home Tutor & Business Asst.",
    company: "Self-Employed",
    period: "Previous",
    description: "Assisted in daily operations of family business (sales, inventory). Tutored students and managed operations, funding personal EV purchase.",
    skills: ["Management", "Teaching", "Sales"]
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Galgotias University",
    year: "2021-2025",
    score: "8.45 CGPA"
  }
];

export const CERTIFICATIONS = [
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    link: "https://www.credly.com/go/unTl23JZ"
  },
  {
    name: "AWS Academy Cloud Architecting",
    issuer: "AWS Academy",
    link: "#"
  }
];

export const ACHIEVEMENTS = [
  "Participated in various hackathons and won multiple goodies.",
  "Earned a Level 2 Badge in E-cell at Galgotias University."
];

export const CURRENT_LEARNING = [
  "AWS In-Depth (Services & Use cases)",
  "Exchange Mail Flow & Server Monitoring",
  "Networking (DNS, DHCP, Firewall)",
  "Automation (PowerShell, Python)"
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/mohbha", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/mohanjha321/", icon: "linkedin" },
  { platform: "Email", url: "mailto:mohbha123@gmail.com", icon: "email" },
];

// System prompt for the AI assistant
export const AI_SYSTEM_INSTRUCTION = `
You are the AI assistant for Mohan Jha's portfolio.
Mohan is a Technical Specialist currently working at Noventiq (deployed at PSB Bank), focusing on Exchange Servers and Active Directory.
He is an aspiring DevOps Engineer with strong skills in Java, DSA, AWS (Certified), and Linux.

Key Details:
- Current Role: Managing Exchange Server/AD at PSB Bank.
- Learning Focus: AWS, Networking, Automation (PowerShell/Python).
- Projects: SAFAR (Travel booking), Outfit Suggester.
- Contact: mohbha123@gmail.com | 8700346932
- Education: B.Tech CS from Galgotias University (8.45 CGPA).

Tone: Professional, knowledgeable about cloud/infra, and friendly.
If asked about "skills", highlight his mix of Ops (Exchange/AD) and Dev (Java/DSA).
If asked about "experience", mention his real-world impact at the Bank.
`;