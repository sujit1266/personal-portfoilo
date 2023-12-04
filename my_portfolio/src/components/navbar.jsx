import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Menu from "./menu";

const Navbar = () => {
     const [open, setOpen] = useState(false)

     const togglenavbar=()=>{
          setOpen(!open)
     }

     return (
          <div className="flex w-full justify-evenly bg-slate-950 fixed bg-opacity-70 z-10">
               <div className="flex w-full vs:w-[877px] lg:w-[1100px] h-20 justify-between flex-wrap">
                    <div className="flex">
                         <img className="mt-6 h-12 ml-3 md:ml-0" src="./profile-photo.png" alt="logo"></img>
                         <p className="text-5xl ml-4 md:ml-4 mt-5 font-medium text-white">Sujit</p>
                    </div>
                    <button onClick={togglenavbar} className={`mr-4 md:mr-0 md:hidden mt-5 text-5xl text-gray-500 bg-slate-950 bg-opacity-70`}>{open ? <RxCross2/> : <AiOutlineMenu />}</button>
                    {
                         open && <Menu />
                    }
                    <div className="hidden md:block">
                         <ul className="flex ml-32 mt-7">
                              <li className="hidden md:block font-medium text-white hover:text-yellow-500 cursor-pointer"><Link to="home" spy={true} smooth={true} offset={50} duration={1000}>HOME</Link></li>
                              <li className="hidden md:block font-medium text-white ml-12 hover:text-yellow-500 cursor-pointer"><Link to="about" spy={true} smooth={true} offset={-50} duration={1000}>ABOUT</Link></li>
                              <li className="hidden md:block font-medium text-white ml-12 hover:text-yellow-500 cursor-pointer"><Link to="skills" spy={true} smooth={true} offset={50} duration={1000}>SKILLS</Link></li>
                              <li className="hidden md:block font-medium text-white ml-12 hover:text-yellow-500 cursor-pointer"><Link to="resume" spy={true} smooth={true} offset={50} duration={1000}>RESUME</Link></li>
                              <li className="hidden md:block font-medium text-white ml-12 hover:text-yellow-500 cursor-pointer"><Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>CONTACT</Link></li>
                              <li className="hidden lg:block font-medium text-white ml-12">|</li>
                         </ul>
                    </div>
                    <BsTelephoneFill className="hidden lg:block text-xl mt-8 ml-12 text-white" />
                    <a href="https://www.google.com" className="mt-7 ml-4 text-yellow-500 hidden lg:block">+91 9677563736</a>
               </div>
          </div>
     )
}


export default Navbar;