import React from 'react'
import Nav from './Nav'
import Image from 'next/image'
function Home() {
  return (
    <div className='flex    min-h-screen '>
      <div className=' bg-blue-100 w-screen h-full'>
        <Nav />
        <div>
          <div className=' w-5/6 mx-auto mt-40'>
            <h1 className=' text-7xl font-bold text-gray-700'>I'm Usama</h1>
            <p className=' text-gray-900  leading-relaxed text-[20px] py-5 '>
              Full Stack Web Developer with 4 years of experience, I have been
              working on complex web applications for the past few years. My
              goal is to be at the forefront of technology so that I can
              contribute as much as possible towards its development.
            </p>
          </div>
          {/* Experience */}
          <div className='w-5/6 mx-auto mt-10'>
            <h1 className=' text-4xl font-bold text-gray-600'>EXPERIENCE</h1>
            <ul className=' flex flex-col gap-y-2 py-5 px-3 list-disc'>
              <li>
                Worked as front-end developer in bits pro web development
                company
              </li>
              <li>Freelance Web Developer</li>
            </ul>
          </div>
          {/* Education */}
          <div className='w-5/6 mx-auto mt-10'>
            <h1 className=' text-4xl font-bold text-gray-600'>EDUCATION</h1>
            <ul className=' flex flex-col gap-y-2 py-5 px-3 list-disc text-lg'>
              <li>
                Bachelor of Computer Science - Isra University • Hyderabad •
                2015
              </li>
              <li>MERN Stack Course Udemy - 2014</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' relative  w-full h-screen hidden md:flex '>
        <Image
          className=' absolute  '
          src='images/usama.png'
          objectFit='cover'
          layout='fill'
        />
      </div>
    </div>
  )
}

export default Home
