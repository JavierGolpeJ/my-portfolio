import { motion } from "framer-motion";
import type {Variants} from "motion";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 ,
        transition: { duration: 1.6, ease: "easeOut" }
    },
};


const container: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .4,
            // you can drop ease if TS still complains
            ease: "easeOut",
            when: "beforeChildren",
            // if TS complains about this, move it out (see Fix 2)
            staggerChildren: 0.45,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
};


export default function Hero(){


    return(
        <motion.section
            id="home"
            className="relative overflow-hidden rounded-3xl max-w-6xl
             mx-4 sm:mx-10 lg:mx-auto
             mt-8 sm:mb-8
             px-6 py-10 sm:py-14 lg:py-16
             dark:bg-black/20 backdrop-blur-md shadow-sm
             "
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
                    <motion.h1
                        variants={item}
                        className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight
              bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
                    >
                        Software Engineer crafting reliable,
                        <span className="block"> scalable web apps.</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="mt-5 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl"
                    >
                        I design and build full-stack experiences with React, TypeScript,
                        Node.js, PostgreSQL, and cloud services — with a focus on
                        performance, DX, and clean architecture.
                    </motion.p>

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

                    {/* Optional trust row */}
                    <motion.div
                        variants={item}
                        className="mt-5 text-[10px] text-gray-500 dark:text-gray-500"
                    >
                        Previously built tools for real-estate, developer tooling, and
                        security projects at UWM.
                    </motion.div>
                </div>

                {/* Right: Visual */}
                <motion.div
                    variants={item}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative rounded-3xl border border-black/5 dark:border-white/5
                    bg-white/70 dark:bg-slate-900/60 backdrop-blur-md
                    h-[220px] sm:h-[260px] lg:h-[280px] flex items-center justify-center shadow-sm"
                >
                    <div className="absolute inset-4 rounded-2xl border border-dashed border-gray-300/80 dark:border-gray-600/70 pointer-events-none" />
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center px-6 leading-relaxed">
                        Preview / Hero Visual
                        <br />
                        Drop in a clean mockup of your best project (MIPS Emulator UI,
                        AI-Docs tool, or HomeSellrr dashboard) to immediately signal what
                        you build.
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
