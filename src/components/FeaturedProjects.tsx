import ProjectCards from "./ProjectCards.tsx";
import { motion, type Variants } from "framer-motion";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 ,
        transition: { duration: 1.6, ease: "easeOut" }
    },
};

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.8,
            delayChildren: 0.05,
        },
    },
};

const card: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
};

export default function Projects(){
    return(
        <motion.section
            id="projects"
            className="mt-12 md:mt-4 lg:mt-2 md:py-[75px]"
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <motion.div
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.9,          // needs ~60% of the element in view
                        margin: "0px 0px -25% 0px", // delay trigger until it's a bit lower
                    }}
                >
                    <h2
                        className="text-3xl sm:text-4xl font-semibold tracking-tight px-5 py-2 rounded-2xl
                        bg-white/60 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/10
                        shadow-smtext-gray-900 dark:text-white"
                    >
                        <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                          Featured Projects / Case Studies
                        </span>
                        <span className="block text-sm text-gray-500 dark:text-gray-400 font-normal mt-1">
                          Outcomes, architecture highlights, and takeaways.
                        </span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}

                >
                    <motion.div
                        variants={card}
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <ProjectCards
                            title={"Web-Based MIPS Emulator Front-End"}
                            description={
                                "Collaborated with a team to design and implement a modern web-based " +
                                "MIPS emulator to replace outdated tools like MARS."
                            }
                            tags={[
                                "React ",
                                "TypeScript ",
                                "UI/UX Design ",
                                "Agile Development ",
                                "Front-End Development ",
                            ]}
                        />
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <ProjectCards
                            title={"AI-Assisted Documentation with Fine-Tuned LLMs"}
                            description={
                                "Developed an AI system that generates high-quality documentation for " +
                                "codebases by fine-tuning open-source LLMs with domain-specific data."
                            }
                            tags={[
                                "Python ",
                                "Pytorch ",
                                "Data Cleaning ",
                                "Prompt Engineering ",
                            ]}
                        />
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <ProjectCards
                            title={"Software Developer - Confidential Startup Project"}
                            description={
                                "Developing a mobile-first application with a focus on " +
                                "user onboarding, data management, and scalability."
                            }
                            tags={[
                                "React Native ",
                                "TypeScript ",
                                "Supabase ",
                                "Sql ",
                                "Tailwind ",
                            ]}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
