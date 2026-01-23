import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { XCircle, BarChart2, Link2, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: XCircle,
    title: "Manual workflows",
    description: "Your team wastes hours on repetitive tasks that scripts could handle in seconds."
  },
  {
    icon: BarChart2,
    title: "Broken analytics",
    description: "You have data, but no insights. Decisions are made on gut feeling, not facts."
  },
  {
    icon: Link2,
    title: "Disconnected tools",
    description: "Your software stack doesn't talk to each other. Information is siloed and lost."
  },
  {
    icon: Map,
    title: "No clear roadmap",
    description: "You're building features without a technical strategy or long-term vision."
  }
];

export function Problems() {
  return (
    <section className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">What's slowing you down?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Most teams hit a ceiling where manual processes break and growth stalls.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-zinc-950/50 border-white/5 hover:border-white/10 transition-colors h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 text-white">
                    <problem.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{problem.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
