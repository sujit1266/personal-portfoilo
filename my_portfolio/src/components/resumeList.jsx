



const Resumelist = (props) => {
     return (
          <div className="h-[214px] w-auto">
               <p className="text-4xl text-yellow-500">{props.name1}</p>
               <p className="text-xl text-gray-400 mt-2">{props.year}</p>
               <p className="text-2xl mt-3 text-gray-300">{props.name2}</p>
          </div>
     )
}

export default Resumelist;