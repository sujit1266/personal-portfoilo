import Heading from "./Heading";
import Headingbar from "./heading-bar";
import { FaUserGraduate } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import Container from "./containerforResume";
import {motion} from "framer-motion"

const Resume = () => {
     return (
          <div id="resume" className="flex justify-evenly w-full">
               <div className="w-[80%] md:w-[877px] lg:w-[1100px] h-auto mt-36">
                    <Heading name="RESUME" />
                    <Headingbar />
                    <div className="w-full h-auto flex mt-10 flex-col md:flex-row">
                         <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 ,}} transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4}} viewport={{once: true}} className=" w-full md:w-[50%] h-auto">
                              <div className="h-auto w-full flex">
                                   <FaUserGraduate className="text-4xl text-gray-500" />
                                   <p className="text-4xl text-white ml-5">Education</p>
                              </div>
                              <Container
                                   name11="B.Tech of ECE"
                                   year1="2020-2024"
                                   name21="Calcutta Institute of Engineering and Management"
                                   name12="X"
                                   year2="2016-2018"
                                   name22="Usatpur Saudamini Vidyamandir"
                                   name13="XII"
                                   year3="2018-2020"
                                   name23="Usatpur Saudamini Vidyamandir"
                              />
                         </motion.div>
                         <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 ,}} transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4}} viewport={{once: true}} className=" w-full md:w-[50%] h-auto mt-20 md:mt-0">
                              <div className="h-auto w-full flex">
                                   <FaProjectDiagram className="text-4xl text-gray-500" />
                                   <p className="text-4xl text-white ml-5">Projects</p>
                              </div>
                              <Container
                                   name11="Amazon Clone"
                                   year1="July, 2023-August, 2023"
                                   name21="Using HTML,CSS and JS"
                                   name12="To Do List"
                                   year2="August, 2023"
                                   name22="Using HTML,CSS and JS"
                                   name13="Personal Portfolio"
                                   year3="November, 2023"
                                   name23="Using HTML,Tailwind and React"
                              />
                         </motion.div>
                    </div>
               </div>
          </div>
     )
}

export default Resume;