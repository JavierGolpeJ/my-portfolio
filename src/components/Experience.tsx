const experiences = [
    {
        period: "2025 — Present",
        role: "Software Engineer",
        company: "HomeSellrr",
        highlights: [
            "Shipped feature X used by 10k monthly users (NPS +18).",
            "Led migration to TypeScript, reducing runtime errors by 35%.",
            "Built CI/CD pipeline reducing deploy time from 10m → 2m.",
        ],
    },
    {
        period: "2024 — 2025",
        role: "Frontend Developer",
        company: "MIPS Emulator (UWM Project)",
        highlights: [
            "Designed syntax-highlighting IDE using Monaco Editor.",
            "Implemented register/memory visualization UI in React.",
            "Collaborated with 5 teammates and professor for final demo.",
        ],
    },
    {
        period: "2023 — 2024",
        role: "Full-Stack Developer",
        company: "AI Documentation Generator",
        highlights: [
            "Built code-to-docs pipeline using Node.js & Hugging Face datasets.",
            "Fine-tuned CodeLlama to auto-generate function documentation.",
            "Created report generator for onboarding teams faster.",
        ],
    },
];

export default function Experience(){

    return(
        <section
            id="experience"
            className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-16 relative"
        >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-10 tracking-tight">
        <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          Experience
        </span>
            </h2>

            {/* === TIMELINE WRAPPER === */}
            <div className="relative pl-10 space-y-10">
                {/* === Pill-shaped gradient bar === */}
                <div
                    className="absolute left-3 top-0 bottom-0 w-2 rounded-full
                    bg-gradient-to-b from-sky-400 via-purple-400 to-pink-400 opacity-70 blur-[1px]"
                />

                {/* === EXPERIENCE ENTRIES === */}
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative group">
                        {/* glowing dot */}
                        <div
                            className="absolute -left-[32px] top-2 w-4 h-4 rounded-full border-[3px]
                            border-white dark:border-slate-400 bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.6)]
                            group-hover:scale-110 transition-transform"
                        />

                        {/* card */}
                        <div
                            className="ml-6 sm:ml-8 rounded-2xl p-6 sm:p-7 bg-white/60 dark:bg-slate-900/50
                            border border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md
                            hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {exp.role}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {exp.company}
                                    </p>
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {exp.period}
                </span>
                            </div>

                            <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {exp.highlights.map((point, i) => (
                                    <li key={i}>
                    <span
                        className="font-medium text-gray-900 dark:text-gray-100"
                        dangerouslySetInnerHTML={{
                            __html: point.replace(
                                /(\bTypeScript\b|\bfeature X\b|\bCI\/CD\b)/g,
                                '<span class="text-sky-500 font-semibold">$1</span>'
                            ),
                        }}
                    />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}