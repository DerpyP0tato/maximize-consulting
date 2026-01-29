import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Intro Call",
    desc: "We discuss your bottlenecks and goals."
  },
  {
    number: "02",
    title: "Audit & Proposal",
    desc: "We analyze your stack and map out a solution."
  },
  {
    number: "03",
    title: "Build & Execute",
    desc: "We build the automations and dashboards."
  },
  {
    number: "04",
    title: "Review & Optimize",
    desc: "We train your team and refine the system."
  }
];

export function ProcessPreview() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">How it works</h2>
          <p className="text-zinc-400">From chaos to clarity in four steps.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeIn} className="relative pt-8 md:text-center">
              {/* Dot */}
              <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-white rounded-full z-10" />

              <div className="text-4xl font-bold text-white/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
