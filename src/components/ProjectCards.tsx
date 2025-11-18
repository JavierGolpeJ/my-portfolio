type ProjectCardProps = {
    title: string,
    description: string,
    image?: string; // optional project image or screenshot
    tags?: string[]; // optional tech stack or keywords
    readUrl?: string; // optional link to case study
    liveUrl?: string; // optional link to live demo
    codeUrl?: string; // optional link to GitHub or source code
}

export default function ProjectCards(
    {title, description, image, tags}: ProjectCardProps){

    return(
        <div className="rounded-2xl border border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-md
        shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 space-y-4 h-full"
        >
            <div className="aspect-video rounded-xl border-2 border-dashed grid place-items-center">
                <span className="text-xs text-gray-500">{image ? image: "Screenshot / Demo"}</span>
            </div>
            <div>
                <h3 className="font-semibold dark:text-white">{title}</h3>
                <p className="items-center border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl mt-3 p-6
                text-sm dark:text-white/90 shadow-lg transition">
                    {description}
                </p>
                <ul className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 mt-3 dark:text-white/90">
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