import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { SiReact, SiNextdotjs, SiTailwindcss, } from 'react-icons/si';
import { DiGit, DiHtml5 } from "react-icons/di";
import { SiMysql, SiPython } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill, RiSupabaseFill } from "react-icons/ri";
import LogoLoop from "../components/LogoLoop.tsx";

const techLogos = [
    { node: <DiGit />, title: "Git", href: "https://tailwindcss.com" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <DiHtml5 />, title: "React", href: "https://react.dev" },
    { node: <BiLogoTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <RiJavascriptFill />, title: "mySql", href: "https://tailwindcss.com" },
    { node: <SiPython />, title: "mySql", href: "https://tailwindcss.com" },
    { node: <SiMysql />, title: "mySql", href: "https://tailwindcss.com" },
    { node: <RiSupabaseFill />, title: "Supabase", href: "https://tailwindcss.com" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function Home() {
    return (
        <>
            <Helmet><title>Home — Javier Golpe Juarez</title></Helmet>
            <section className="mt-[75px] flex flex-col items-start gap-6">
                <h1 className="text-4xl font-extrabold">
                    Hi, I’m Javier Golpe
                </h1>
                <p className="max-w-2xl text-lg text-slate-700">
                    I build performant web & mobile apps with React, TypeScript, and Supabase.
                </p>
                <div className="flex gap-3">
                    <Link to="/projects" className="rounded-xl bg-slate-900 px-4 py-2 text-white">
                        View Projects
                    </Link>
                    <Link to="/contact" className="rounded-xl border px-4 py-2">
                        Get in touch
                    </Link>
                </div>
            </section>
            <section>
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={48}
                    gap={90}
                    pauseOnHover
                    scaleOnHover
                    ariaLabel="Technology partners"
                />
            </div>
            </section>

        </>
    );
}
