import { ChevronLeft, ChevronRight } from "react-feather";
import imgCarousel from "../utils/imgCarousel";
import { useState, useEffect } from 'react';


const Carousel = () => {
    const[curr, setCurr]=useState(0);

    useEffect(()=>{
        const slideInterval=setInterval(next,3000)
        return()=>clearInterval(slideInterval);
    })

    const prev=()=>setCurr(curr===0?imgCarousel.length-1:curr-1);
    const next=()=>setCurr(curr===imgCarousel.length-1?0:curr+1);
    
    return(
        <div className="relative overflow-hidden h-[64rem] w-[45rem]">
        <div
        className="m-[0]  flex relative transition transform ease-in-out duration-500"
        style={{
          background:
            "linear-gradient(180deg, #0A0808 0%, rgba(51, 51, 51, 0.00) 100%)",
          transform:`translateX(-${curr*100}%)`
        }}
      >{imgCarousel.map((img)=><img className="h-[64rem] w-[45rem]" src={img}/>)}
        </div>
            {/* <img className="w-[45rem] h-[64rem]" src={children}/> */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
            <button className=" rounded-full shadow bg-white/50 text-gray-800 hover:bg-white" onClick={prev}>
                <ChevronLeft size={30}/>
            </button>
            <button className=" rounded-full shadow bg-white/50 text-gray-800 hover:bg-white" onClick={next}>
                <ChevronRight size={30}/>
            </button>
            </div>
            <div className="absolute bottom-4 left-4 right-0">
                <div className="flex justify-start items-center gap-2 ">
                    {imgCarousel.map((m,i)=>(<div onClick={()=>{setCurr(i)}} className={`transition-all w-3 h-3 rounded-full hover:cursor-pointer ${curr===i?"bg-[#F45725] p-2":"bg-white/60"}`}>
                        
                    </div>))}
                </div>

            </div>
        </div>
    )
}
export default Carousel;
