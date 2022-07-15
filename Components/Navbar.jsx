import React from 'react'
import Link from 'next/link'
import HeaderLinks from '../data/HeaderLinks'
import {FaBars} from 'react-icons/fa'
import SwitchTheme from './SwitchTheme';

export default function Navbar() {
  return (
    <div className='flex items-center justify-center absolute w-full min-h-[5vh] p-4 z-[20]'>
        <div className="flex items-center justify-between w-[85%] h-[10vh]">
            <h1 className='font-bold tracking-wider' style={{fontSize:'calc(1.3rem + 0.5vw)'}}>Arhyel</h1>

            <ul className='hidden lg:flex items-center justify-center'>
               {HeaderLinks.map((link, index) => {
                  return(<Link key={index} href={link.link} passHref>
                      <li className='mx-3 lowercase font-semibold text-[1.1rem] cursor-pointer'>
                          {link.text}
                      </li>
                  </Link>)
               })} 
               <SwitchTheme/>
            </ul>

            <FaBars className='flex cursor-pointer lg:hidden'/>
        </div>
    </div>
  )
}
