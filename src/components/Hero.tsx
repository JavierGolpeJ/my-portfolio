import { motion } from "framer-motion";

export default function Hero(){
    const tag =
        "text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400";
    const sectionBox =
        "rounded-2xl border-2 border-dashed border-gray-300 dark:border-neutral-700 p-6 bg-white/40 dark:bg-black/20 shadow-sm";


    return(
        <section id="home" className="relative">
            <div className="max-w-6xl mx-auto px-4 pt-12 pb-10 md:pt-20 md:pb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className={sectionBox}>
                        <div className={tag}>Hero / Value Prop</div>
                        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
                            Software Engineer crafting reliable, scalable web apps
                        </h1>
                        <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
                            I design and build full‑stack experiences with React, Node, and cloud services, focused on performance and developer experience.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a href="#projects" className="px-4 py-2 rounded-xl border-2 border-dashed">View Projects</a>
                            <a href="#contact" className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">Contact Me</a>
                            <a href="#resume" className="px-4 py-2 rounded-xl border">Download Resume</a>
                        </div>
                        <div className="mt-4 text-xs text-gray-500">Trust markers (logos, metrics, awards) — optional</div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 2 }} className={`${sectionBox} min-h-[260px]`}>
                        <div className={tag}>Preview / Hero Visual</div>
                        <div className="mt-2 h-48 md:h-64 rounded-xl border-2 border-dashed grid place-items-center">
                            {/* TODO: Headshot, animated code, product mockups, or 3D canvas */}
                            <span className="text-xs text-gray-500">Image / Mockup Placeholder</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
