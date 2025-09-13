import { Link, NavLink } from "react-router-dom";

const linkBase =
    "px-3 py-2 rounded-xl transition hover:bg-slate-200";
const active =
    "bg-slate-900 text-white hover:bg-slate-900";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 mt-3">
            <nav className="backdrop-blur-lg border-white/30 shadow-md mx-auto flex max-w-5xl items-center border
            justify-between px-4 py-3 rounded-2xl">
                <Link to="/" className="font-bold text-lg text-black"> Javier Golpe </Link>
                <div className="flex gap-2">
                    {[
                        { to: "/", label: "Home" },
                        // { to: "/projects", label: "Projects" },
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
