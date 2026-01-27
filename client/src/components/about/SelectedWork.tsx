import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    stats?: { label: string; value: string }[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Marketing Analytics Library",
        category: "Analytics",
        description: "Developed a Python-based analytics library to extract and analyze website visitor behavior beyond standard GA4 reporting, with metrics tailored to company-specific decision-making needs.",
        stats: [
            { label: "Time Saved", value: "15+ hrs/mo" },
            { label: "Metrics", value: "Tailored" },
        ],
    },
    {
        id: 2,
        title: "Website Monitor Tool",
        category: "Internal Tooling",
        description: "Built a custom uptime and audit monitoring system covering performance, accessibility, and SEO. The tool replicated core enterprise features and enabled the decommissioning of a six-figure annual software platform.",
        stats: [
            { label: "Saved", value: "$100K+/yr" },
            { label: "Design", value: "Lean System" },
        ],
    },
    {
        id: 3,
        title: "Data Pipeline Automation",
        category: "Automation",
        description: "Created an automated, Selenium-based data pipeline that connected Amazon marketplace data directly into the company’s analytics platform, eliminating manual extraction and reporting workflows.",
        stats: [
            { label: "Time Saved", value: "15+ hrs/wk" },
            { label: "Integration", value: "End-to-End" },
        ],
    },
    {
        id: 4,
        title: "Data Scrubbing & Compliance",
        category: "Automation",
        description: "Built a Python-based system to automatically scrub, standardize, and validate customer lead data in line with business requirements and compliance standards, replacing a team-wide manual process.",
        stats: [
            { label: "Time Saved", value: "150+ hrs/wk" },
            { label: "Quality", value: "Automated" },
        ],
    },
    {
        id: 5,
        title: "Email Marketing Tooling",
        category: "Internal Tooling",
        description: "Developed a lightweight internal email system that enabled fully branded marketing campaigns without reliance on recurring third-party email marketing platforms.",
        stats: [
            { label: "Saved", value: "$45/mo" },
            { label: "Fees", value: "$0/mo" },
        ],
    },
    {
        id: 6,
        title: "Revenue Reconciliation",
        category: "Internal Tooling",
        description: "Created an internal application that reconciled booking and promotion data across platforms to identify discrepancies and surface previously missed revenue.",
        stats: [
            { label: "Recovered", value: "$1,500+" },
            { label: "Integration", value: "Cross-Platform" },
        ],
    },
    {
        id: 7,
        title: "Website Design & Prototyping",
        category: "Design",
        description: "Designed and prototyped marketing websites in Figma and supported deployment and ongoing management on Squarespace for non-technical teams.",
        stats: [
            { label: "Iteration", value: "Rapid" },
            { label: "Lifecycle", value: "Design-Launch" },
        ],
    },
];
export function SelectedWork() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-zinc-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24">
                    <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px] pr-12">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
                            Selected <br />
                            <span className="text-zinc-500">Work</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-sm">
                            A collection of projects where I've helped teams move faster and smarter.
                        </p>
                    </div>

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative group h-[400px] w-[300px] md:h-[500px] md:w-[450px] overflow-hidden bg-zinc-900 border border-white/10 rounded-3xl flex-shrink-0 p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-indigo-400 text-sm font-medium tracking-wide border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 leading-relaxed mb-8">
                                    {project.description}
                                </p>
                            </div>

                            {project.stats && (
                                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
                                    {project.stats.map((stat, idx) => (
                                        <div key={idx}>
                                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                            <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
