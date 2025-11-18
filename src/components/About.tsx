import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 12,
        clipPath: "inset(0 100% 0 0)", // fully masked from the right
    },
    show: {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0% 0 0)",  // reveal full card
        transition: {
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],     // nice “hero section” ease
        },
    },
};

export default function About() {
    return (
        <motion.section
            id="about"
            className="relative overflow-hidden rounded-3xl max-w-6xl
            mx-4 sm:mx-10 lg:mx-auto
            mt-8 sm:mb-8 lg:mb-[46px]
            px-6 py-10 sm:py-14 lg:py-10
            bg-gradient-to-br from-cyan-100 via-white to-white
            dark:from-sky-900/40 dark:via-slate-950 dark:to-slate-950"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6, margin: "0px 0px -20% 0px" }}
        >
            {/* heading gets a tiny float + fade */}
            <motion.h2
                className="text-3xl sm:text-4xl font-semibold mb-10 tracking-tight"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, ease: "easeOut" }}
            >
                <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  About Me
                </span>
            </motion.h2>

            <div className="grid md:grid-cols-[2fr_1fr] gap-6">
                {/* BIO CARD */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -10 }}
                    className="rounded-2xl border border-black/5 dark:border-white/10
                    bg-white/60 dark:bg-slate-900/50
                    backdrop-blur-md shadow-sm p-6 sm:p-8"
                >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3">
                        Bio
                    </p>

                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm sm:text-base max-w-prose">
                        Software developer with a focus on front-end architecture and developer experience.
                        I enjoy building{" "}
                        <span className="font-semibold text-sky-500">delightful, accessible UIs</span> and
                        <span className="font-semibold text-purple-400"> stable APIs</span> that empower people to
                        create and scale products faster.
                    </p>

                    <p className="mt-4 text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                        I’m currently exploring how{" "}
                        <span className="text-sky-400 font-semibold">AI-assisted tools</span> can improve developer
                        workflows — from code documentation to smart debugging — and I love collaborating on projects
                        that bridge creativity and engineering.
                    </p>
                </motion.div>

                {/* FAST FACTS CARD */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-black/5 dark:border-white/10
                    bg-gradient-to-br from-sky-100/70 to-white/30 dark:from-sky-900/40 dark:to-slate-900/30
                    backdrop-blur-md shadow-sm p-6 sm:p-8"
                >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3">
                        Fast Facts
                    </p>
                    <ul className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        <li className="flex gap-1">
                            <span className="font-medium text-gray-900 dark:text-white">Location:</span>
                            <span>Remote-friendly (U.S. Central)</span>
                        </li>
                        <li className="flex gap-1">
                            <span className="font-medium text-gray-900 dark:text-white">Open to:</span>
                            <span>Full-Time, Contract</span>
                        </li>
                        <li className="flex gap-1">
                            <span className="font-medium text-gray-900 dark:text-white">Interests:</span>
                            <span>DevTools, Web Performance, AI, Design Systems</span>
                        </li>
                    </ul>

                    <div className="mt-5 text-[11px] text-gray-500 dark:text-gray-400">
                        ⚡ Always learning. Always shipping.
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
