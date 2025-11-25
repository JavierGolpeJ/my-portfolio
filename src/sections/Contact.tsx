import { motion, type Variants } from "framer-motion";
import {type FormEvent, useState} from "react";
import {stagger} from "motion";

const contactContainer: Variants = {
    hidden: {
        scale: 1.12,
        borderRadius: 0,
        y: -40,
        opacity: 0,
    },
    show: {
        scale: 1,
        borderRadius: 24,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            when: "beforeChildren",
            delayChildren: stagger(0.25)
        },
    },
};

const cardVariant: Variants = {
    hidden: {
        scale: 1.12,
        borderRadius: 0,
        y: -40,
        opacity: 0,
    },
    show: {
        scale: 1,
        borderRadius: 24,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const FORM_ENDPOINT = 'https://formspree.io/f/xzzqvpqa';

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
        "idle"
    );
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        setError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
            setError("Network error. Please try again.");
        }
    }
    return (
        <motion.section
            id="contact"
            className="relative overflow-hidden rounded-3xl max-w-6xl
                 mx-4 sm:mx-10 lg:mx-auto
                 mt-8 sm:mb-8
                 px-6 py-10 sm:py-14 lg:py-10
                 dark:bg-black/20 backdrop-blur-md shadow-sm"
            style={{ transformOrigin: "center center" }}
            variants={contactContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Contact
                </span>
            </h2>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(260px,1.1fr)]">

                {/** ------------------------------------------------------ */}
                {/** LEFT CARD - YOUR CONSOLE FORM                          */}
                {/** ------------------------------------------------------ */}

                <motion.div
                    variants={cardVariant}
                    whileHover={{ y: -4 }}
                    className="relative rounded-3xl border border-black/5 dark:border-white/10
                     bg-white/65 dark:bg-slate-950/60
                     backdrop-blur-2xl shadow-sm hover:shadow-xl
                     p-6 sm:p-8 overflow-hidden"
                >
                    {/* diagonal gradient wash */}
                    <div className="pointer-events-none absolute -inset-x-20 -top-16 h-40
                          bg-gradient-to-r from-sky-500/20 via-purple-500/18 to-pink-500/22
                          blur-3xl opacity-80 rotate-[-6deg]" />

                    {/* subtle grid */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.12]
                          bg-[linear-gradient(to_right,rgba(148,163,184,0.55)_1px,transparent_1px),
                              linear-gradient(to_bottom,rgba(148,163,184,0.45)_1px,transparent_1px)]
                          bg-[size:26px_26px]" />

                    {/* content */}
                    <div className="relative space-y-5">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                                    Signal uplink
                                </p>
                                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-1">
                                    Send a message about roles, projects, or collabs — I'll route it to the right place.
                                </p>
                            </div>

                            {/* status dot */}
                            <div className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
                                <div className="relative flex items-center">
                                    <span className="absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-60 animate-ping" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                                </div>
                                <span>Online</span>
                            </div>
                        </div>

                        {/* --- Your form fields (unchanged) --- */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 text-sm"
                        >
                            {/* Name / Email */}
                            <div className="grid sm:grid-cols-2 gap-3">
                                {/* Honeypot for spam*/}
                                <input
                                    type="text"
                                    name="_gotcha"
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                                <div className="space-y-1">
                                    <label className="text-[11px] uppercase tracking-[0.18em] text-gray-700 dark:text-gray-200">
                                        Name
                                    </label>
                                    <div
                                        className="flex items-center gap-2 rounded-2xl px-3 py-2.5
                                        bg-white/85 dark:bg-slate-950/85 border border-gray-200/70 dark:border-gray-700/80
                                        focus-within:border-sky-400/80 focus-within:ring-2 focus-within:ring-sky-400/60 transition-all"
                                    >
                                        <span className="text-xs text-sky-400">👤</span>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Your name"
                                            className="w-full bg-transparent border-none outline-none
                                            text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] uppercase tracking-[0.18em] text-gray-700 dark:text-gray-200">
                                        Email
                                    </label>
                                    <div
                                        className="flex items-center gap-2 rounded-2xl px-3 py-2.5
                                        bg-white/85 dark:bg-slate-950/85 border border-gray-200/70 dark:border-gray-700/80
                                        focus-within:border-sky-400/80 focus-within:ring-2 focus-within:ring-sky-400/60 transition-all"
                                    >
                                        <span className="text-xs text-sky-400">✉️</span>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full bg-transparent border-none outline-none
                                 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="space-y-1">
                                <label className="text-[11px] uppercase tracking-[0.18em] text-gray-700 dark:text-gray-200">
                                    Subject <span className="text-gray-400">(optional)</span>
                                </label>
                                <div
                                    className="flex items-center gap-2 rounded-2xl px-3 py-2.5
                             bg-white/85 dark:bg-slate-950/85 border border-gray-200/70 dark:border-gray-700/80
                             focus-within:border-sky-400/80 focus-within:ring-2 focus-within:ring-sky-400/60 transition-all"
                                >
                                    <span className="text-xs text-sky-400">🏷️</span>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        placeholder="What should this be about?"
                                        className="w-full bg-transparent border-none outline-none
                               text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-1">
                                <label className="text-[11px] uppercase tracking-[0.18em] text-gray-700 dark:text-gray-200">
                                    Message
                                </label>
                                <div
                                    className="rounded-2xl px-3 py-2.5
                                    bg-white/85 dark:bg-slate-950/85 border border-gray-200/70 dark:border-gray-700/80
                                    focus-within:border-sky-400/80 focus-within:ring-2 focus-within:ring-sky-400/60 transition-all"
                                >
                                  <textarea
                                      id="message"
                                      name="message"
                                      rows={4}
                                      required
                                      placeholder="Share as much context as you like — roles, projects, timelines, tech, etc."
                                      className="w-full bg-transparent border-none outline-none
                                      text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 resize-none"
                                  />
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="pt-3 space-y-2">

                                {/* Row: system note + button */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                                        System note: I usually reply within 24 hours.
                                    </p>

                                    <button
                                        type="submit"
                                        disabled={status === "submitting" || status === "success"}
                                        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl
                                        bg-gradient-to-r from-sky-500 to-purple-500 text-xs font-semibold tracking-wide text-white
                                        shadow-[0_10px_30px_rgba(56,189,248,0.45)]
                                        hover:shadow-[0_16px_40px_rgba(56,189,248,0.65)]transition-all
                                        ${
                                            status === "submitting" || status === "success"
                                                ? "opacity-70 cursor-not-allowed"
                                                : "hover:-translate-y-0.5"
                                        }`}
                                    >
                                        {status === "submitting" ? (
                                            <span className="flex items-center gap-2">
                                              <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24">
                                                <circle
                                                    className="opacity-30"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="white"
                                                    strokeWidth="3"
                                                    fill="none"
                                                />
                                                <path
                                                    className="opacity-90"
                                                    fill="white"
                                                    d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
                                                />
                                              </svg>
                                              Sending…
                                            </span>
                                        ) : status === "success" ? (
                                            <>
                                                Sent <span className="text-sm">✓</span>
                                            </>
                                        ) : (
                                            <>
                                                Transmit message
                                                <span className="text-sm">↗</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Inline status pill */}
                                <div className="min-h-[28px]">
                                    {status === "success" && (
                                        <div className="inline-flex items-center gap-2 rounded-xl
                                        bg-emerald-400/10 border border-emerald-400/40
                                        px-3 py-1.5 text-[11px] font-medium text-emerald-300
                                        shadow-sm shadow-emerald-500/20 animate-fade-in">
                                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                            <span>Signal received. I’ll get to you soon.</span>
                                        </div>
                                    )}

                                    {status === "error" && (
                                        <div className="inline-flex items-center gap-2 rounded-xl
                                        bg-red-500/10 border border-red-500/40
                                        px-3 py-1.5 text-[11px] font-medium text-red-300
                                        shadow-sm shadow-red-500/20 animate-fade-in">
                                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
                                            <span>{error ?? "Transmission failed. Please try again."}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/** ------------------------------------------------------ */}
                {/** RIGHT CARD - FIXED PASSPORT CARD                       */}
                {/** ------------------------------------------------------ */}

                <motion.div
                    variants={cardVariant}   // ← controlled by section
                    whileHover={{
                        y: -6,
                        scale: 1.015,
                    }}
                    className="relative rounded-3xl border border-black/5 dark:border-white/10
                     bg-white/35 dark:bg-slate-950/40 backdrop-blur-xl shadow-lg
                     p-6 sm:p-8 flex flex-col gap-6"
                >
                    {/* Gradient now controlled by variants */}
                    <div/>

                    {/* Header */}
                    <div className="relative flex items-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.08, rotate: -8 }}
                            className="h-14 w-14 rounded-full bg-gradient-to-br from-sky-400 via-purple-400 to-pink-500
                            flex items-center justify-center text-white font-semibold text-lg shadow-md"
                        >
                            JG
                        </motion.div>

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-0.5">
                                Identity Passport
                            </p>
                            <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-50">
                                Javier Golpe Juarez
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Software Developer · Full-Stack
                            </p>
                        </div>
                    </div>

                    {/* fields */}
                    <div className="relative grid grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700 dark:text-gray-200 mt-2">
                        {[
                            ["Region", "U.S. Central"],
                            ["Status", "Open to roles"],
                            ["Primary Email", "javiergolpe10@gmail.com"],
                            ["Portfolio", "This Site"],
                        ].map(([label, value], i) => (
                            <div key={i} className="space-y-1">
                                <div className="uppercase tracking-[0.18em] text-gray-500 text-[10px]">
                                    {label}
                                </div>

                                {label === "Primary Email" ? (
                                    <a
                                        href={`mailto:${value}`}
                                        className="font-medium text-gray-900 dark:text-gray-50 hover:text-sky-400 transition-colors"
                                    >
                                        {value}
                                    </a>
                                ) : (
                                    <div className="font-medium text-gray-900 dark:text-gray-50">{value}</div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* socials */}
                    <div className="grid grid-cols-2 gap-4 mt-2 text-xs sm:text-sm">
                        {[
                            ["GitHub", "github.com/JavierGolpeJ"],
                            ["LinkedIn", "linkedin.com/in/javier-golpe-jr-62b83a341"],
                        ].map(([label, url], i) => (
                            <div key={i} className="space-y-1">
                                <div className="uppercase tracking-[0.18em] text-gray-500 text-[10px]">
                                    {label}
                                </div>
                                <motion.a
                                    href={`https://${url}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ x: 2 }}
                                    className="font-medium text-gray-900 dark:text-gray-50 hover:text-sky-400 transition-colors"
                                >
                                    {url}
                                </motion.a>
                            </div>
                        ))}
                    </div>

                    {/* stamps */}
                    <div className="relative mt-5 flex flex-wrap gap-2 text-[10px] sm:text-[11px] select-none">
                        <motion.span
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            className="inline-flex items-center gap-1 rounded-full border border-dashed
                            border-sky-400/70 px-3 py-1 text-sky-500/90"
                        >
                            ✈️ Remote-ready
                        </motion.span>

                        <motion.span
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
                            className="inline-flex items-center gap-1 rounded-full border border-dashed
                            border-purple-400/70 px-3 py-1 text-purple-500/90"
                        >
                            🕒 Replies ~24h
                        </motion.span>

                        <motion.span
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
                            className="inline-flex items-center gap-1 rounded-full border border-dashed
                            border-pink-400/70 px-3 py-1 text-pink-500/90"
                        >
                            📄 Resume
                        </motion.span>
                    </div>

                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        For opportunities, collaborations, or DevTools ideas — feel free to reach out.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
