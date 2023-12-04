import { motion } from "framer-motion";


const Button1 = (props) => {
     return (
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
               <button className="bg-yellow-500 mt-8 h-12 w-40 rounded-[50px] hover:bg-yellow-600">{props.name}</button>
          </motion.div>
     )
}

export default Button1;