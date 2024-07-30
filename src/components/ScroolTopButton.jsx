import { SlArrowUp } from "react-icons/sl";
import { motion } from "framer-motion";




function ScroolTopButton() {

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    const iconVariants = (duration) => ({
      initial: { x: -10},
      animate: {
          x: [5, -5],
          transition: {
              duration: duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
          }
      },
  });
    
    return(
        <motion.button
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            variants={iconVariants(1.5)}       
            animate="animate"
            className="fixed p-2 bottom-[40px] right-[40px] w-[50px] h-[50px] leading-[30px] border-[0] rounded-[50%] bg-neutral-900 text-[#fff] text-[2rem] font-semibold cursor-pointer [box-shadow:0_0_10px_#000]" onClick={handleClick}>
          <SlArrowUp/>
        </motion.button>
    );
    }
    
    
    export default ScroolTopButton; 