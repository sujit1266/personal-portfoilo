import {motion} from "framer-motion";


const Headingbar = () => {
     return (
          <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="lg:w-[1100px] md:w-[877px] w-full h-auto flex justify-center mt-3">
               <div className="h-[1.5px] w-[190px] flex justify-center rounded-sm bg-gray-700">
                    <div className="h-[1.5px] w-[80px] bg-yellow-500 rounded-md"></div>
               </div>
          </motion.div>
     )
}

export default Headingbar;