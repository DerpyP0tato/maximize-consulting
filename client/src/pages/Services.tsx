import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 container mx-auto">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeIn}
          className="max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-white">
            Services
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mb-8" />
          <p className="text-xl text-zinc-400 leading-relaxed">
            We don't sell hours. We sell outcomes. Whether you need a specific automation built or a full technical strategy, we deliver systems that work.
          </p>
        </motion.div>

        <div className="grid gap-24">
          {/* Automation */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Automation & Internal Tools</h2>
              <p className="text-zinc-400 mb-8 text-lg">
                Eliminate manual data entry and connect your tools. We build custom scripts and internal apps that save your team hundreds of hours per year.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom Zapier/Make.com workflows",
                  "API integrations between disconnected tools",
                  "Automated reporting and notifications",
                  "Custom internal dashboards"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-zinc-300">
                    <Check className="text-indigo-500 w-5 h-5" /> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 h-full min-h-[300px] flex items-center justify-center">
              <div className="text-zinc-600 font-mono text-sm">
                // Automation Workflow Visualization
                <br/>
                Trigger: New Sale → Slack Alert → CRM Update → Email Sequence
              </div>
            </div>
          </section>

          {/* Analytics */}
          <section className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 h-full min-h-[300px] flex items-center justify-center md:col-start-1">
               <div className="text-zinc-600 font-mono text-sm">
                // Analytics Dashboard Mockup
                <br/>
                [ Chart Placeholder ]
              </div>
            </div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="md:col-start-2"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Analytics & Marketing Tech</h2>
              <p className="text-zinc-400 mb-8 text-lg">
                Stop guessing. We implement tracking and build clear dashboards so you can see exactly how your business is performing.
              </p>
              <ul className="space-y-4">
                {[
                  "Google Analytics 4 / Mixpanel setup",
                  "Conversion tracking and attribution",
                  "Live KPI dashboards (Looker Studio / Tableau)",
                  "Customer data platform (CDP) implementation"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-zinc-300">
                    <Check className="text-indigo-500 w-5 h-5" /> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </section>

          {/* Strategy */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Technical Strategy & Advisory</h2>
              <p className="text-zinc-400 mb-8 text-lg">
                Need a CTO but not ready for the salary? We act as your technical partner to guide key decisions and prevent costly mistakes.
              </p>
              <ul className="space-y-4">
                {[
                  "Software stack audit and selection",
                  "Technical hiring support and vetting",
                  "Product roadmap planning",
                  "Security and compliance review"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-zinc-300">
                    <Check className="text-indigo-500 w-5 h-5" /> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
             <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 h-full min-h-[300px] flex items-center justify-center">
              <div className="text-zinc-600 font-mono text-sm">
                // Roadmap Strategy Map
                <br/>
                Q1: Foundation → Q2: Growth → Q3: Scale
              </div>
            </div>
          </section>
        </div>

        <section className="mt-32 pt-16 border-t border-white/5">
          <h3 className="text-2xl font-bold text-white mb-8">Who this is NOT for</h3>
          <div className="grid md:grid-cols-3 gap-6 opacity-70">
            <div className="p-6 bg-zinc-900/30 rounded-lg border border-white/5">
              <h4 className="font-semibold text-white mb-2">Seekers of "Quick Fixes"</h4>
              <p className="text-zinc-400 text-sm">Real systems take thought to build. We don't do band-aid solutions.</p>
            </div>
            <div className="p-6 bg-zinc-900/30 rounded-lg border border-white/5">
              <h4 className="font-semibold text-white mb-2">Micromanagers</h4>
              <p className="text-zinc-400 text-sm">We work best when trusted to execute on the strategy we agree upon.</p>
            </div>
            <div className="p-6 bg-zinc-900/30 rounded-lg border border-white/5">
              <h4 className="font-semibold text-white mb-2">Zero Budget Projects</h4>
              <p className="text-zinc-400 text-sm">Premium results require investment in tools and expertise.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
