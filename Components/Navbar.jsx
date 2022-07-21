import React, { useEffect, useState } from 'react'
import HeaderLinks from '../data/HeaderLinks'
import {FaBars} from 'react-icons/fa'
import SwitchTheme from './SwitchTheme';
import NavLink from './NavLink';


export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
              setSticky(true);
          }else{
              setSticky(false);
          }
      })
  })
  return (
    <div className='flex items-center justify-center fixed w-full min-h-[5vh] z-[20]' style={sticky ? {padding:'0',backgroundColor:'white',color:'rgb(32,42,68)',borderBottom:'5px solid rgb(32,42,68)'} : {padding:'1rem'}}>
        <div className="flex items-center justify-between w-[85%] h-[10vh]">
            <h1 className='font-bold tracking-wider' style={{fontSize:'calc(1.3rem + 0.5vw)'}}>Arhyel</h1>
            <ul className='hidden lg:flex items-center justify-center'>
               {HeaderLinks.map((link, index) => {
                  return(<NavLink
                    key={index}
                    linkPath={link.link}
                    txt={link.text}
                  />)
               })} 
               <SwitchTheme/>
            </ul>

            <FaBars className='flex cursor-pointer lg:hidden'/>
        </div>
    </div>
  )
}
