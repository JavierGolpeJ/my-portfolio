import ProjectCards from "./ProjectCards.tsx";

export default function Projects(){
    return(
        <section id="projects" className="md:py-[75px]">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Featured Projects / Case Studies</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                    {/* TODO: One‑sentence explainer. Prefer 2–4 flagship projects with measurable impact and a live demo or code links. */}
                    Selected work with outcomes, architecture highlights, and takeaways.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <ProjectCards title={'Case Study #1'}
                                  subtitle={'Web-Based MIPS Emulator Front-End'}
                                  description={'Collaborated with a team to design and implement a modern web-based ' +
                                      'MIPS emulator to replace outdated tools like MARS.'}
                                  tags={["React ", "TypeScript ", "Front-End Development ", "UI/UX Design ", "Agile Development "]}
                    />

                    <ProjectCards title={'Case Study #2'}
                                  subtitle={'AI-Assisted Documentation with Fine-Tuned LLMs'}
                                  description={'Developed an AI system that generates high-quality documentation for ' +
                                      'codebases by fine-tuning open-source LLMs with domain-specific data.'}
                                  tags={["Python ", "Pytorch ", "Prompt Engineering ", "Data Cleaning "]}
                    />

                    <ProjectCards title={'Case Study #3'}
                                  subtitle={'Software Developer - Confidential Startup Project'}
                                  description={'Developing a mobile-first application with a focus on ' +
                                      'user onboarding, data management, and scalability.'}
                                  tags={["React Native ", "TypeScript ", "Supabase ", "Sql ", "Tailwind "]}
                    />

                </div>
            </div>
        </section>
    );
}