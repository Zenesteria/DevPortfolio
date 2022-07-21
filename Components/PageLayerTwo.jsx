import React from 'react'
import Link from 'next/link'
import {FaTwitter, FaLinkedin} from 'react-icons/fa'

export default function PageLayerTwo() {
  return (
    <div className=' flex justify-center items-center fixed bottom-0 w-full h-screen bg-green-200  z-[-1] px-5 '>
        <div className=' flex items-center h-[80vh] bg-white p-[100px] pt-[70px] w-[80vw] mx-auto text-black'>
          <div className=' relative h-full flex flex-col'>
            <h1 className='text-2xl mb-8 font-bold'>{"I'm always up for a chat "}</h1>
            <div className='flex text-xl mb-5'>
              <Link href={'mailto:arhyeltarfa2@gmail.com'} >
                    <a className='mr-1 font-bold border-b-2 border-green-200'>{"Pop me an email"}</a>
                </Link>
              <p>{"at arhyeltarfa2@gmail.com"}</p>
            </div>
            <p className='text-xl mb-2'>{"or give me a shoutout on social media"}</p>
            <div className='flex '>
            <Link href={"https:twitter.com/Arhyel0"}>
              <a >
                <FaTwitter/>
              </a>
            </Link>
            <Link href={"https://www.linkedin.com/in/arhyel-patrick-0660b8228/"}>
              <a >
                <FaLinkedin />
              </a>
            </Link>
            </div>
            <h1 className='font-black absolute left-0 bottom-0 text-6xl mb-[-110px] '>{'Hey There!'}</h1>
         </div>

         <div className='w-[300px] h-[300px] mx-auto rounded-full rounded-t- bg-slate-500'>
        
        </div>
        </div>

    </div>
  )
}
