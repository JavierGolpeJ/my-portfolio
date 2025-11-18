import { motion, type Variants } from "framer-motion";

const contactContainer: Variants = {
    hidden: {
        scale: 1.12,            // feels like it starts huge
        borderRadius: 0,       // flat sheet
        y: -40,
        opacity: 0,
    },
    show: {
        scale: 1,
        borderRadius: 24,      // matches rounded-3xl look
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            when: "beforeChildren",
            staggerChildren: 0.18,
        },
    },
};

const cardVariant: Variants = {
    hidden: { scale: 1.12,            // feels like it starts huge
        borderRadius: 0,       // flat sheet
        y: -40,
        opacity: 0,},
    show: {scale: 1,
        borderRadius: 24,      // matches rounded-3xl look
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

export default function Contact() {
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
            viewport={{ once: true, amount: 0.6 }}
        >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Contact
                </span>
            </h2>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(260px,1.1fr)]">
                {/* FORM */}
                <motion.div
                    variants={cardVariant}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-black/5 dark:border-white/10
                    bg-white/65 dark:bg-slate-950/55
                    backdrop-blur-xl shadow-sm hover:shadow-xl p-6 sm:p-8"
                >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4">
                        Contact Form
                    </p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            // hook this up to Formspree / API / email service
                        }}
                        className="space-y-4"
                    >
                        <div className="grid sm:grid-cols-2 gap-3">
                            <div>
                                <label className="sr-only" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full rounded-2xl px-4 py-3 bg-white/80 dark:bg-slate-900/80
                                    border border-gray-200/70 dark:border-gray-700/70
                                    text-sm text-gray-900 dark:text-gray-100
                                    placeholder:text-gray-400
                                    focus:outline-none focus:ring-2 focus:ring-sky-400/80 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-2xl px-4 py-3 bg-white/80 dark:bg-slate-900/80
                                    border border-gray-200/70 dark:border-gray-700/70
                                    text-sm text-gray-900 dark:text-gray-100
                                    placeholder:text-gray-400
                                    focus:outline-none focus:ring-2 focus:ring-sky-400/80 focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                placeholder="Subject"
                                className="w-full rounded-2xl px-4 py-3
                                bg-white/80 dark:bg-slate-900/80 border border-gray-200/70 dark:border-gray-700/70
                                text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400
                                focus:outline-none focus:ring-2 focus:ring-sky-400/80 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Message"
                                rows={5}
                                className="w-full rounded-2xl px-4 py-3 bg-white/80 dark:bg-slate-900/80
                                border border-gray-200/70 dark:border-gray-700/70
                                text-sm text-gray-900 dark:text-gray-100
                                placeholder:text-gray-400
                                focus:outline-none focus:ring-2 focus:ring-sky-400/80 focus:border-transparent
                                resize-none transition-all"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl
                            bg-gray-900 text-white text-sm font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5
                            active:translate-y-0 active:shadow-sm transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* DIRECT LINKS */}
                <motion.div
                    variants={cardVariant}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-black/5 dark:border-white/10
                    bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl shadow-sm  p-6 sm:p-8
                    flex flex-col justify-between gap-4"
                >
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4">
                            Direct Links
                        </p>
                        <ul className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-100">
                            <li>
                                <a
                                    href="mailto:youremail@domain.com"
                                    className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
                                >
                                    <span className="text-lg">✉️</span>
                                    <span>youremail@domain.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/your-handle"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
                                >
                                    <span className="text-lg">🔗</span>
                                    <span>GitHub / LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
                                >
                                    <span className="text-lg">📄</span>
                                    <span>Resume (PDF)</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        Prefer async? Drop a message or connect via LinkedIn — I usually
                        respond within a day.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
