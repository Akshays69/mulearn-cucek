import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mulearncucek.in"),
  title: "µLearn CUCEK | Break the Echo Chamber",
  description:
    "µLearn CUCEK is the official µLearn chapter at Cochin University College of Engineering Kuttanad. Join a synergic community of learners, explore interest groups, and unlock real-world opportunities.",
  keywords: ["mulearn", "CUCEK", "Cochin University", "Kuttanad", "Kerala", "tech community", "interest groups", "students"],
  openGraph: {
    title: "µLearn CUCEK | Break the Echo Chamber",
    description:
      "Join µLearn CUCEK — a synergic community of learners at Cochin University College of Engineering Kuttanad.",
    url: "https://mulearncucek.in",
    siteName: "µLearn CUCEK",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
