import { NavLink, Stat, InterestGroup, TeamMember, Event } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stats", href: "#stats" },
  { label: "Interest Groups", href: "#interest-groups" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { id: 1, icon: "👥", value: 60000, suffix: "+", label: "Members" },
  { id: 2, icon: "🧩", value: 15, suffix: "+", label: "Interest Groups" },
  { id: 3, icon: "🎉", value: 100, suffix: "+", label: "Events" },
  { id: 4, icon: "🏆", value: 10, suffix: "+", label: "National Rank" },
  { id: 5, icon: "⚡", value: 5000, suffix: "+", label: "Karma Points" },
];

export const interestGroups: InterestGroup[] = [
  { id: 1, icon: "🎨", name: "UI/UX Design", description: "Design beautiful, user-friendly experiences", category: "Design" },
  { id: 2, icon: "💻", name: "Web Development", description: "Build the web, shape the world", category: "Tech" },
  { id: 3, icon: "🔐", name: "Cybersecurity", description: "Secure the digital frontier", category: "Tech" },
  { id: 4, icon: "🎮", name: "Game Development", description: "Create immersive gaming experiences", category: "Tech" },
  { id: 5, icon: "🤖", name: "IoT & Robotics", description: "Connect the world, automate the future", category: "Tech" },
  { id: 6, icon: "📣", name: "Digital Marketing", description: "Grow brands in the digital age", category: "Business" },
  { id: 7, icon: "☁️", name: "Cloud & DevOps", description: "Deploy, scale, and automate", category: "Tech" },
  { id: 8, icon: "📦", name: "Product Management", description: "Build products people love", category: "Business" },
];

export const teamMembers: TeamMember[] = [
  { id: 1, name: "Alex K", role: "Campus Lead", initials: "AK", linkedin: "https://linkedin.com" },
  { id: 2, name: "Priya R", role: "Technical Lead", initials: "PR", linkedin: "https://linkedin.com" },
  { id: 3, name: "Rahul M", role: "Design Lead", initials: "RM", linkedin: "https://linkedin.com" },
  { id: 4, name: "Sneha T", role: "Events Lead", initials: "ST", linkedin: "https://linkedin.com" },
  { id: 5, name: "Arjun S", role: "Marketing Lead", initials: "AS", linkedin: "https://linkedin.com" },
  { id: 6, name: "Meera N", role: "Content Lead", initials: "MN", linkedin: "https://linkedin.com" },
];

export const upcomingEvents: Event[] = [
  {
    id: 1,
    name: "MuHack 2025",
    date: "August 15, 2025",
    mode: "Offline",
    description: "A 24-hour hackathon where students build innovative solutions to real-world problems.",
    registerLink: "https://mulearn.org/events",
  },
  {
    id: 2,
    name: "Launchpad Workshop",
    date: "September 5, 2025",
    mode: "Online",
    description: "A hands-on workshop to help you kickstart your journey in tech and entrepreneurship.",
    registerLink: "https://mulearn.org/events",
  },
  {
    id: 3,
    name: "Top 100 Coders",
    date: "October 10, 2025",
    mode: "Online",
    description: "A competitive coding challenge to find and celebrate Kerala's top 100 young coders.",
    registerLink: "https://mulearn.org/events",
  },
];
