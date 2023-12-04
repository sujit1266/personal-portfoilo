import Heading from "./Heading";
import Headingbar from "./heading-bar";
import Skill from "./eachSkill";
import Skillcard from "./skillCard";



const Myskills = () => {
     return (
          <div id="skills" className="flex justify-evenly w-full md:mt-0">
               <div className=" w-[80%] md:w-[877px] lg:w-[1100px] h-auto mt-36">
                    <Heading name="SKILLS"/>
                    <Headingbar/>
                    <div className="w-full md:w-[877px] lg:w-[1100px] h-auto mt-10 grid grid-rows-4 grid-cols-2 md:grid-rows-2 md:grid-cols-4 gap-10">
                         <Skill img={Skillcard[0].image} name={Skillcard[0].id} Delay={0.4}/>
                         <Skill img={Skillcard[1].image} name={Skillcard[1].id} Delay={0.5}/>
                         <Skill img={Skillcard[2].image} name={Skillcard[2].id} Delay={0.6}/>
                         <Skill img={Skillcard[3].image} name={Skillcard[3].id} Delay={0.7}/>
                         <Skill img={Skillcard[4].image} name={Skillcard[4].id} Delay={0.8}/>
                         <Skill img={Skillcard[5].image} name={Skillcard[5].id} Delay={0.9}/>
                         <Skill img={Skillcard[6].image} name={Skillcard[6].id} Delay={1}/>
                         <Skill img={Skillcard[7].image} name={Skillcard[7].id} Delay={1.1}/>
                    </div>
               </div>
          </div>
     )
}


export default Myskills;