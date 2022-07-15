import React from 'react'

export default function PageLayerOne() {
  return (
    <div className='flex w-full min-h-[200vh] h-fit mb-[100vh] bg-white dark:bg-[rgb(14,12,62)]'>
          <div className="flex flex-[0.6] dark:bg-cyan-600 h-screen">
              
          </div>
          <div className="flex items-center justify-center flex-1 h-screen bg-cyan-400 dark:bg-transparent">
                <div className="flex flex-col items-center justify-center w-[55%]" style={{aspectRatio:'1/1'}}>
                    <h1 className='text-[2.5rem]' style={{fontFamily:"'Rubik Moonrocks', cursive"}}>
                      I like making fun, interactive things with code. I also talk & write about those things.
                    </h1>
                </div>
          </div>
    </div>
  )
}
