
export default function About(){

    return(
        <section
            id="about"
            className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-16 bg-gradient-to-br rounded-2xl mt-12
            from-cyan-100 via-white to-white dark:from-sky-900/40 dark:via-slate-950 dark:to-slate-950"
        >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-10 tracking-tight">
        <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          About Me
        </span>
            </h2>

            <div className="grid md:grid-cols-[2fr_1fr] gap-6">
                {/* BIO CARD */}
                <div
                    className="
            rounded-2xl border border-black/5 dark:border-white/10
            bg-white/60 dark:bg-slate-900/50
            backdrop-blur-md shadow-sm hover:shadow-lg transition-all p-6 sm:p-8
          "
                >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3">
                        Bio
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm sm:text-base max-w-prose">
                        Software developer with a focus on front-end architecture and developer experience.
                        I enjoy building <span className="font-semibold text-sky-500">delightful, accessible UIs</span> and
                        <span className="font-semibold text-purple-400"> stable APIs</span> that empower people to create and scale products faster.
                    </p>

                    <p className="mt-4 text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                        I’m currently exploring how <span className="text-sky-400 font-semibold">AI-assisted tools</span> can improve developer workflows
                        — from code documentation to smart debugging — and I love collaborating on projects that bridge creativity and engineering.
                    </p>
                </div>

                {/* FAST FACTS CARD */}
                <div
                    className="
            rounded-2xl border border-black/5 dark:border-white/10
            bg-gradient-to-br from-sky-100/70 to-white/30 dark:from-sky-900/40 dark:to-slate-900/30
            backdrop-blur-md shadow-sm hover:shadow-lg transition-all p-6 sm:p-8
          "
                >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3">
                        Fast Facts
                    </p>
                    <ul className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        <li>
              <span className="font-medium text-gray-900 dark:text-white">
                Location:
              </span>{" "}
                            Remote-friendly (U.S. Central)
                        </li>
                        <li>
              <span className="font-medium text-gray-900 dark:text-white">
                Open to:
              </span>{" "}
                            Full-Time, Contract
                        </li>
                        <li>
              <span className="font-medium text-gray-900 dark:text-white">
                Interests:
              </span>{" "}
                            DevTools, Web Performance, AI, Design Systems
                        </li>
                    </ul>

                    <div className="mt-5 text-[11px] text-gray-500 dark:text-gray-400">
                        ⚡ Always learning. Always shipping.
                    </div>
                </div>
            </div>
        </section>
);
}