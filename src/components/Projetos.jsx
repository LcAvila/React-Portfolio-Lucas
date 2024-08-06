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
                <div key={index} className="sm:space-x-4 mb-10 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <img src={project.image}
                            width={250}
                            height={250}
                            alt={project.title}
                            className="mb-8 rounded-2xl border-2 border-neutral-800 p-2" />

                    </motion.div>
                    

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="text-2xl mb-4 font-semibold">{project.title}</h6>

                        <a href="https://github.com/LcAvila/siteC" target="blank">
                            <motion.button
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1.5 }}
                                className="mt-4 mb-6 hover:text-cyan-400 text-sm font-bold">
                                {project.botao1} 
                            </motion.button></a>

                            <a href="https://github.com/LcAvila/Projeto-Cardapio" target="blank">
                            <motion.button
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1.5 }}
                                className="mt-4 mb-6 mr-6 hover:text-cyan-400 text-sm font-bold">
                                {project.botao2} 
                            </motion.button></a>

                            <a href="https://cardapio-iota-two.vercel.app/" target="blank">
                            <motion.button
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1.5 }}
                                className="mt-4 mb-6 hover:text-red-500 text-sm font-bold">
                                {project.website} 
                            </motion.button></a>

                
                        <p className="mb-6 font-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="rounded-3xl p-2 mr-2 py-1 bg-neutral-900 text-sm text-write">
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

