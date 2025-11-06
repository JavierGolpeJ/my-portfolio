
export default function About(){
    const tag =
        "text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400";
    const sectionBox =
        "rounded-2xl border-2 border-dashed border-gray-300 dark:border-neutral-700 p-6 bg-white/40 dark:bg-black/20 shadow-sm";

    return(
        <section id="about" className="py-8 md:py-14">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4">About Me</h2>
                <div className="grid md:grid-cols-3 gap-5">
                    <div className={`${sectionBox} md:col-span-2`}>
                        <div className={tag}>Bio</div>
                        <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-200">
                            {/* TODO: 4–6 sentence story aligned to roles you want. Emphasize impact, collaboration, and curiosity. */}
                            Software developer with a focus on front‑end architecture and DX. I like shipping delightful, accessible UIs and building stable APIs.
                        </p>
                    </div>
                    <div className={sectionBox}>
                        <div className={tag}>Fast Facts</div>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>Location • Remote friendly</li>
                            <li>Open to: Full‑time, Contract</li>
                            <li>Interests: DevTools, Web Perf, AI</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
);
}