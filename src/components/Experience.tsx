import { motion, type Variants } from "framer-motion";

const sectionVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            // we’ll control timing with delays inside child variants
        },
    },
};

const headingVariants: Variants = {
    hidden: { opacity: 0, y: -24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const barVariants: Variants = {
    hidden: { opacity: 0, scaleY: 0, originY: 0 },
    show: {
        opacity: 1,
        scaleY: 1,
        originY: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.35 }, // after heading
    },
};

const timelineListVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.75, // after bar finishes
            staggerChildren: 0.16,
        },
    },
};

const entryVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

const experiences = [
    {
        period: "2025 — Present",
        role: "Software Engineer",
        company: "Confidential Startup",
        highlights: [
            "Shipped feature X used by 10k monthly users (NPS +18).",
            "Led migration to TypeScript, reducing runtime errors by 35%.",
            "Built CI/CD pipeline reducing deploy time from 10m → 2m.",
        ],
    },
    {
        period: "2024 — 2025",
        role: "Frontend Developer",
        company: "MIPS Emulator (UWM Project)",
        highlights: [
            "Designed syntax-highlighting IDE using Monaco Editor.",
            "Implemented register/memory visualization UI in React.",
            "Collaborated with 5 teammates and professor for final demo.",
        ],
    },
    {
        period: "2023 — 2024",
        role: "Full-Stack Developer",
        company: "AI Documentation Generator",
        highlights: [
            "Built code-to-docs pipeline using Node.js & Hugging Face datasets.",
            "Fine-tuned CodeLlama to auto-generate function documentation.",
            "Created report generator for onboarding teams faster.",
        ],
    },
];

export default function Experience() {
    return (
        <motion.section
            id="experience"
            className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-16 relative"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
        >
            {/* Heading drops in from top */}
            <motion.div
                className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
                variants={headingVariants}
            >
                <h2
                    className="text-3xl sm:text-4xl font-semibold tracking-tight px-5 py-2 rounded-2xl
                    bg-white/60 dark:bg-black/40 backdrop-blur-md border border-black/5
                    dark:border-white/10 shadow-sm"
                >
                    <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Experience
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-normal mt-1">
                          A Track Record of Building Things
                    </span>
                </h2>
            </motion.div>

            {/* Timeline wrapper */}
            <motion.div
                className="relative pl-10 space-y-10"
                variants={timelineListVariants} // controls when entries start + stagger
            >
                {/* Light bar: grows left → right */}
                <motion.div
                    className="absolute left-3 top-0 bottom-0 w-2 rounded-full
                    bg-gradient-to-b from-sky-400 via-purple-400 to-pink-400 opacity-70"
                    variants={barVariants}
                />

                {/* Experience entries */}
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        className="relative group"
                        variants={entryVariants}
                    >
                        {/* glowing dot */}
                        <motion.div
                            className="absolute -left-[32px] top-2 w-4 h-4 rounded-full border-[3px]
                            border-white dark:border-slate-200 bg-sky-400
                            shadow-[0_0_30px_rgba(56,189,248,1)]
                            dark:bg-pink-400 dark:shadow-[0_0_15px_rgba(247,57,222,1)]"
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        />

                        {/* card rises up */}
                        <motion.div
                            whileHover={{ y: -4, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            className="ml-6 sm:ml-8 rounded-2xl p-6 sm:p-7 bg-white/60 dark:bg-slate-900/50
                            border border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md
                            hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {exp.role}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {exp.company}
                                    </p>
                                </div>
                                <span className="px-2.5 py-1 rounded-full text-[10px] bg-gray-900 text-gray-100
                                    dark:bg-gray-100 dark:text-gray-900 uppercase tracking-[0.16em]">
                                  {exp.period}
                                </span>
                            </div>

                            <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {exp.highlights.map((point, i) => (
                                    <li key={i}>
                                        <span
                                            className="font-medium text-gray-900 dark:text-gray-100"
                                            dangerouslySetInnerHTML={{
                                                __html: point.replace(
                                                    /(\bTypeScript\b|\bfeature X\b|\bCI\/CD\b)/g,
                                                    '<span class="text-sky-500 font-semibold">$1</span>'
                                                ),
                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
