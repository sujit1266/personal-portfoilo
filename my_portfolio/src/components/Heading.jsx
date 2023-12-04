import {motion} from "framer-motion";




const Heading = (props) => {
     return (
          <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="lg:w-[1100px] md:w-[877px] w-full h-auto flex justify-center">
               <p className="text-yellow-500 text-3xl font-semibold">{props.name}</p>
          </motion.div>
     )
}

export default Heading;