import { motion, type Variants } from "framer-motion";
import {stagger} from "motion";

const sectionVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 ,
        transition: { duration: 1.6, ease: "easeOut" }
    },
};

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            delayChildren: stagger(.8)
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1},
};

const barVariants: Variants = {
    hidden: { width: 0 },
    show: (targetWidth: string) => ({
        width: targetWidth,
        transition: { duration: 1.6, ease: "easeOut" },
    }),
};

const sections = [
    {
        title: "Frontend",
        label: "UI / Client",
        skills: [
            { name: "React", level: "Advanced" },
            { name: "TypeScript", level: "Advanced" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "Next.js", level: "Intermediate" },
        ],
    },
    {
        title: "Backend",
        label: "APIs / Data",
        skills: [
            { name: "Node.js", level: "Advanced" },
            { name: "mySQL", level: "Intermediate" },
            { name: "Supabase", level: "Intermediate" },
            { name: "REST API Design", level: "Intermediate" },
        ],
    },
    {
        title: "Leveling Up",
        label: "Learning",
        skills: [
            { name: "React Native", level: "Intermediate" },
            { name: "AI / Machine Learning", level: "Learning" },
            { name: "Database Design", level: "Learning" },
            { name: "Express.js", level: "Learning" },
        ],
    },
];

const levelColor = (level: string) => {
    switch (level) {
        case "Advanced":
            return "bg-emerald-500/90";
        case "Intermediate":
            return "bg-sky-500/90";
        default:
            return "bg-gray-400/90";
    }
};

export default function SkillsToolbox() {
    return (
        <motion.section
            id="skills"
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
            {/* Heading */}
            <motion.div
                className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.95 }}
            >
                <h2
                    className="text-3xl sm:text-4xl font-semibold tracking-tight px-5 py-2 rounded-2xl
                    bg-white/60 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm
                    text-gray-900 dark:text-white"
                >
                    <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Skills &amp; Toolbox
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-normal mt-1">
                        A focused stack for building fast, reliable web apps from UI to
                        deployment.
                    </span>
                </h2>
            </motion.div>

            {/* Cards */}
            <motion.div
                className="grid gap-6 md:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
            >
                {sections.map((section) => (
                    <motion.div
                        key={section.title}
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        // transition={{type: "tween", stiffness: 100, damping: 10 }}
                        className="group relative overflow-hidden rounded-2xl border border-black/5
                        dark:border-white/5 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-sm hover:shadow-xl
                        "
                    >
                        {/*/!* subtle gradient accent *!/*/}
                        <div className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-white/40 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="p-6 flex flex-col gap-4">
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500">
                                        {section.label}
                                    </div>
                                    <h3 className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                                        {section.title}
                                    </h3>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="px-2.5 py-1 rounded-full text-[10px] bg-gray-900 text-gray-100
                                    dark:bg-gray-100 dark:text-gray-900 uppercase tracking-[0.16em]"
                                >
                                    Core Stack
                                </motion.div>
                            </div>

                            <ul className="space-y-2.5">
                                {section.skills.map((skill) => {
                                    const width =
                                        skill.level === "Advanced"
                                            ? "90%"
                                            : skill.level === "Intermediate"
                                                ? "65%"
                                                : "40%";

                                    return (
                                        <li
                                            key={skill.name}
                                            className="flex items-center justify-between gap-3 text-sm"
                                        >
                                          <span className="text-gray-800 dark:text-gray-100">
                                            {skill.name}
                                          </span>

                                            {/* Level pill + mini bar */}
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] uppercase tracking-wide text-gray-500">
                                                  {skill.level}
                                                </span>
                                                <div className="w-14 h-1.5 bg-gray-200/70 dark:bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className={`h-full rounded-full ${levelColor(
                                                            skill.level
                                                        )}`}
                                                        variants={barVariants}
                                                        custom={width}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
