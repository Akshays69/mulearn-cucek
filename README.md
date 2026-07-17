# µLearn CUCEK — Official Landing Page

![µLearn CUCEK](https://mulearn.org/assets/logo.png)

> Breaking the Echo Chamber — One Learner at a Time.

## 🌐 Live Demo
Coming soon — deploy to Vercel for live URL.

## 📖 About
This is the official landing page for **µLearn CUCEK**, 
the µLearn chapter at College of Engineering Chengannur 
(CUCEK), Kerala. Built as part of the µLearn CUCEK 
Frontend Recruitment Task.

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** Custom dark/light mode

## 📁 Folder Structure
- `app/` — Next.js 14 App Router layout, pages, and global stylesheet.
- `components/` — Reusable visual UI components (Navbar, Footer, Loader, ThemeToggle, EventCard, TeamCard, etc.).
- `sections/` — Main sections of the landing page (Hero, About, Stats, InterestGroups, Events, Team).
- `constants/` — Mock dataset configurations, team lists, interest groups, and navigational items.
- `hooks/` — Custom viewport intersection and state management hooks (useCountUp).
- `types/` — TypeScript data model definitions.
- `public/` — Public static assets.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/mulearn-cucek.git

# Navigate into the project
cd mulearn-cucek

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## 📄 Sections
| Section | Description |
|---|---|
| Hero | Full screen with tagline and CTA buttons |
| About | What is µLearn with 3 value pillars |
| Stats | Animated counters (members, IGs, events) |
| Interest Groups | 8 filterable IG cards with hover effects |
| Events | 3 upcoming events with register buttons |
| Team | 6 team members with roles |
## ✨ Features
- Dark/Light mode with localStorage persistence
- Page load animation
- Scroll-triggered animations (Framer Motion)
- Interactive IG cards with hover overlay
- Animated stat counters
- Fully responsive (mobile, tablet, desktop)
- SEO optimized metadata

## 🎨 Customization

### Update Team Members
Edit `constants/index.ts` → `teamMembers` array:
```typescript
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Your Name",
    role: "Your Role",
    initials: "YN",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  // add more...
];
```

### Update Events
Edit `constants/index.ts` → `upcomingEvents` array:
```typescript
export const upcomingEvents: Event[] = [
  {
    id: 1,
    name: "Event Name",
    date: "January 1, 2026",
    mode: "Online",
    description: "Event description here.",
    registerLink: "https://your-register-link.com",
  },
  // add more...
];
```

### Add Interest Groups
Edit `constants/index.ts` → `interestGroups` array.

## 🔗 Links
- [µLearn Main Site](https://mulearn.org)
- [µLearn App](https://app.mulearn.org)
- [Interest Groups](https://mulearn.org/interest-groups)
- [Blog](https://gtechmulearn.medium.com/)

## 📬 Contact
- Email: info@mulearn.org
- LinkedIn: [gtechmulearn](https://linkedin.com/company/gtechmulearn/)
- Instagram: [@mulearn.official](https://instagram.com/mulearn.official/)

## 📝 License
Built with ❤️ by µLearn CUCEK for the 
µLearn CUCEK Frontend Recruitment Task.
