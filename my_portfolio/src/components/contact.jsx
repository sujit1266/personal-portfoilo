import Heading from "./Heading";
import Headingbar from "./heading-bar";
import Button1 from "./button1";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion"

const Contact = () => {
     return (
          <div id="contact" className="flex justify-evenly w-full h-auto">
               <div className="w-[80%] md:w-[877px] lg:w-[1100px] h-auto mt-36">
                    <Heading name="CONTACT" />
                    <Headingbar />
                    <div className="w-full h-auto mt-10 md:flex">
                         <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0, }} transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="w-full md:w-[50%] h-auto">
                              <p className="text-4xl text-white">Message Me</p>
                              <form action="action.php" className="flex flex-col">
                                   <label for="your_name">
                                        <input className="mt-7 bg-gray-900 border-slate-800 border-[1px] w-full h-[50px] rounded-lg pl-5 placeholder:text-gray-600 focus:outline-yellow-500 outline-none text-white" type="text" id="your_name" name="your_name" placeholder="Your Name"></input>
                                   </label>
                                   <label for="your_email">
                                        <input className="mt-7 bg-gray-900 border-slate-800 border-[1px] w-full h-[50px] rounded-lg pl-5 placeholder:text-gray-600 focus:outline-yellow-500 outline-none text-white" type="text" id="your_email" name="your_email" placeholder="Your Email"></input>
                                   </label>
                                   <label for="your_subject">
                                        <input className="mt-7 bg-gray-900 border-slate-800 border-[1px] w-full h-[50px] rounded-lg pl-5 placeholder:text-gray-600 focus:outline-yellow-500 outline-none text-white" type="text" id="your_subject" name="your_subject" placeholder="Your Subject"></input>
                                   </label>
                                   <textarea className="mt-7 bg-gray-900 border-slate-800 border-[1px] w-full h-[200px] rounded-lg pl-5 placeholder:text-gray-600 pt-3 focus:outline-yellow-500 outline-none text-white" name="your message" id="your_message" placeholder="Your Message"></textarea>
                              </form>
                              <Button1 name="Send Message" />
                         </motion.div>
                         <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0, }} transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="w-full md:w-[50%] h-auto mt-14 md:mt-0 mb-5 md:mb-0">
                              <p className="text-4xl text-white ml-5">Contact Info</p>
                              <p className="text-white ml-5 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.</p>
                              <div className="flex w-full h-[20%] mt-7">
                                   <div className="w-[20%] h-auto flex justify-center items-center">
                                        <div className="p-3 border-[1px] border-gray-500 rounded-full flex justify-center items-center hover:border-yellow-500">
                                             <MdEmail className="text-2xl text-gray-500" />
                                        </div>
                                   </div>
                                   <div className="w-[80%] h-full pl-5 os:pl-0">
                                        <p className="text-white text-3xl">Email</p>
                                        <p className="text-gray-400 mt-3">sujitnnnn327@gmail.com</p>
                                        <p className="text-gray-400 mt-1">sujitssss7860@gmail.com</p>
                                   </div>
                              </div>
                              <div className="flex w-full h-[20%] mt-7">
                                   <div className="w-[20%] h-full flex justify-center items-center">
                                        <div className="p-3 border-[1px] border-gray-500 rounded-full flex justify-center items-center hover:border-yellow-500">
                                             <FaPhone className="text-2xl text-gray-500" />
                                        </div>
                                   </div>
                                   <div className="w-[80%] h-full pl-5 os:pl-0">
                                        <p className="text-white text-3xl">Phone</p>
                                        <p className="text-gray-400 mt-3">+91 9677563736</p>
                                        <p className="text-gray-400 mt-1">+91 9756432867</p>
                                   </div>
                              </div>
                              <div className="flex w-full h-[20%] mt-7">
                                   <div className="w-[20%] h-full flex justify-center items-center">
                                        <div className="p-3 border-[1px] border-gray-500 rounded-full flex justify-center items-center hover:border-yellow-500">
                                             <FaLocationDot className="text-2xl text-gray-500" />
                                        </div>
                                   </div>
                                   <div className="w-[80%] h-full pl-5 os:pl-0">
                                        <p className="text-white text-3xl">Address</p>
                                        <p className="text-gray-400 mt-3">Madhugarh, Dum dum, 700030</p>
                                        <p className="text-gray-400 mt-1">Kolkat, West Bengal</p>
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               </div>
          </div>
     )
}

export default Contact;