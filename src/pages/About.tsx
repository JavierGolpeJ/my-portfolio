import { Helmet } from "react-helmet-async";

export default function About() {
    return (
        <>
            <Helmet><title>About — Javier Mazaba</title></Helmet>
            <h2 className="mb-4 text-3xl font-bold">About</h2>
            <p className="max-w-2xl text-slate-700">
                CS major focused on React, React Native, and AI-assisted tooling.
                I enjoy building helpful, clean UIs and shipping quickly.
            </p>
        </>
    );
}
