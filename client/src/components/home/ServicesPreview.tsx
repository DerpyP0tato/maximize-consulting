import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Cpu, LineChart, Compass } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Cpu,
    title: "Automation & Internal Tools",
    description: "We build custom scripts, integrations, and internal apps to eliminate manual busywork and save your team hundreds of hours."
  },
  {
    icon: LineChart,
    title: "Analytics & Marketing Tech",
    description: "We set up tracking, build dashboards, and implement attribution models so you can see exactly what's working."
  },
  {
    icon: Compass,
    title: "Technical Strategy & Advisory",
    description: "We act as your fractional CTO, helping you choose the right tools, hire technical talent, and plan your roadmap."
  }
];

export function ServicesPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
              Systems for scale.
            </h2>
            <p className="text-xl text-zinc-400">
              We don't just give advice. We build the infrastructure you need to grow.
            </p>
          </div>
          <Link href="/services">
            <a className="text-white border-b border-white pb-1 hover:opacity-70 transition-opacity">View all services</a>
          </Link>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all backdrop-blur-sm"
            >
              <service.icon className="w-12 h-12 text-white mb-6 group-hover:text-indigo-400 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
