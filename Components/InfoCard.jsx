import React, { useEffect } from 'react'
// import moveEle from '../util/move'
import Link from 'next/link'

export default function InfoCard({title, cat, txt, link, pos}) {
    useEffect(() => {
        // moveEle()
    })
  return (
    <div data-move="object" className='w-fit max-w-[450px] min-w-[330px] h-fit min-h-[200px] border-2 m-7 border-white rounded-2xl transition-none'>
        <div className="flex w-full h-fit p-2 border-b-2 border-white">
            <div className="bg-white rounded-full w-[15px] mx-2" style={{aspectRatio:'1/1'}}> </div>
            <div className="bg-white rounded-full w-[15px] mx-2" style={{aspectRatio:'1/1'}}> </div>
            <div className="bg-white rounded-full w-[15px] mx-2" style={{aspectRatio:'1/1'}}> </div>
        </div>
        <div className="flex flex-col justify-between p-4">
            <h1 className='font-black' style={{fontSize:'calc(0.8rem + 1vw)'}}>{title}</h1>
            <p className='max-w-[400px] my-2'>
                {txt}
            </p>
            <ul className="flex items-center justify-between my-3">
                <li>
                    {cat}
                </li>
                <Link href={link} passHref>
                    <li className=' cursor-pointer'>
                        {'Read Post >'}
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
