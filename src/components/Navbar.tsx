import {useState} from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] =useState(false);

    const linkStyle =
        "px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition";

    return (
        <div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl border-2 border-dashed border-gray-400" />
                        <div className="leading-tight">
                            <div className="text-xs text-gray-500">My Portfolio</div>
                            <div className="font-semibold">Javier Golpe Juarez</div>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-1">
                        {[
                            "Home",
                            "Projects",
                            "Skills",
                            "Experience",
                            "About",
                            "Contact",
                        ].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className={linkStyle}>
                                {item}
                            </a>
                        ))}
                        <a href="#resume" className={`${linkStyle} bg-black text-white dark:bg-white dark:text-black`}>
                            Resume
                        </a>
                    </nav>

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

            {menuOpen && (
                <div className="md:hidden border-t border-black/5 dark:border-white/5">
                    <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 gap-2">
                        {["Projects", "Skills", "Experience", "About", "Contact", "Resume"].map(
                            (item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="px-3 py-2 rounded-xl border border-gray-200 dark:border-neutral-800 text-sm">
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
