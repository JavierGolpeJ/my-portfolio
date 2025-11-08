
const sections = [
    {
        title: "Frontend",
        label: "UI / Client",
        skills: [
            { name: "React", level: "Advanced" },
            { name: "TypeScript", level: "Advanced" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "Next.js", level: "Intermediate" },
        ],
    },
    {
        title: "Backend",
        label: "APIs / Data",
        skills: [
            { name: "Node.js", level: "Advanced" },
            { name: "PostgreSQL", level: "Intermediate" },
            { name: "Supabase", level: "Intermediate" },
            { name: "Express.js", level: "Intermediate" },
        ],
    },
    {
        title: "DevOps / Cloud",
        label: "Infra / CI",
        skills: [
            { name: "AWS", level: "Intermediate" },
            { name: "Docker", level: "Intermediate" },
            { name: "GitHub Actions", level: "Intermediate" },
            { name: "Vercel / Netlify", level: "Intermediate" },
        ],
    },
];

const levelColor = (level: string) => {
    switch (level) {
        case "Advanced":
            return "bg-emerald-500/90";
        case "Intermediate":
            return "bg-sky-500/90";
        default:
            return "bg-gray-400/90";
    }
};

export default function SkillsToolbox() {
    return (
        <section
            id="skills"
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
            {/* Heading */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Skills &amp; Toolbox
                    </span>
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
                    A focused stack for building fast, reliable web apps from UI to
                    deployment.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                {sections.map((section) => (
                    <div
                        key={section.title}
                        className="
              group relative overflow-hidden
              rounded-2xl border border-black/5 dark:border-white/5
              bg-white/60 dark:bg-black/40
              backdrop-blur-md shadow-sm
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300
            "
                    >
                        {/* subtle gradient accent */}
                        <div className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-white/40 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="p-6 flex flex-col gap-4">
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500">
                                        {section.label}
                                    </div>
                                    <h3 className="text-lg font-semibold">
                                        {section.title}
                                    </h3>
                                </div>
                                <div
                                    className="
                    px-2.5 py-1 rounded-full text-[10px]
                    bg-gray-900 text-gray-100
                    dark:bg-gray-100 dark:text-gray-900
                    uppercase tracking-[0.16em]
                  "
                                >
                                    Core Stack
                                </div>
                            </div>

                            <ul className="space-y-2.5">
                                {section.skills.map((skill) => (
                                    <li
                                        key={skill.name}
                                        className="flex items-center justify-between gap-3 text-sm"
                                    >
                    <span className="text-gray-800 dark:text-gray-100">
                      {skill.name}
                    </span>

                                        {/* Level pill + mini bar */}
                                        <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wide text-gray-500">
                        {skill.level}
                      </span>
                                            <div className="w-14 h-1.5 bg-gray-200/70 dark:bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className={`
                            h-full rounded-full
                            ${levelColor(skill.level)}
                          `}
                                                    style={{
                                                        width:
                                                            skill.level === "Advanced"
                                                                ? "90%"
                                                                : skill.level === "Intermediate"
                                                                    ? "65%"
                                                                    : "40%",
                                                    }}
                                                />
                                            </div>
                                        </div>
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
