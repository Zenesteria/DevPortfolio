import React from 'react'
import SectionA from './SectionA'
import SectionB from './SectionB'
import Showcase from './Showcase'

export default function PageLayerOne() {
  return (
    <div className='flex flex-col w-full min-h-[200vh] h-fit mb-[100vh] bg-white dark:bg-[rgb(14,12,62)]'>
        <Showcase/>
        <SectionA/>
        <SectionB/>
    </div>
  )
}
