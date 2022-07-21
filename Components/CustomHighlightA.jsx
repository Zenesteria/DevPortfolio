import React from 'react'
import hightlightData from '../data/hightlightData'

export default function CustomHighlightA({cat, title, children}) {
  return (
    <div className="flex flex-wrap justify-between w-full my-10">
        <h1 className='shadowsTxt text-[1.1rem] flex-[0.15]'>
            {cat}
        </h1>
        <div className="w-[200px] border-[1px] m-4 h-fit border-white"></div>
        <div className="flex flex-col flex-wrap flex-1 min-h-[20vh] min-w-[330px] mx-4">
            <h1 className='font-black mb-4' style={{fontSize:'calc(1rem + 1vw)'}}>
                {title}
            </h1>
            {children}
        </div>
    </div>
  )
}
