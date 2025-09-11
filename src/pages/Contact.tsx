import { Helmet } from "react-helmet-async";

export default function Contact() {
    return (
        <>
            <Helmet><title>Contact — Javier Mazaba</title></Helmet>
            <h2 className="mb-4 text-3xl font-bold">Contact</h2>
            <p className="text-slate-700">
                Email: <a className="underline" href="mailto:you@example.com">you@example.com</a>
            </p>
            <p className="text-slate-700">
                GitHub: <a className="underline" href="https://github.com/yourname" target="_blank">yourname</a>
            </p>
            <p className="text-slate-700">
                LinkedIn: <a className="underline" href="https://linkedin.com/in/yourname" target="_blank">yourname</a>
            </p>
        </>
    );
}
