import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-white">
              About Maximize
            </h1>
            <div className="text-lg text-zinc-400 space-y-4 leading-relaxed">
              <p>
                Maximize Consulting helps early-stage teams move faster by removing operational friction.
              </p>
              <p>
                We specialize in automation, analytics, and lightweight internal tools—building practical systems that save time and support better decisions. Our work focuses on solving real problems: connecting tools, setting up reliable tracking, and guiding technical decisions.
              </p>
              <p>
                We don’t over-engineer. We work hands-on, ship quickly, and design systems that fit how teams operate—so they’re easy to maintain.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-white font-bold mb-4">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-indigo-400 font-medium mb-1">Execution First</h4>
                  <p className="text-sm text-zinc-500">Theory is cheap. We value working systems.</p>
                </div>
                <div>
                  <h4 className="text-indigo-400 font-medium mb-1">No Fluff</h4>
                  <p className="text-sm text-zinc-500">Clear communication. Honest timelines.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-white font-bold mb-4">About Maxwell</h3>
              <div className="text-lg text-zinc-400 space-y-4 leading-relaxed">
                <p>
                  I’m Maxwell Chan, a builder and consultant focused on helping early-stage teams use technology more effectively.
                </p>
                <p>
                  My background sits at the intersection of business and engineering, where I’ve worked on automation, analytics, and internal tools that eliminate manual work and make data easier to understand and act on. I’ve supported startups, student organizations, and small teams by connecting disconnected systems, setting up reliable analytics, and guiding technical decisions that actually fit their scale and resources.
                </p>
                <p>
                  I care less about flashy tech and more about practical solutions—systems that are simple, maintainable, and designed around how people already work. Whether I’m building an automation, cleaning up analytics, or advising on a technical roadmap, my goal is always the same: help teams move faster without unnecessary complexity.
                </p>
                <p>
                  Outside of consulting, I study business and computer science and stay hands-on with the tools I recommend, so my advice is always grounded in real implementation—not theory.
                </p>
              </div>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-sm ml-auto sticky top-32"
          >
            <div className="aspect-[3/4] rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden relative group">
              {/* Placeholder for Founder Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 z-10" />
              <div className="absolute bottom-8 left-8 z-20">
                <div className="text-white font-bold text-lg">Maxwell Chan</div>
                <div className="text-indigo-400 text-sm mb-2">Founder & Lead Engineer</div>
                <a
                  href="https://www.linkedin.com/in/maxwellchan1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              <img
                src="/profile.jpg"
                alt="Maxwell Chan"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
