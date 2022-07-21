import React from 'react'
import Link from 'next/link'

export default function NavLink({linkPath, txt}) {
  return (
    <Link href={linkPath} passHref>
        <li className="relative mx-3 lowercase font-semibold text-[1.1rem] cursor-pointer after:content-[''] after:w-0 after:absolute after:border-b-2 after:border-cyan-300 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300">
            <a>
                {txt}
            </a>
        </li>
    </Link>
  )
}
