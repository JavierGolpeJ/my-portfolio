import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkStyle =
        "px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition dark:text-white";

    const items = ["Home", "Projects", "Skills", "Experience", "About", "Contact"];

    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        // close menu on mobile
        setMenuOpen(false);

        // offset for navbar height (adjust 80 if your header is taller/shorter)
        const y = el.getBoundingClientRect().top + window.scrollY - 70;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo + name */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl border-2 border-dashed border-gray-400" />
                        <div className="leading-tight">
                            <div className="text-xs text-gray-500 dark:text-white">My Portfolio</div>
                            <div className="font-semibold dark:text-white">Javier Golpe Juarez</div>
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
                        <button
                            onClick={() => handleNavClick("resume")}
                            className={`${linkStyle} dark:bg-black dark:text-white bg-white text-black`}
                        >
                            Resume
                        </button>
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
                        <button
                            onClick={() => handleNavClick("resume")}
                            className="px-3 py-2 rounded-xl border border-gray-900 bg-black text-white dark:bg-white dark:text-black text-sm text-left"
                        >
                            Resume
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
