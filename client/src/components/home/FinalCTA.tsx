import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8">
          Want a clearer system<br />by next week?
        </h2>
        <Link href="/contact">
          <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-black hover:bg-zinc-200 hover:scale-105 transition-all shadow-xl">
            Book a Free Call
          </Button>
        </Link>
      </div>
    </section>
  );
}
