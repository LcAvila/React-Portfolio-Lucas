import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Perfil.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }

    },
});

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
});

const Hero = () => {
    return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
                    lg:text-8xl">
                        Lucas Ávila
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Desenvolvedor Front-End
                    </motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-xl py-6 font-light tracking-tight">
                        {HERO_CONTENT}
                    </motion.p>
                    
                    <motion.a 
                    variants={container(1.5)}
                    initial="hidden"
                    animate="visible"

                    href="src/curriculo/Curriculo Lucas Ávila.pdf" download>
                         <button class="relative mt-6 group overflow-hidden mb-8 pl-6 h-14 flex space-x-6 items-center rounded-3xl bg-violet-800">
                        <span class="relative uppercase text-base text-white">Baixar Curriculo</span>
                        <div aria-hidden="true" class="w-14 bg-violet-900 transition duration-300 -translate-y-7 group-hover:translate-y-7">
                        <div class="h-14 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto fill-white " viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        </div>
                        <div class="h-14 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto fill-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        </div>
                        </div>
                        </button>
                    </motion.a>
                    
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-6">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex justify-center">
                    <motion.img
                        variants={iconVariants(1.5)}
                        initial="initial"
                        animate="animate"
                        src={profilePic}
                        alt="Lucas Avila" />
                </motion.div>
            </div>
        </div>
    </div>;

};

export default Hero;
