import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SelectedWork } from "@/components/about/SelectedWork";
import { SEO } from "@/components/SEO";
import { ProjectPhilosophy } from "@/components/projects/ProjectPhilosophy";
import { ProjectFAQ } from "@/components/projects/ProjectFAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Projects() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Selected Projects | Maximize Consulting"
                description="A collection of projects where I've helped teams move faster and smarter through automation, analytics, and technical strategy."
            />
            <Navbar />
            <main>
                <SelectedWork />
                <ProjectPhilosophy />
                <ProjectFAQ />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
