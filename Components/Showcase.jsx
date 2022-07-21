import React from 'react'
import Image from 'next/image'

export default function Showcase() {
  return (
    <div className='flex w-full'>
          <div className="hidden lg:flex flex-[0.45] relative dark:bg-cyan-600 h-screen">
             <div className="absolute w-[35vw] top-[15%] right-[-40%]" style={{aspectRatio:'0.89/1'}}>
                <Image src={'/img/comp.svg'} layout='fill' alt='computer'/>
             </div> 
          </div>
          
          <div className="flex items-center justify-center lg:justify-end flex-1 h-screen bg-cyan-400 dark:bg-transparent">
                <div className="flex flex-col items-center justify-center relative w-[65%] mr-[5vw] text-center lg:text-left">
                    <div className=" self-start rotate-[-3deg] shadowsTxt" style={{fontSize:'calc(0.8rem + 0.5vw)'}}>👋{"Hi, I'm arhyel"}</div>
                    <h1 className='rubikTxt' style={{fontSize:'calc(1.5rem + 1.5vw)'}}>
                      I like making <span className='outlineTxt'>fun</span>, interactive things with code. I also <span className='outlineTxt'>talk</span> & <span className='outlineTxt'>write</span> about those things.
                    </h1>
                </div>
          </div>
    </div>
  )
}
