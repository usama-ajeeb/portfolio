import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <nav className=' md:w-4/6 mx-auto my-2 md:my-4  text-blue-500 opacity-90 font-semibold text-base md:text-base lg:text-xl flex justify-center gap-x-8 py-3 border-b border-blue-300 shadow-md rounded-full bg-yellow-100'>
      <div className=' hover:opacity-60 transition delay-75 duration-300 ease-in-out'>
        <Link href='/'>Home</Link>
      </div>
      <div className=' hover:opacity-60 transition delay-75 duration-300 ease-in-out'>
        <Link href='/skills'>Skills</Link>
      </div>
      <div className=' hover:opacity-60 transition delay-75 duration-300 ease-in-out'>
        <Link href='/work'>Work</Link>
      </div>
    </nav>
  )
}

export default Nav
