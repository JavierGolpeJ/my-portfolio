
export default function SkillToolbox() {
    const tag =
        "text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400";
    const sectionBox =
        "rounded-2xl border-2 border-dashed border-gray-300 dark:border-neutral-700 p-6 bg-white/40 dark:bg-black/20 shadow-sm";


    return(
        <section id="skills" className="py-8 md:py-14">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Skills & Toolbox</h2>
                <div className="grid md:grid-cols-3 gap-5">
                    {["Frontend", "Backend", "DevOps / Cloud"].map((cat) => (
                        <div key={cat} className={sectionBox}>
                            <div className={tag}>{cat}</div>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li className="flex items-center justify-between"><span>React</span><span className="text-xs opacity-60">Advanced</span></li>
                                <li className="flex items-center justify-between"><span>TypeScript</span><span className="text-xs opacity-60">Advanced</span></li>
                                <li className="flex items-center justify-between"><span>Node.js</span><span className="text-xs opacity-60">Advanced</span></li>
                                <li className="flex items-center justify-between"><span>PostgreSQL</span><span className="text-xs opacity-60">Intermediate</span></li>
                                <li className="flex items-center justify-between"><span>AWS / Supabase</span><span className="text-xs opacity-60">Intermediate</span></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}