import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Stats from "@/sections/Stats";
import InterestGroups from "@/sections/InterestGroups";
import Events from "@/sections/Events";
import Team from "@/sections/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <InterestGroups />
      <Events />
      <Team />
      <Footer />
    </main>
  );
}
