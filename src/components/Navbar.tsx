import { useEffect, useState } from "react";
import {motion} from "framer-motion";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const linkStyle =
        "px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition dark:text-white";

    const items = ["Home", "Projects", "Skills", "Experience", "About", "Contact"];

    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        setMenuOpen(false);

        const y = el.getBoundingClientRect().top + window.scrollY - 70;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // scrolling down → hide navbar
                setHidden(true);
            } else {
                // scrolling up → show navbar
                setHidden(false);
            }

            setLastScrollY(currentScrollY);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`
        sticky top-0 z-50 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        backdrop-blur supports-[backdrop-filter]:bg-white/60
        dark:supports-[backdrop-filter]:bg-black/40
      `}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo + name */}
                    <div className="flex items-center gap-3">
                        <div className="leading-tight">
                            <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                                Portfolio
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="font-semibold dark:text-white">
                                    Javier Golpe Juarez
                                </div>
                            </div>
                            <div className="text-[11px] text-gray-500 dark:text-gray-400">
                                Software Engineer · Full-stack web
                            </div>
                        </div>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {items.map((item) => {
                            const id = item.toLowerCase();
                            return (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(id)}
                                    className={linkStyle}
                                >
                                    {item}
                                </button>
                            );
                        })}

                        {/* Resume button */}
                        <a
                            href="/Javier-Golpe-Juarez-Resume.pdf"
                            className={`${linkStyle} bg-white text-black dark:bg-black dark:text-white border border-black/10 dark:border-white/10 ml-1`}
                        >
                            Resume
                        </a>

                        {/* subtle divider */}
                        <div className="mx-2 h-5 w-px bg-black/10 dark:bg-white/10" />

                        {/* Social links – fill the right side nicely */}
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
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 rounded-xl border border-gray-300 dark:border-neutral-700"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-0.5 bg-current mb-1" />
                        <div className="w-5 h-0.5 bg-current mb-1" />
                        <div className="w-5 h-0.5 bg-current" />
                    </button>
                </div>
            </div>

            {/* Mobile menu overlay (no layout shift) */}
            {menuOpen && (
                <div className="md:hidden fixed inset-x-0 top-16 z-40 bg-white/95 dark:bg-black/95 border-b border-black/5 dark:border-white/5">
                    <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 gap-2">
                        {items.map((item) => {
                            const id = item.toLowerCase();
                            return (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(id)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 dark:border-neutral-800 text-sm text-left"
                                >
                                    {item}
                                </button>
                            );
                        })}
                        <a
                            href="/Javier-Golpe-Juarez-Resume.pdf"
                            className="px-3 py-2 rounded-xl border border-gray-900 bg-black text-white dark:bg-white dark:text-black text-sm text-left"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
