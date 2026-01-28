import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function ProjectFAQ() {
    return (
        <section className="py-24 bg-zinc-900/20">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold font-heading text-white mb-12 text-center">
                        Common Questions
                    </h2>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-indigo-400 hover:no-underline text-lg">
                                How long does a typical project take?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400 text-base leading-relaxed">
                                Most automation and internal tool projects are scoped to be delivered in 2-4 weeks. Larger custom software builds usually run 6-10 weeks. We prefer iterative sprints so you see value quickly.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-indigo-400 hover:no-underline text-lg">
                                Do you provide support after handover?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400 text-base leading-relaxed">
                                Yes. Every project includes a 30-day warranty period where bugs are fixed for free. After that, we offer lightweight retainer packages for ongoing maintenance and small updates.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-indigo-400 hover:no-underline text-lg">
                                Who owns the code?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400 text-base leading-relaxed">
                                You do. 100%. We believe you should always control your own infrastructure. We hand over all repositories, credentials, and documentation upon completion.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-indigo-400 hover:no-underline text-lg">
                                What tech stack do you use?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400 text-base leading-relaxed">
                                We stick to industry standards: Python for automation, React/TypeScript for web apps, and SQL databases. We avoid proprietary "no-code" platforms that lock you in, unless specifically requested for a prototype.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
