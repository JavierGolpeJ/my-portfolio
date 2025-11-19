import { motion, type Variants } from "framer-motion";
// ^ you can import Variants from framer-motion directly

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.6, ease: "easeOut" },
    },
};

const container: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.45,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
};


export default function Hero() {
    return (
        <motion.section
            id="home"
            className="relative overflow-hidden rounded-3xl max-w-6xl mx-4 sm:mx-10 lg:mx-auto mt-[65px] sm:mb-8
            px-6 py-10 sm:py-14 lg:py-16 border border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-md
            shadow-sm"
            variants={sectionVariants}
            initial="hidden"
            animate="show"
        >
            <motion.div
                variants={container}
                className="relative grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,1.2fr)] items-center"
            >
                {/* Left: Copy */}
                <div>
                    <motion.div
                        variants={item}
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gray-500 mb-3"
                    >
                        <span className="h-[1px] w-6 bg-gray-400/60" />
                        Javier Golpe Juarez • Software Engineer
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight
            bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
                    >
                        Software Engineer crafting reliable,
                        <span className="block">scalable web apps.</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="mt-5 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl"
                    >
                        I design and build full-stack experiences with React, TypeScript, Node.js,
                        PostgreSQL, and cloud services — with a focus on performance, DX, and
                        clean architecture.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="mt-4 flex flex-wrap gap-3 text-[11px] text-gray-500 dark:text-gray-400"
                    >
                        <div className="px-3 py-1 rounded-full bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10">
                            3+ production-ready projects
                        </div>
                        <div className="px-3 py-1 rounded-full bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10">
                            React • TypeScript • SQL
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Available for work
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={item}
                        className="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <motion.a
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 250, damping: 18 }}
                            href="#projects"
                            className="px-6 py-3 rounded-2xl bg-gray-900 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all"
                        >
                            View Projects
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 250, damping: 18 }}
                            href="#contact"
                            className="px-6 py-3 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm text-gray-900 dark:text-gray-100 font-medium backdrop-blur hover:bg-white hover:dark:bg-white/10 transition-all"
                        >
                            Contact Me
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 250, damping: 18 }}
                            href="/Javier-Golpe-Juarez-Resume.pdf"
                            className="px-6 py-3 rounded-2xl border border-gray-300/90 dark:border-gray-600/80 text-sm text-gray-800 dark:text-gray-100 font-medium hover:bg-gray-900 hover:text-white transition-all"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="mt-5 text-[10px] text-gray-500 dark:text-gray-500"
                    >
                        Previously built tools for real-estate, developer tooling, and security
                        projects at UWM.
                    </motion.div>
                </div>

                {/* Right: Mock app card */}
                <motion.div
                    variants={item}
                    className="relative"
                >
                    <div className="absolute -top-6 -right-3 h-16 w-16 rounded-2xl" />

                    <div className="relative rounded-3xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 shadow-xl backdrop-blur-md p-4 sm:p-5">
                        {/* window header */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                                <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                            </div>
                            <span className="text-[10px] text-gray-500 dark:text-gray-400">
                app.tsx
              </span>
                        </div>

                        {/* fake code */}
                        <div className="rounded-2xl bg-[#F2F4F3] dark:bg-zinc-950 text-[10px] leading-relaxed text-zinc-200 p-3 font-mono">
                            <div className="text-zinc-500 mb-1">// Next.js + React + TS</div>
                            <div>
                                <span className="text-sky-400">export const</span>{" "}
                                <span className="text-emerald-300">stack</span>{" "}
                                <span className="text-sky-400">=</span>{" "}
                                <span className="text-pink-400">[</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-amber-300">&quot;React&quot;</span>,{" "}
                                <span className="text-amber-300">&quot;TypeScript&quot;</span>,{" "}
                                <span className="text-amber-300">&quot;PostgreSQL&quot;</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                                <span className="text-amber-300">&quot;Cloud&quot;</span>
                            </div>
                            <div>
                                <span className="text-pink-400">]</span>;
                            </div>
                        </div>

                        {/* stats row */}
                        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px]">
                            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/60 dark:bg-zinc-900/80 p-2">
                                <div className="text-[9px] text-gray-500 dark:text-gray-400">
                                    Ship time
                                </div>
                                <div className="text-xs font-semibold dark:text-white">2–4 weeks</div>
                            </div>
                            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/60 dark:bg-zinc-900/80 p-2">
                                <div className="text-[9px] text-gray-500 dark:text-gray-400">
                                    Uptime
                                </div>
                                <div className="text-xs font-semibold dark:text-white">99.9%</div>
                            </div>
                            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/60 dark:bg-zinc-900/80 p-2">
                                <div className="text-[9px] text-gray-500 dark:text-gray-400">
                                    Reviews
                                </div>
                                <div className="text-xs font-semibold dark:text-white">A+</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
