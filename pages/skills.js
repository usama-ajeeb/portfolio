import React from 'react'
import Nav from '../components/Nav'
import Image from 'next/image'

function skills() {
  return (
    <div className='flex  min-h-screen '>
      <div className=' bg-[#1D1D1D] w-screen '>
        <Nav />
        <div>
          <div className=' w-5/6 mx-auto mt-12'>
            <h1 className=' text-center text-6xl  text-white font-serif'>
              Skills
            </h1>
            <div className='flex flex-col py-12 gap-y-3 justify-center '>
              <div className='skills'>
                <p className='text-xl pb-2  text-white'>Front-end</p>
                <div className='border-2 border-green-300 w-9/12 absolute'></div>
                <div className='border-2 border-gray-700 '></div>
              </div>
              <div className='skills'>
                <p className='text-xl pb-2  text-white'>Back-end</p>
                <div className='border-2 border-red-400 w-6/12  absolute'></div>
                <div className='border-2 border-gray-700 '></div>
              </div>
              <div className='skills'>
                <p className='text-xl pb-2  text-white'>Java Script</p>
                <div className='border-2 border-yellow-500  w-8/12 absolute'></div>
                <div className='border-2 border-gray-700 '></div>
              </div>
              <div className='skills'>
                <p className='text-xl pb-2  text-white'>React</p>
                <div className='border-2 border-indigo-400  w-10/12 absolute'></div>
                <div className='border-2 border-gray-700 '></div>
              </div>
              <div className='skills'>
                <p className='text-xl pb-2  text-white'>Next.Js</p>
                <div className='border-2 border-blue-500 w-9/12  absolute'></div>
                <div className='border-2 border-gray-700 '></div>
              </div>
              <div className='skills'>
                <p className='text-xl pb-2  text-white'>Tailwindcss</p>
                <div className='border-2 border-pink-700 w-8/12  absolute'></div>
                <div className='border-2 border-gray-700 '></div>
              </div>
            </div>

            <p className='  text-white  leading-relaxed text-[20px]  '>
              <h1 className='py-2 text-2xl'>Why me?</h1>
              <ul className='list-disc text-[#08FDD8]'>
                <li>Deliver quality solutions on time</li>
                <li>
                  Develop complex web applications that are scalable,
                  high-performing and user friendly.
                </li>
                <li>
                  Worked as an independent web developer with Remote Teams
                  around the world
                </li>
              </ul>
            </p>
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

export default skills
