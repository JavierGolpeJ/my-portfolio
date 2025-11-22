import { motion } from "framer-motion";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-10">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    className="p-1 text-sm md:flex-row items-center justify-between gap-3 rounded-2xl
                border border-white/10 dark:border-white/10 bg-white/50 dark:bg-black/40 backdrop-blur-xl shadow-sm"
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="px-6 sm:px-8 py-3 flex flex-col md:flex-row md:items-center gap-6">
                        {/* Brand / blurb */}
                        <div className="flex-1">
                            <div className="text-sm uppercase tracking-[0.2em] text-gray-500">
                                Javier Golpe Juarez
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Building reliable, scalable web apps with React, TypeScript, Node, and cloud.
                            </p>
                        </div>

                        {/* Nav */}
                        <nav
                            aria-label="Footer"
                            className="flex flex-wrap items-center gap-x-6 gap-y-3"
                        >
                            <a
                                href="#projects"
                                className="text-sm hover:text-sky-400 transition-colors dark:text-white"
                            >
                                Projects
                            </a>
                            <a
                                href="#skills"
                                className="text-sm hover:text-sky-400 transition-colors dark:text-white"
                            >
                                Skills
                            </a>
                            <a
                                href="#experience"
                                className="text-sm hover:text-sky-400 transition-colors dark:text-white"
                            >
                                Experience
                            </a>
                        </nav>

                        {/* Socials */}
                        <div className="flex items-center gap-3">
                            <motion.a
                                aria-label="GitHub"
                                href="https://github.com/JavierGolpeJ"
                                target="_blank"
                                rel="noreferrer"
                                className="grid place-items-center w-9 h-9 rounded-xl border border-white/15 bg-white/20 dark:bg-white/10 hover:bg-white/30 transition"
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 text-gray-800 dark:text-gray-100"
                                    fill="currentColor"
                                >
                                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.63-2.67-.31-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.25-3.24-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.69.25 2.94.12 3.25.78.85 1.25 1.92 1.25 3.24 0 4.64-2.8 5.65-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
                                </svg>
                            </motion.a>

                            <motion.a
                                aria-label="LinkedIn"
                                href="https://www.linkedin.com/in/javier-golpe-jr-62b83a341"
                                target="_blank"
                                rel="noreferrer"
                                className="grid place-items-center w-9 h-9 rounded-xl border border-white/15 bg-white/20 dark:bg-white/10 hover:bg-white/30 transition"
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 text-gray-800 dark:text-gray-100"
                                    fill="currentColor"
                                >
                                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v10h3V10Zm5 0H7v10h3v-5.5c0-1.49 1.5-2.3 2.54-2.3.99 0 2.46.81 2.46 2.3V20h3v-5.9c0-3.1-1.66-4.6-3.88-4.6-1.8 0-2.6.98-3.12 1.67h-.05V10Z" />
                                </svg>
                            </motion.a>

                            <motion.a
                                aria-label="Email"
                                href="mailto:you@domain.com"
                                className="grid place-items-center w-9 h-9 rounded-xl border border-white/15 bg-white/20 dark:bg-white/10 hover:bg-white/30 transition"
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                            >
                                <span className="text-sm text-gray-900 dark:text-gray-100">✉️</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* thin gradient rule with subtle shimmer */}
                    <motion.div
                        className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/20"
                        style={{ backgroundSize: "200% 100%" }}
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />

                    {/* bottom row */}
                    <div className="px-1 sm:px-8 py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            © {year} Javier Golpe Juarez. All rights reserved.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
