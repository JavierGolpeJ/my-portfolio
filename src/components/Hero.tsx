import { motion } from "framer-motion";

export default function Hero(){

    return(
        <section
            id="home"
            className="relative overflow-hidden rounded-3xl max-w-6xl
             mx-4 sm:mx-10 lg:mx-auto
             mt-8 sm: mb-8
             px-6 py-10 sm:py-14 lg:py-16
             bg-gradient-to-br from-cyan-100 via-white to-white
             dark:from-sky-900/40 dark:via-slate-950 dark:to-slate-950"
        >
            {/* soft glow */}
            <div className="pointer-events-none absolute -top-32 -left-16 w-64 h-64 bg-cyan-300/40 blur-3xl opacity-70" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl" />

            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="relative grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,1.2fr)] items-center">
                {/* Left: Copy */}
                <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight
                    bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Software Engineer crafting reliable,
                        <span className="block"> scalable web apps.</span>
                    </h1>

                    <p className="mt-5 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl">
                        I design and build full-stack experiences with React, TypeScript,
                        Node.js, PostgreSQL, and cloud services — with a focus on
                        performance, DX, and clean architecture.
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-2xl bg-gray-900 text-white text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm text-gray-900 dark:text-gray-100 font-medium backdrop-blur hover:bg-white hover:dark:bg-white/10 hover:-translate-y-0.5 transition-all"
                        >
                            Contact Me
                        </a>

                        <a
                            href="/Javier-Golpe-Juarez-Resume.pdf"
                            className="px-6 py-3 rounded-2xl border border-gray-300/90 dark:border-gray-600/80 text-sm text-gray-800 dark:text-gray-100 font-medium hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 transition-all"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Optional trust row */}
                    <div className="mt-5 text-[10px] text-gray-500 dark:text-gray-500">
                        Previously built tools for real-estate, developer tooling, and
                        security projects at UWM.
                    </div>
                </div>

                {/* Right: Visual */}
                <div
                    className="
            relative rounded-3xl border border-black/5 dark:border-white/5
            bg-white/70 dark:bg-slate-900/60 backdrop-blur-md
            h-[220px] sm:h-[260px] lg:h-[280px]
            flex items-center justify-center
            shadow-sm"
                >
                    <div className="absolute inset-4 rounded-2xl border border-dashed border-gray-300/80 dark:border-gray-600/70 pointer-events-none" />
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center px-6 leading-relaxed">
                        Preview / Hero Visual
                        <br />
                        Drop in a clean mockup of your best project (MIPS Emulator UI,
                        AI-Docs tool, or HomeSellrr dashboard) to immediately signal what
                        you build.
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
