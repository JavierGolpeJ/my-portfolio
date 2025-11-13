import ProjectCards from "./ProjectCards.tsx";

export default function Projects(){
    return(
        <section id="projects" className="md:py-[75px]">
            <div className="max-w-6xl mx-auto px-4 ">
                {/* Heading */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight px-5 py-2 rounded-2xl
                    bg-white/60 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm
                    text-gray-900 dark:text-white">
                        <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Featured Projects / Case Studies
                        </span>
                        <span className="block text-sm text-gray-500 dark:text-gray-400 font-normal mt-1">
                            Outcomes, architecture highlights, and takeaways.
                        </span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <ProjectCards title={'Web-Based MIPS Emulator Front-End'}
                                  description={'Collaborated with a team to design and implement a modern web-based ' +
                                      'MIPS emulator to replace outdated tools like MARS.'}
                                  tags={["React ", "TypeScript ", "Front-End Development ", "UI/UX Design ", "Agile Development "]}
                    />

                    <ProjectCards title={'AI-Assisted Documentation with Fine-Tuned LLMs'}
                                  description={'Developed an AI system that generates high-quality documentation for ' +
                                      'codebases by fine-tuning open-source LLMs with domain-specific data.'}
                                  tags={["Python ", "Pytorch ", "Prompt Engineering ", "Data Cleaning "]}
                    />

                    <ProjectCards title={'Software Developer - Confidential Startup Project'}
                                  description={'Developing a mobile-first application with a focus on ' +
                                      'user onboarding, data management, and scalability.'}
                                  tags={["React Native ", "TypeScript ", "Supabase ", "Sql ", "Tailwind "]}
                    />

                </div>
            </div>
        </section>
    );
}