import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { MessageSquare, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Intro Call",
    icon: MessageSquare,
    desc: "A 30-minute conversation to understand your current bottlenecks, tools, and business goals. No sales pitch, just a discovery chat to see if we're a fit.",
    details: ["Review current workflow", "Identify pain points", "Discuss timeline & budget"]
  },
  {
    id: "02",
    title: "Audit & Proposal",
    icon: FileText,
    desc: "We dive deep into your tech stack (if needed) and produce a detailed roadmap. You get a clear scope of work with fixed pricing.",
    details: ["Tech stack audit", "Solution architecture", "Fixed-price quote"]
  },
  {
    id: "03",
    title: "Build & Execute",
    icon: Code2,
    desc: "We get to work. Whether it's setting up a CRM, writing automation scripts, or building a dashboard, we build in the open with regular updates.",
    details: ["Weekly updates", "Iterative development", "Testing & QA"]
  },
  {
    id: "04",
    title: "Review & Optimize",
    icon: Rocket,
    desc: "We hand off the keys. We train your team on how to use the new system and provide a period of support to ensure everything runs smoothly.",
    details: ["Team training", "Documentation", "30-day support window"]
  }
];

import { SEO } from "@/components/SEO";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="How It Works - Maximize Consulting"
        description="Our transparent process: from intro call to audit, build, and optimization. We focus on shipping value efficiently."
        url="https://www.maximizeconsulting.org/how-it-works"
      />
      <Navbar />

      <main className="pt-32 pb-24 px-6 container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-white">
            Our Process
          </h1>
          <p className="text-xl text-zinc-400">
            Transparent, efficient, and focused on shipping value.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[13px] md:left-1/2 -translate-x-1/2 w-7 h-7 bg-zinc-950 border-4 border-zinc-800 rounded-full z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 pt-1 md:px-12">
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-indigo-400 shrink-0">
                      <step.icon size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-sm text-zinc-500 flex items-center gap-2">
                        <div className="w-1 h-1 bg-zinc-500 rounded-full" /> {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
