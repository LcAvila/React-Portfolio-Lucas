import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projetos = () => {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Projetos
            </motion.h2>
            <div>{PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <img src={project.image}
                            width={150}
                            height={150}
                            alt={project.title}
                            className="mb-6 rounded" />
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 font-neutral-400">{project.description}</p>
                        <a href="https://github.com/LcAvila/siteC" target="blank"><motion.h6
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.5 }}
                            className="text-center font-bold text-purple-600">
                            {project.botao}
                        </motion.h6></a>

                        {project.technologies.map((tech, index) => (
                            <span key={index} className="p-4 mr-2 lg:w-1/2 rounded bg-neutral-900 px-5 py-1 text-sm font-medium text-purple-800">
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                </div>

            ))}
            </div>
        </div>
    );
};

export default Projetos;

