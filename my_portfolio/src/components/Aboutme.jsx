import { motion } from "framer-motion";
import Heading from "./Heading";
import Headingbar from "./heading-bar";
import AboutmeLogo from "../images/About-me-logo.png";
import Button1 from "./button1";

const PDF_FILE_URL="http://localhost:3000/my_resume.pdf"



const Aboutme = () => {
     const downloadFileaturl=(url)=>{
          const fileName=url.split("/").pop();
          const atag=document.createElement('a');
          atag.href=url;
          atag.setAttribute("download", fileName);
          document.body.appendChild(atag);
          atag.click();
          atag.remove();
     }
     return (
          <div id="about" className="flex justify-evenly w-full h-auto">
               <div className="h-auto lg:w-[1100px] md:w-[877px] w-full mt-36 ml-5 mr-5 os:ml-0 os:mr-0">
                    <Heading name="ABOUT ME"/>
                    <Headingbar/>
                    <div className="flex justify-center lg:w-[1100px] md:w-[877px] w-full h-auto">
                         <div className="vs:w-[650px] os:w-[400px] w-full md:w-full mt-10 md:flex md:justify-between h-auto">
                              <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 ,}} transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4}} viewport={{once: true}} className="h-[500px] vs:h-[700px] md:h-[550px] md:w-[48%] w-full opacity-50 rounded-lg" style={{
                                   backgroundSize: 'cover',
                                   backgroundImage: `url(${AboutmeLogo})`,
                              }}>

                              </motion.div>
                              <motion.div whileInView={{ z:0, scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} transition={{ ease: "easeInOut", siftness: 260, damping: 20, duration: 1, delay: 0.5 }} viewport={{once: true}} className="h-auto md:w-[48%] w-[100%] mt-14 md:mt-0">
                                   <p className="text-4xl text-white">Hi There! I'm Sujit Maity</p>
                                   <p className="text-2xl text-yellow-500 opacity-80 mt-4">Frontend Developer</p>
                                   <p className="text-xl text-gray-400 mt-4 font-serif">I am an aspiring Front End Developer looking to kick-start my career in the world of web development. With a solid foundation in HTML, CSS, and JavaScript, I am eager to contribute my skills and enthusiasm to create visually appealing and user-centric websites</p>
                                   <div className="text-gray-400 mt-8 flex justify-between w-full md:w-[400px]">
                                        <div>
                                             <p className="text-xl">Birthday</p>
                                             <p className="mt-3 text-xl">Phone</p>
                                             <p className="mt-3 text-xl">Email</p>
                                             <p className="mt-3 text-xl">From</p>
                                             <p className="mt-3 text-xl">Language</p>
                                        </div>
                                        <div>
                                             <p className="text-xl"> : August 20, 2002</p>
                                             <p className="mt-3 text-xl"> : +91 9737347365</p>
                                             <p className="mt-3 text-xl"> : sujitnnnn327@gmail.com</p>
                                             <p className="mt-3 text-xl"> : Panskura, West Bengal</p>
                                             <p className="mt-3 text-xl"> : Hindi, English, Bengali</p>
                                        </div>
                                   </div>
                                   <button onClick={()=>{downloadFileaturl(PDF_FILE_URL)}}><Button1 name="Download CV"/></button>
                              </motion.div>
                         </div>
                    </div>

               </div>
          </div>
     )
}

export default Aboutme;