import MockUi from "./MockUI.tsx";

type ProjectCardProps = {
    title: string,
    description: string,
    tags?: string[]; // optional tech stack or keywords
    readUrl?: string; // optional link to case study
    liveUrl?: string; // optional link to live demo
    codeUrl?: string; // optional link to GitHub or source code
}

export default function ProjectCards(
    {title, description, tags}: ProjectCardProps){

    return(
        <div className="shadow-sm hover:shadow-lg hover:-translate-y-1 p-6 space-y-4 h-full rounded-2xl">
            <MockUi/>
            <div>
                <h3 className="font-semibold dark:text-white">{title}</h3>
                <div className="mt-2 p-4 rounded-2xl border border-white/10 bg-white/5 dark:bg-black/30  relative">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-sky-400 to-pink-500"/>
                    <p className="text-black dark:text-gray-300 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                <ul className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 mt-3
                dark:text-white/90 ">
                    {tags?.map((idx) => (
                        <li
                            key={idx}
                            className="text-[10px] px-3 py-2 rounded-2xl bg-white/10 hover:bg-white/20

                            hover:scale-105 duration-300">
                            {idx}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}