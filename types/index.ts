export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  id: number;
  icon: string;
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

export interface InterestGroup {
  id: number;
  icon: string;
  name: string;
  description: string;
  category: "Tech" | "Design" | "Business" | "AI & Data";
  membersCount?: number;
  karmaReward?: string;
  topics?: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  linkedin: string;
  github?: string;
}

export interface Event {
  id: number;
  name: string;
  date: string;
  mode: "Online" | "Offline" | "Hybrid";
  description: string;
  registerLink: string;
  karmaPoints?: number;
  status?: "Upcoming" | "Live" | "Completed";
  location?: string;
}
