"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function Navbar() {

    const Router = useRouter();

    const handleClick = () => {
        Router.push('/')
    }

  return (
    <div className=' flex w-full pt-5 bg-transparent'>
        <h1 className=' w-24 h-10 ml-16 text-2xl font-semibold mt-1 mr-12 cursor-pointer text-[#e50914]' onClick={handleClick}>CORNFLIX</h1>
        <div className=' flex text-base gap-4 mr-auto mt-2'>
            <Link href={'/'} className=' cursor-pointer'>Home</Link>
            <Link href={'/Movies'} className=' cursor-pointer'>Movies</Link>
            <Link href={'/TvShows'} className=' cursor-pointer'>Tv Shows</Link>
            <Link href={'/Rated'} className=' cursor-pointer'>Rated</Link>
        </div>
        <div className=' flex mr-16 gap-4'>
            <img 
                src='/images/search.svg'
                alt='search icon'
                className=' w-8 h-6 cursor-pointer mt-2'
            />
            <button className=' cursor-pointer bg-[#e50914] rounded-lg px-2'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar