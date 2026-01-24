import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Check, Bot, BarChart3, Compass, Code } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Services | Automation, Analytics & Web Development"
        description="Maximize Consulting offers automation, analytics, technical strategy, and web development services. We build practical systems that save time and support better decisions."
      />
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

        <div className="grid gap-12">
          {/* Automation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Card className="bg-zinc-900/50 border-white/5 overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <CardHeader className="p-8 pb-0">
                <div className="mb-6 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/20 transition-all">
                  <Bot className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Automation & Internal Tools</h2>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <p className="text-zinc-400 mb-8 text-lg max-w-2xl">
                  Eliminate manual data entry and connect your tools. We build custom scripts and internal apps that save your team hundreds of hours per year.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Custom workflows to automate repetitive operations",
                    "API-based automations between disconnected tools",
                    "Internal scripts for data syncing, cleanup, and reporting",
                    "Lightweight internal tools and dashboards for team use"
                  ].map((item, i) => (
                    <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-zinc-300">
                      <Check className="text-indigo-500 w-5 h-5 flex-shrink-0" /> <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Analytics */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Card className="bg-zinc-900/50 border-white/5 overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <CardHeader className="p-8 pb-0">
                <div className="mb-6 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/20 transition-all">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Analytics & Marketing Tech</h2>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <p className="text-zinc-400 mb-8 text-lg max-w-2xl">
                  Stop guessing. We implement tracking and build clear dashboards so you can see exactly how your business is performing.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Google Analytics 4 setup and event tracking",
                    "Conversion tracking and funnel analysis",
                    "Custom KPI dashboards",
                    "Analytics cleanup and documentation for reliable reporting"
                  ].map((item, i) => (
                    <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-zinc-300">
                      <Check className="text-indigo-500 w-5 h-5 flex-shrink-0" /> <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Strategy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Card className="bg-zinc-900/50 border-white/5 overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <CardHeader className="p-8 pb-0">
                <div className="mb-6 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/20 transition-all">
                  <Compass className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Technical Strategy & Advisory</h2>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <p className="text-zinc-400 mb-8 text-lg max-w-2xl">
                  Need a CTO but not ready for the salary? We act as your technical partner to guide key decisions and prevent costly mistakes.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Tool and software stack recommendations for early-stage teams",
                    "Build vs buy guidance for internal tools and automations",
                    "Technical scoping for MVPs and internal systems",
                    "Ongoing technical support for non-technical founders"
                  ].map((item, i) => (
                    <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-zinc-300">
                      <Check className="text-indigo-500 w-5 h-5 flex-shrink-0" /> <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Web & Product Engineering */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Card className="bg-zinc-900/50 border-white/5 overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <CardHeader className="p-8 pb-0">
                <div className="mb-6 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/20 transition-all">
                  <Code className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Web & Product Engineering</h2>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <p className="text-zinc-400 mb-8 text-lg max-w-2xl">
                  We build high-quality web applications and MVPs. From landing pages to complex SaaS platforms, we ship clean, maintainable code.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Modern web applications",
                    "Rapid MVP development for startups",
                    "Product engineering and technical scoping",
                    "Performance optimization and SEO"
                  ].map((item, i) => (
                    <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-zinc-300">
                      <Check className="text-indigo-500 w-5 h-5 flex-shrink-0" /> <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>


      </main>

      <Footer />
    </div>
  );
}
