import { motion, type Variants } from "framer-motion";
import {stagger} from "motion";

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            when: "beforeChildren",
            delayChildren: stagger(.15)
        },
    },
};

const tileVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

export default function About() {
    return (
        <motion.section
            id="about"
            className="relative overflow-hidden rounded-3xl max-w-6xl
                 mx-4 sm:mx-10 lg:mx-auto
                 mt-8 sm:mb-8 lg:mb-[46px]
                 px-6 py-10 sm:py-14 lg:py-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4, margin: '0px 0px -20% 0px' }}
        >
            {/* Heading */}
            <motion.h2
                variants={tileVariants}
                className="relative text-3xl sm:text-4xl font-semibold mb-8 tracking-tight"
            >
                <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  About Me
                </span>
            </motion.h2>

            {/* Tile board */}
            <div className="relative grid gap-4 sm:gap-5 md:grid-cols-3 z-10">
                {/* Tile 1 – Role */}
                <motion.div
                    variants={tileVariants}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-black/5 dark:border-white/10
                     bg-white/70 dark:bg-slate-950/70
                     backdrop-blur-md shadow-sm px-5 py-4 flex flex-col justify-between"
                >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-2">
                        Role
                    </p>
                    <p className="text-sm sm:text-base text-gray-900 dark:text-gray-50 font-medium">
                        Software Developer
                    </p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Front-end architecture · DX · AI tooling
                    </p>
                </motion.div>

                {/* Tile 2 – Location */}
                <motion.div
                    variants={tileVariants}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-black/5 dark:border-white/10
                     bg-white/40 dark:bg-slate-900/60
                     backdrop-blur-md shadow-sm px-5 py-4 flex flex-col justify-between"
                >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-2">
                        Location
                    </p>
                    <p className="text-sm sm:text-base text-gray-900 dark:text-gray-50">
                        Remote-friendly (U.S. Central)
                    </p>
                </motion.div>

                {/* Tile 3 – Open To */}
                <motion.div
                    variants={tileVariants}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-black/5 dark:border-white/10
                     bg-gradient-to-br from-sky-100/70 to-white/30
                     dark:from-sky-900/50 dark:to-slate-900/40
                     backdrop-blur-md shadow-sm px-5 py-4 flex flex-col justify-between"
                >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-2">
                        Open To
                    </p>
                    <p className="text-sm sm:text-base text-gray-900 dark:text-gray-50">
                        Full-Time · Contract
                    </p>
                    <p className="mt-1 text-[11px] text-gray-600 dark:text-gray-300">
                        ⚡ Always learning. Always shipping.
                    </p>
                </motion.div>

                {/* Tile 4 – Bio */}
                <motion.div
                    variants={tileVariants}
                    whileHover={{ y: -4 }}
                    className="md:col-span-2 rounded-2xl border border-black/5 dark:border-white/10
                     bg-white/60 dark:bg-slate-950/80
                     backdrop-blur-xl shadow-sm px-5 sm:px-7 py-5 sm:py-6"
                >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-3">
                        Bio
                    </p>
                    <p className="text-gray-800 dark:text-gray-100 leading-relaxed text-sm sm:text-base max-w-2xl">
                        Software developer with a focus on front-end architecture and developer
                        experience. I enjoy building{" "}
                        <span className="font-semibold text-sky-500">delightful, accessible UIs</span>
                        {" "}
                        and
                        <span className="font-semibold text-purple-400"> stable APIs</span> that empower people to scale products faster.
                    </p>
                    <p className="mt-4 text-gray-700 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                        I’m currently exploring how{" "}
                        <span className="text-sky-400 font-semibold">AI-assisted tools</span> can improve developer workflows.
                    </p>
                </motion.div>

                {/* Tile 5 – Interests */}
                <motion.div
                    variants={tileVariants}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-black/5 dark:border-white/10
                     bg-white/50 dark:bg-slate-950/70
                     backdrop-blur-md shadow-sm px-5 sm:px-6 py-5 flex flex-col"
                >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-3">
                        Interests
                    </p>
                    <ul className="space-y-1.5 text-sm text-gray-800 dark:text-gray-100">
                        <li>DevTools & developer experience</li>
                        <li>Web performance & scalability</li>
                        <li>AI-assisted development workflows</li>
                        <li>Design systems & UX patterns</li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
}
