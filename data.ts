import { Project, Experience, Skill, SocialLink } from './types';

export const USER_PROFILE = {
  name: "Mohan Jha",
  title: "Technical Specialist & Aspiring DevOps Engineer",
  bio: "AWS-certified engineer with a strong foundation in Java & DSA. Currently managing enterprise infrastructure at PSB Bank while building deep expertise in Cloud, Networking, and Automation.",
  location: "Greater Noida, India",
  email: "mohbha123@gmail.com",
  availability: "Open to DevOps Roles",
  avatarUrl: "https://avatars.githubusercontent.com/u/8700346932?v=4" // Placeholder logic, usually github avatar if username is known, using generic for now or the one provided in prompt if link existed. I'll use a generic tech avatar or if you have a specific URL replace it.
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
    period: "Present",
    description: "Managing on-prem Exchange Server & Active Directory. Handling mailbox provisioning, server health monitoring, and troubleshooting mail flow issues.",
    skills: ["Exchange Server", "Active Directory", "Networking", "Troubleshooting"]
  },
  {
    id: "2",
    role: "Product Tester",
    company: "Nothing Technologies",
    period: "Past",
    description: "Conducted thorough product testing to ensure quality functionality. Identified bugs and contributed to user satisfaction improvements.",
    skills: ["QA Testing", "Bug Reporting", "Product Quality"]
  },
  {
    id: "3",
    role: "Operations Assistant & Tutor",
    company: "Self-Employed",
    period: "Past",
    description: "Managed family business operations and provided academic tutoring. Funded personal EV purchase through independent work.",
    skills: ["Management", "Teaching", "Sales"]
  }
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