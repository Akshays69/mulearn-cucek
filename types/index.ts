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
}

export interface InterestGroup {
  id: number;
  icon: string;
  name: string;
  description: string;
  category: "Tech" | "Design" | "Business";
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  linkedin: string;
}

export interface Event {
  id: number;
  name: string;
  date: string;
  mode: "Online" | "Offline";
  description: string;
  registerLink: string;
}
