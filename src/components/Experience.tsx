
export default function Experience(){
    const tag =
        "text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400";
    const sectionBox =
        "rounded-2xl border-2 border-dashed border-gray-300 dark:border-neutral-700 p-6 bg-white/40 dark:bg-black/20 shadow-sm";

    return(
        <section id="experience" className="py-8 md:py-14">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Experience</h2>
                <div className={`${sectionBox} overflow-hidden`}>
                    <div className="grid md:grid-cols-[220px_1fr] gap-6">
                        <div>
                            <div className={tag}>Timeline</div>
                            <ul className="mt-2 space-y-4">
                                {/* TODO: Replace with real roles */}
                                <li>
                                    <div className="text-sm font-medium">2025 — Present</div>
                                    <div className="text-xs text-gray-500">Role / Company</div>
                                </li>
                                <li>
                                    <div className="text-sm font-medium">2024 — 2025</div>
                                    <div className="text-xs text-gray-500">Role / Company</div>
                                </li>
                                <li>
                                    <div className="text-sm font-medium">2023 — 2024</div>
                                    <div className="text-xs text-gray-500">Role / Company</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className={tag}>Highlights</div>
                            <ul className="mt-2 space-y-3 text-sm">
                                <li>• Shipped <b>feature X</b> used by 10k monthly users (NPS +18).</li>
                                <li>• Led migration to <b>TypeScript</b>, reducing runtime errors by 35%.</li>
                                <li>• Built CI/CD pipeline bringing deploy time from 10m → 2m.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}