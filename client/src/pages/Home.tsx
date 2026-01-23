import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Problems } from "@/components/home/Problems";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problems />
      <ServicesPreview />
      <ProcessPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
}
