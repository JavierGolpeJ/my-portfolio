
export default function Projects(){
    const tag =
        "text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400";
    const sectionBox =
        "rounded-2xl border-2 border-dashed border-gray-300 dark:border-neutral-700 p-6 bg-white/40 dark:bg-black/20 shadow-sm";


    return(
        <section id="projects" className="py-8 md:py-14">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Featured Projects / Case Studies</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                    {/* TODO: One‑sentence explainer. Prefer 2–4 flagship projects with measurable impact and a live demo or code links. */}
                    Selected work with outcomes, architecture highlights, and takeaways.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={`${sectionBox} flex flex-col gap-3`}>
                            <div className="aspect-video rounded-xl border-2 border-dashed grid place-items-center">
                                <span className="text-xs text-gray-500">Screenshot / Demo</span>
                            </div>
                            <div>
                                <div className={tag}>Case Study #{i}</div>
                                <h3 className="font-semibold">Project Title</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    {/* TODO: Problem → Solution → Result (metrics) */}
                                    Short impact statement. Tech: React, Node, Postgres. Result: +25% conversion.
                                </p>
                            </div>
                            <div className="flex gap-2 mt-auto">
                                <a className="text-sm underline" href="#">Read</a>
                                <a className="text-sm underline" href="#">Live</a>
                                <a className="text-sm underline" href="#">Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}