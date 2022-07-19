import React from 'react'
import Link from 'next/link'

export default function PageLayerTwo() {
  return (
    <div className=' flex justify-center fixed bottom-0 w-full h-screen bg-green-200  z-[-1] px-5 '>
        <div className=' flex  h-[80vh] bg-white px-[100px] w-full mx-auto text-black'>
          <div className='h-full flex flex-col'>
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
              <svg className='w-3 h-3 m-5 ml-0' xmlns="http://www.w3.org/2000/svg" overflow="visible"><path d="M33.3 3.3c-1.1.5-2.2.8-3.4 1 .5-.1 1.3-1.1 1.7-1.5.5-.6.9-1.3 1.1-2 0-.1.1-.1 0-.2h-.2c-1.3.7-2.6 1.2-4 1.5-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.4-.4-.6-.5-1.2-.9-1.9-1.2-.9-.4-2-.5-3-.5-1 .1-2 .3-2.8.8-.9.5-1.7 1.1-2.3 1.9-.6.8-1.1 1.7-1.4 2.7-.2 1-.2 1.9-.1 2.9 0 .2 0 .2-.1.2-5.5-.8-10.1-2.8-13.8-7-.2-.2-.2-.2-.4 0-1.5 2.5-.7 6.4 1.3 8.3.3.3.5.5.8.7-.1 0-1.5-.1-2.7-.7-.2-.1-.2 0-.3.1v.8c.3 2.5 2 4.7 4.4 5.6l.9.3c-.5.1-1.1.2-2.6.1-.2 0-.3.1-.2.2 1.1 3.1 3.6 4.1 5.5 4.6.2 0 .5 0 .7.1-.6.9-2.7 1.6-3.7 2-1.8.6-3.8.9-5.7.7h-.5c-.1.1 0 .1.1.2.4.3.8.5 1.2.7 1.2.6 2.5 1.2 3.8 1.5 6.8 1.9 14.5.5 19.6-4.6 4-4 5.4-9.5 5.4-15 0-.2.3-.3.4-.4 1-.8 1.9-1.7 2.7-2.8.2-.2.2-.4.2-.5.1-.1.1-.1 0 0z" fill="currentcolor"></path></svg>
              </a>
            </Link>
            <Link href={"https://www.linkedin.com/in/arhyel-patrick-0660b8228/"}>
              <a >
              <svg className='w-3 h-3 m-5 ' xmlns="http://www.w3.org/2000/svg" overflow="visible"><path fill="currentcolor" d="M30.2 17.7v10.7c0 .3-.2.5-.5.5h-5.5c-.3 0-.5-.2-.5-.5v-9.9c0-2.6-.9-4.4-3.3-4.4-1.8 0-2.8 1.2-3.3 2.4-.2.4-.2 1-.2 1.6v10.4c0 .3-.2.5-.5.5h-5.5c-.3 0-.5-.2-.5-.5 0-2.6.1-15.5 0-18.5 0-.3.2-.5.5-.5h5.5c.3 0 .5.2.5.5v2.4-.1c.9-1.3 2.4-3.2 5.8-3.2 4.3-.2 7.5 2.6 7.5 8.6zM.9 28.9h5.5c.3 0 .5-.2.5-.5V9.9c0-.3-.2-.5-.5-.5H.9c-.3 0-.5.2-.5.5v18.5c0 .2.2.5.5.5zM6.9 3.5C6.9 5.4 5.3 7 3.4 7S0 5.4 0 3.5 1.6 0 3.5 0s3.4 1.6 3.4 3.5z"></path></svg>
              </a>
            </Link>
            </div>
         </div>

        </div>
    </div>
  )
}
