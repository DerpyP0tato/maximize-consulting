import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function Recommendations() {
    return (
        <section className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex items-center gap-2 mb-8 justify-center">
                        <Quote className="w-6 h-6 text-indigo-500" />
                        <h2 className="text-3xl font-bold text-white text-center">What People Say</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 relative">
                            <p className="text-zinc-300 italic mb-6 leading-relaxed">
                                "Max was amazing! We gave him a lot of freedom to work on some 'out-there' projects to optimize some workflows for the marketing technology team. He massively exceeded expectations, developing a google analytics tool that has the potential to save large amounts of time for teams generating marketing metrics reports. Whenever we gave him other research assignments, he completed them extremely effectively, and was able to craft comprehensive action plans and to recommend relevant resources based on the insights he gained."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                                    J
                                </div>
                                <div className="text-left">
                                    <div className="text-white font-medium">Marketing Tech Lead</div>
                                    <div className="text-zinc-500 text-sm">Marketing Technology</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 relative">
                            <p className="text-zinc-300 italic mb-6 leading-relaxed">
                                "Starting a small business was definitely difficult, but working with Maxwell made it much easier. He clearly scoped out what I needed, kept costs low, and supported me throughout the implementation. Even though my operations are very hands on, he found practical ways to add automation, such as revenue controls, which reduced manual work and improved my day to day operations."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                                    H
                                </div>
                                <div className="text-left">
                                    <div className="text-white font-medium">Small Business Owner</div>
                                    <div className="text-zinc-500 text-sm">Skin Care Company</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 relative">
                            <p className="text-zinc-300 italic mb-6 leading-relaxed">
                                "Max was outstanding [and] tackled automation tasks with impressive efficiency and creativity. He quickly grasped our technical strategy needs and delivered a solution with clean and robust code that enhanced our workflow. His dedication and quick learning make him a promising talent in automation—highly recommended for future projects!"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                                    I
                                </div>
                                <div className="text-left">
                                    <div className="text-white font-medium">Co-Founder</div>
                                    <div className="text-zinc-500 text-sm">Iobyte Solutions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
