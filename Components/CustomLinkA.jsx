import React from 'react'
import Link from 'next/link'

export default function CustomLinkA({txt, link}) {
  return (
    <div className='flex items-center justify-center absolute top-[65%] left-[20%] w-fit z-10 whiteShadowParent'>
        <Link href={link} passHref>
            <a className='w-full h-full bg-cyan-700 p-3 border-2 border-white font-black tracking-wider whiteShadow transition-all duration-500' style={{fontSize:'calc(0.8rem + 0.5vw)'}}>
                {txt}
            </a>
        </Link>
    </div>
  )
}
