import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { SiReact, SiNextdotjs, SiTailwindcss, } from 'react-icons/si';
import { DiGit, DiHtml5 } from "react-icons/di";
import { SiMysql, SiPython, SiGithub } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill, RiSupabaseFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import LogoLoop from "../components/LogoLoop.tsx";
import TiltedCard from "../components/TiltedCard.tsx";
import GlassIcons from "../components/GlassIcons.tsx";

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

const github = [
    { icon: <SiGithub size={100}/>, color: 'green', label: 'Github' },
]
const linkedin = [
    { icon: <FaLinkedin size={100} />, color: 'blue', label: 'LinkedIn' },
]
const mail = [
    { icon: <LuMail size={100} />, color: 'red', label: 'Contact' },
]

export default function Home() {
    return (
        <>
            <Helmet><title>Home — Javier Golpe Juarez</title></Helmet>
            <section className="mt-[75px] flex flex-row items-center gap-6 backdrop-blur-lg border-white/30 shadow-md mx-auto max-w-5xl border
            justify-between px-4 py-3 rounded-2xl">

                <div>
                    <div>
                        <h1 className="text-4xl font-extrabold">
                            Building Clean & Modern Web Experiences
                        </h1>
                    </div>
                    <div className="my-4 w-3/4 h-full text-left">
                        <p className="max-w-2xl text-lg text-slate-700">
                            I’m Javier Golpe Juarez, a software developer passionate about web apps, design,
                            and solving real-world problems with code.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link to="/projects" className="rounded-xl bg-slate-900 px-4 py-2 text-white">
                            View Projects
                        </Link>
                    </div>

                    <div>
                        <div className="flex flex-row gap-6">
                            <Link to="https://github.com/JavierGolpeJ">
                                <GlassIcons items={github} className="custom-class"/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/javier-golpe-jr-62b83a341">
                                <GlassIcons items={linkedin} className="custom-class"/>
                            </Link>
                            <Link to="/contact">
                                <GlassIcons items={mail} className="custom-class"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <TiltedCard
                        imageSrc="src/images/avatar.jpg"
                        altText="My Profile Picture"
                        captionText="My Profile Picture"
                        containerHeight="400px"
                        containerWidth="400px"
                        imageHeight="300px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text text-white backdrop-blur-lg
                            shadow-md m-4 max-w-5xl rounded-xl p-1">
                                Javier Golpe Juarez
                            </p>
                        }
                    />

                </div>

            </section>
            <section>
                <div style={{ height: '60px', position: 'relative', overflow: 'hidden'}}
                     className=" border rounded-xl mt-3 backdrop-blur-lg border-white/30 shadow-md">
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
