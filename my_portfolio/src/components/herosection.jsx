import heroLogo from "../images/Hero-section-logo.png";
import Button1 from "./button1";
import { BiLogoLinkedinSquare, BiLogoInstagramAlt } from "react-icons/bi";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import {motion} from "framer-motion";
import {Link} from "react-scroll";

const HeroSection = () => {
     return (
          <div id="home" className="flex w-full justify-evenly h-auto">
               <div className="flex justify-between h-auto lg:w-[1100px] md:w-[877px] w-full ml-5 os:ml-14 md:ml-0">
                    <div className="h-auto mt-52">
                         <motion.p animate={{y: 0,opacity: 1}} initial={{y: 100, opacity: 0}} transition={{ease: "easeInOut", duration: 0.8, delay: 0.2}} className="text-yellow-500 text-3xl">Hello I'm</motion.p>
                         <motion.p animate={{y: 0,opacity: 1}} initial={{y: 100, opacity: 0}} transition={{ease: "easeInOut", duration: 0.8, delay: 0.3}} className="text-white os:text-9xl text-8xl font-black">
                              Sujit
                         </motion.p>
                         <motion.p animate={{y: 0,opacity: 1}} initial={{y: 100, opacity: 0}} transition={{ease: "easeInOut", duration: 0.8, delay: 0.3}} className="text-white os:text-9xl text-8xl font-black">Maity</motion.p>
                         <motion.p animate={{y: 0,opacity: 1}} initial={{y: 100, opacity: 0}} transition={{ease: "easeInOut", duration: 0.8, delay: 0.4}} className="text-gray-400 text-3xl mt-8 ">Frontent Developer</motion.p>
                         {/* <motion.button animate={{y: 0,opacity: 1}} initial={{y: 100, opacity: 0}} transition={{ease: "easeInOut", duration: 0.8, delay: 0.5}} className="bg-yellow-500 mt-8 h-12 w-40 rounded-[50px]">Hire Me</motion.button> */}
                         <motion.div animate={{y: 0,opacity: 1}} initial={{y: 100, opacity: 0}} transition={{ease: "easeInOut", duration: 0.8, delay: 0.5}} className="w-40"><Link to="contact" spy={true} smooth={true} offset={50} duration={1000}><Button1 name="Hire Me"/></Link></motion.div>
                         <motion.div animate={{y: 0,opacity: 1}} initial={{y: 100, opacity: 0}} transition={{ease: "easeInOut", duration: 0.8, delay: 0.6}} className=" h-[80px] w-[100%] mt-7 mr-4 rounded-s-[50px] flex">
                              <div className="mt-4 h-12 w-12 border-[1px] rounded-[50%] border-gray-600 bg-black hover:w-32 hover:rounded-[50px] hover:duration-300 overflow-hidden cursor-pointer ease-in">
                                   <BiLogoLinkedinSquare className="text-gray-400 text-3xl m-[9px] inline-block" />
                                   <span className="text-white ml-0 font-bold">Linkedin</span>
                              </div>
                              <div className="mt-4 h-12 w-12 border-[1px] rounded-[50%] border-gray-600 bg-black ml-6 hover:w-36 hover:rounded-[50px] hover:duration-300 overflow-hidden cursor-pointer ease-in">
                                   <BiLogoInstagramAlt className="text-gray-400 text-3xl m-[9px] inline-block" />
                                   <span className="text-white ml-0 font-bold">Instagram</span>
                              </div>
                              <div className="mt-4 h-12 w-12 border-[1px] rounded-[50%] border-gray-600 bg-black ml-6 hover:w-28 hover:rounded-[50px] hover:duration-300 overflow-hidden cursor-pointer ease-in">
                                   <AiOutlineTwitter className="text-gray-400 text-3xl m-[9px] inline-block" />
                                   <span className="text-white ml-0 font-bold">Twitter</span>
                              </div>
                              <div className="mt-4 h-12 w-12 border-[1px] rounded-[50%] border-gray-600 bg-black ml-6 hover:w-28 hover:rounded-[50px] hover:duration-300 overflow-hidden cursor-pointer ease-in">
                                   <AiFillGithub className="text-gray-400 text-3xl m-[9px] inline-block" />
                                   <span className="text-white ml-0 font-bold">Github</span>
                              </div>
                         </motion.div>
                    </div>
                    <motion.div animate={{x: 0,opacity: 1}} initial={{x: 100,opacity: 0}} transition={{ease: "easeInOut", duration: 1, delay: 1}} style={{
                         backgroundSize: 'cover',
                         backgroundImage: `url(${heroLogo})`
                    }}
                         className="h-[738px] w-[600px] hidden md:block rounded-lg">
                    </motion.div>
               </div>

          </div>
     )
}

export default HeroSection;