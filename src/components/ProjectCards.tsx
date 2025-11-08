type ProjectCardProps = {
    title: string,
    subtitle: string,
    description: string,
    image?: string; // optional project image or screenshot
    tags?: string[]; // optional tech stack or keywords
    readUrl?: string; // optional link to case study
    liveUrl?: string; // optional link to live demo
    codeUrl?: string; // optional link to GitHub or source code
}

export default function ProjectCards(
    {title, subtitle, description, image, tags}: ProjectCardProps){
    const tag =
        "text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400";
    const sectionBox =
        "rounded-2xl border-2 border-dashed border-gray-300 dark:border-neutral-700 p-6 bg-white/40 dark:bg-black/20 shadow-sm";


    return(
        <div className={`${sectionBox} flex flex-col gap-3`}>
            <div className="aspect-video rounded-xl border-2 border-dashed grid place-items-center">
                <span className="text-xs text-gray-500">{image ? image: "Screenshot / Demo"}</span>
            </div>
            <div>
                <div className={tag}>{title}</div>
                <h3 className="font-semibold">{subtitle}</h3>
                <p className="items-center border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl mt-3 p-6
                text-sm text-white/90 shadow-lg transition">
                    {description}
                </p>
                <ul className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 mt-3 text-white/90">
                    {tags?.map((idx) => (
                        <li
                            key={idx}
                            className="text-[10px] px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                            {idx}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-2 mt-auto">
                <a className="text-sm underline" href="#">Read</a>
                <a className="text-sm underline" href="#">Live</a>
                <a className="text-sm underline" href="#">Code</a>
            </div>
        </div>
    );
}