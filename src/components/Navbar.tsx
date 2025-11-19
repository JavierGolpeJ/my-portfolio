import { useEffect, useState } from "react";

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
                        <a
                            href="https://github.com/your-github-here"
                            target="_blank"
                            rel="noreferrer"
                            className="px-2 py-1 text-xs rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-200"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/your-linkedin-here"
                            target="_blank"
                            rel="noreferrer"
                            className="px-2 py-1 text-xs rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-200"
                        >
                            LinkedIn
                        </a>
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
