"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'


function Auth() {

  const router = useRouter()
  const {data, refetch} = useQuery({
    queryKeys: ['auth'],
    enabled: true,
    queryFn: (query) => fetch('https://api.themoviedb.org/3/authentication/guest_session/new', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
        accept: 'application/json'
      }
    }).then(res => res.json())
  })

  const handleClick = () => {
    refetch()
    localStorage.setItem('guest_session_id',data?.guest_session_id)
    router.push('/')
  }

  return (
    <div className=' bg-neutral-900 size-[100%] absolute top-0 grid place-content-center z-10'>
        <h1 className='text-[#e50914] text-5xl font-bold bg-white p-4 rounded-xl'>CORNFLIX</h1>
        <div className=' flex flex-col gap-3 mt-6'>
            <h2 className=' mx-auto'>Login as a guest below</h2>
            <button onClick={handleClick} className=' bg-[#e50914] p-2 rounded-lg w-fit mx-auto px-4'>Login</button>
        </div>
    </div>
  )
}

export default Auth