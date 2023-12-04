import {motion} from "framer-motion";


const Footer=()=>{
     return (
          <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 ,}} transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4}} viewport={{once: true}}  className="w-full h-[50px] bg-gray-900 flex justify-center items-center mt-3">
               <p className=" text-base text-gray-400">@ 2023, Developed by Sujit, All right reserved</p>
          </motion.div>
     )
}


export default Footer;