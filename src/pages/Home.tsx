import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
            <Helmet><title>Home — Javier Golpe Juarez</title></Helmet>
            <section className="mt-8 flex flex-col items-start gap-6">
                <h1 className="text-4xl font-extrabold tracking-tight">
                    Hi, I’m Javier — Full-Stack Dev
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
        </>
    );
}
