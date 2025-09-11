import { Link, NavLink } from "react-router-dom";

const linkBase =
    "px-3 py-2 rounded-xl transition hover:bg-slate-100";
const active =
    "bg-slate-900 text-white hover:bg-slate-900";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                <Link to="/" className="font-bold text-lg">JGJ</Link>
                <div className="flex gap-2">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/projects", label: "Projects" },
                        { to: "/about", label: "About" },
                        { to: "/contact", label: "Contact" },
                    ].map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `${linkBase} ${isActive ? active : ""}`
                            }
                            end
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
}
