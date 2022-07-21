import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomHighlightA from './CustomHighlightA'
import hightlightData from '../data/hightlightData'

export default function SectionB() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-fit min-h-[50vh] py-[10vw] px-[15vw] bg-cyan-800 '>
        <div className="flex justify-center lg:justify-between items-center flex-wrap w-full h-fit min-h-[100px] p-4 mb-[4rem]">
            <div className="flex flex-col justify-between max-w-[500px] m-4" style={{aspectRatio:'1/0.65'}}>
                <h1 className='font-black' style={{fontSize:'calc(2rem + 1.5vw)'}}>
                    Speaking.
                </h1>
                <p className='my-4 text-[1.1rem]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas deserunt facere quae voluptatum nostrum.
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur qui ipsa iusto illo laboriosam maiores!
                </p>
                <Link href={'#'}>
                    <a className='underline'>
                        Check out my videos and upcoming talks.
                    </a>
                </Link>
            </div>
            <div className="w-[25vw] relative whiteShadow z-[10] min-w-[330px]" style={{aspectRatio:'1.08/1'}}>
                <Image src={'/img/speaker.jpg'} alt='Abdurrahman Adebisi Aderinto' layout='fill'/>
            </div>
        </div>

        <br />

        {hightlightData.map((data, index) => {
            return(
                <CustomHighlightA
                    key={index}
                    cat={data.cat}
                    title={data.title}
                >
                    {data.body.map((txt, i) => {
                        return (
                            <div key={i}>
                                <p>{txt}</p> <br/>
                            </div>
                        )
                    })}
                </CustomHighlightA>
            )
        })}
    </div>
  )
}
