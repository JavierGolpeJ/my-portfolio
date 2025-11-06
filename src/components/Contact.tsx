
export default function Contact() {
    const tag =
        "text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400";
    const sectionBox =
        "rounded-2xl border-2 border-dashed border-gray-300 dark:border-neutral-700 p-6 bg-white/40 dark:bg-black/20 shadow-sm";

    return(
        <section id="contact" className="py-8 md:py-14">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Contact</h2>
                <div className="grid md:grid-cols-2 gap-5">
                    <form className={sectionBox} onSubmit={(e) => e.preventDefault()}>
                        <div className={tag}>Contact Form</div>
                        <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                            <input className="col-span-2 md:col-span-1 border rounded-xl p-2 bg-transparent" placeholder="Name" />
                            <input className="col-span-2 md:col-span-1 border rounded-xl p-2 bg-transparent" placeholder="Email" />
                            <input className="col-span-2 border rounded-xl p-2 bg-transparent" placeholder="Subject" />
                            <textarea className="col-span-2 border rounded-xl p-2 h-28 bg-transparent" placeholder="Message" />
                        </div>
                        <button className="mt-4 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">Send</button>
                    </form>
                    <div className={sectionBox}>
                        <div className={tag}>Direct Links</div>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>📧 email@domain.com</li>
                            <li>🔗 LinkedIn / GitHub / X</li>
                            <li>📄 Resume (PDF)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}