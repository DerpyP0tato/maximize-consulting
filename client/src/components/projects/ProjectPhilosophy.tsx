import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Lock, Zap, Repeat } from "lucide-react";

const principles = [
    {
        icon: Lock,
        title: "You Own It All",
        desc: "No vendor lock-in. You get the full source code, IP, and documentation. We build in your environment so you stay in control."
    },
    {
        icon: Repeat,
        title: "Built for Humans",
        desc: "We write clean, documented code that your team can actually read and maintain. No obscure frameworks or spaghetti logic."
    },
    {
        icon: Zap,
        title: "Future-Proof",
        desc: "We use standard, widely-supported tools. If you need to hire another developer later, they'll know exactly how to jump in."
    }
];

export function ProjectPhilosophy() {
    return (
        <section className="py-24 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        Engineering Principles
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We don't just build for launch day. We build systems designed to live, grow, and scale with your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {principles.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/40 hover:border-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
