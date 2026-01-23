import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

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
            <div className="text-xl text-zinc-400 space-y-6 leading-relaxed">
              <p>
                We believe that small teams can outmaneuver giants if they have the right systems.
              </p>
              <p>
                Founded by engineers who were tired of seeing businesses drown in manual work and disconnected spreadsheets, Maximize Consulting brings big-tech engineering discipline to lean operations.
              </p>
              <p>
                We aren't "consultants" who leave you with a PDF and a bill. We are builders. We write the code, configure the tools, and ship the systems that give you your time back.
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden relative group">
               {/* Placeholder for Founder Image */}
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60 z-10" />
               <div className="absolute bottom-8 left-8 z-20">
                 <div className="text-white font-bold text-lg">Alex Builder</div>
                 <div className="text-indigo-400 text-sm">Founder & Lead Engineer</div>
               </div>
               
               {/* Abstract pattern placeholder */}
               <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700 font-mono text-sm">
                 [Founder Portrait]
               </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
