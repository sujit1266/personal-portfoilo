import Dot from "./dot";
import Resumelist from "./resumeList";


const Container = (props) => {
     return (
          <div className="h-auto w-full flex mt-10">
               <div className="w-[12px] h-auto ml-3 flex flex-col items-center mt-4">
                    <Dot />
                    <Dot />
                    <Dot />
               </div>
               <div className="h-auto w-[80%] ml-10">
                    <Resumelist name1={props.name11}
                         year={props.year1}
                         name2={props.name21}
                    />
                    <Resumelist
                         name1={props.name12}
                         year={props.year2}
                         name2={props.name22} />
                    <Resumelist
                         name1={props.name13}
                         year={props.year3}
                         name2={props.name23}/>
               </div>
          </div>
     )
}

export default Container;