import React from 'react'
import featuredposts from '../data/featuredposts' 
import CustomLinkA from './CustomLinkA'
import InfoCard from './InfoCard'



export default function SectionA() {
  const cardPos = [
    {
      x:'10'
    }
  ]
  return (
    <div className='relative w-full h-fit min-h-[130vh] p-[10vw] overflow-hidden bg-[rgb(54,72,107)]'>
        <h1 className='font-black tracking-wider' style={{fontSize:'calc(1.5rem + 2vw)'}}>
            Writing.
        </h1>

        {featuredposts.map((post, index) => {
                return (
                  <InfoCard
                    key={index}
                    title={post.title}
                    txt={post.body}
                    link={post.link}
                    pos={post.pos}
                  />
                )
        })}

        <CustomLinkA
          txt={'Read more. . .'}
          link={'#'}
        />
    </div>
  )
}
