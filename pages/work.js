import React from 'react'
import Card from '../components/Card'
import Nav from '../components/Nav'
import { workData } from '../data/workData'
import Image from 'next/image'

function work() {
  return (
    <div className=' flex min-h-screen shadow-2xl '>
      <div className=' bg-[#1D1D1D] w-full h-full md:w-7/12 fixed overflow-scroll'>
        <Nav />
        <div>
          <div className='  mt-10'>
            <h1 className=' text-center text-7xl font-bold text-white font-serif'>
              Work
            </h1>
            <div className='mt-5 grid xl:grid-cols-2 xl:mx-20 gap-y-6 mx-10'>
              {workData.map(({ title, image, tech, url }) => (
                <Card title={title} image={image} tech={tech} url={url} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=' fixed h-full md:w-6/12 right-0 hidden md:flex  '>
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

export default work
