import React from 'react'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import { ExternalLinkIcon } from '@heroicons/react/outline'

function Card({ title, image, tech, url }) {
  return (
    <Link href={url}>
      <div className=' relative w-full md:w-[320px] shadow-2xl bg-gray-500  cursor-pointer p-4 my-4 rounded-lg'>
        <h1 className='text-center text-2xl py-3 font-semibold text-white'>
          {title}
        </h1>
        <Image className='  ' src={image} width={340} height={310} />
        <div className=' flex py-3  justify-center gap-x-2 lg:gap-x-4 text-xs md:text-sm text-indigo-100 font-semibold  '>
          {tech.map((i) => (
            <p>{i}</p>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Card
