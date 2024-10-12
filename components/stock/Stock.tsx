import React from 'react'
import { images } from '@/app/data'
import Image from 'next/image'

const Stock = () => {
  return (
    <div className='mt-[8rem] ' >
        <h1 className='text-4xl mb-8 text-white font-name text-center'>My Stack</h1>
        <div className='grid md:grid-cols-3 place-items-center md:mx-[10rem] mx-[5rem] grid-cols-2  items-center gap-4  ' >
      {images.map((img,i)=>{
       return <Image src={img.img} key={i} alt={img.img} height={100} width={100}/>
      })}
    </div>
    </div>
    
  )
}

export default Stock
