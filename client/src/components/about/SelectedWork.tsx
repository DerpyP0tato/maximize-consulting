import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowUpRight,
    BarChart3,
    Activity,
    GitBranch,
    ShieldCheck,
    Mail,
    DollarSign,
    Layout,
    LucideIcon
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    icon: LucideIcon;
    stats?: { label: string; value: string }[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Marketing Analytics Library",
        category: "Analytics",
        description: "Developed a Python-based analytics library to extract and analyze website visitor behavior beyond standard GA4 reporting, with metrics tailored to company-specific decision-making needs.",
        icon: BarChart3,
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
        icon: Activity,
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
        icon: GitBranch,
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
        icon: ShieldCheck,
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
        icon: Mail,
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
        icon: DollarSign,
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
        icon: Layout,
        stats: [
            { label: "Iteration", value: "Rapid" },
            { label: "Lifecycle", value: "Design-Launch" },
        ],
    },
];

export function SelectedWork() {
    const isMobile = useIsMobile();
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className={`relative bg-zinc-950 ${isMobile ? "min-h-screen pt-32 pb-12" : "h-[300vh]"}`}>
            {/* Background Texture/Gradient */}
            <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className={isMobile ? "relative px-6" : "sticky top-0 flex h-screen items-center overflow-hidden"}>
                <motion.div style={{ x: isMobile ? 0 : x }} className={`flex gap-8 ${isMobile ? "flex-col" : "px-12 md:px-24"}`}>
                    <div className={`flex flex-col z-10 ${isMobile ? "w-full mb-12 items-center text-center" : "justify-center min-w-[300px] md:min-w-[400px] pr-12"}`}>
                        <h2 className="text-4xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                            Selected <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Work</span>
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-sm leading-relaxed">
                            A showcase of technical strategy, automation, and tooling that drove real business results.
                        </p>
                    </div>

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`group relative overflow-hidden rounded-3xl flex-shrink-0 transition-all duration-500 ${isMobile
                                ? "w-full h-auto"
                                : "h-[450px] w-[320px] md:h-[550px] md:w-[480px]"
                                }`}
                        >
                            {/* Glassmorphic Card */}
                            <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl transition-colors duration-300 group-hover:bg-zinc-900/60 group-hover:border-white/20" />

                            {/* Inner Content */}
                            <div className={`relative h-full p-8 md:p-10 flex flex-col z-10 ${isMobile ? "gap-8" : "justify-between"}`}>
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                                            <project.icon className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <span className="text-xs font-medium tracking-widest uppercase text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full bg-zinc-950/50">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors break-words hyphens-auto">
                                        {project.title}
                                    </h3>

                                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    {project.stats && (
                                        <div className="grid grid-cols-2 gap-4">
                                            {project.stats.map((stat, idx) => (
                                                <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-4 group-hover:bg-white/10 transition-colors">
                                                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Hover Glimmer */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
