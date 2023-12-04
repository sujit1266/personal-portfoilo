import {motion} from "framer-motion"



const Skill = (props) => {
     return (
          <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 ,}} transition={{ ease: "easeInOut", duration: 0.8, delay: (props.Delay) }} viewport={{once: true}} className="bg-gray-900 border-[1px] border-slate-800 rounded-md flex flex-col justify-center items-center">
               <motion.img whileHover={{ scale: 1.1 }} className="w-[50%] h-[50%] mt-10 border-[1px] border-gray-600 rounded-full hover:border-none hover:rounded-sm" src={props.img} alt="skill-image"></motion.img>
               <p className="text-gray-400 mt-3 mb-10">{props.name}</p>
          </motion.div>

     )
}

export default Skill;