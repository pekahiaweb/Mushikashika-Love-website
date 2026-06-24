import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import CharactersSection from "@/components/CharactersSection";
import WorldSection from "@/components/WorldSection";
import TrailerSection from "@/components/TrailerSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import PressSection from "@/components/PressSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <StorySection />
      <CharactersSection />
      <WorldSection />
      <TrailerSection />
      <PressSection />
      <Footer />
    </main>
  );
}
