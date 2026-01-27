import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import heroBg from "@/assets/hero-bg.png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract geometric background representing structure and flow"
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
          width="1920"
          height="1080"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-zinc-300 mb-4">
            Maximize Consulting
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold font-heading tracking-tight leading-tight text-white drop-shadow-lg">
            Automate the busywork.<br />
            Measure what matters.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
              Move faster.
            </span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We help ambitious organizations streamline operations through automation, analytics, and technical strategy.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Book a Free Call
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10 text-white backdrop-blur-sm group">
                View Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
