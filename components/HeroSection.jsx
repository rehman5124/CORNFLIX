"use client"
import React, { useState } from "react";
import { useQuery, useIsFetching } from "@tanstack/react-query";

function HeroSection() {
  
    const isFetching = useIsFetching();
    const URL = 'https://api.themoviedb.org/3/trending/all/day'

    const {data, isError} = useQuery({
        queryKey: ['trending'],
        queryFn: (query) => fetch(URL, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
                accept: 'application/json'
            }
        }).then((res) => {
            return res.json()
        })
    })

    if (isFetching) {
        return (
            <main className=" grid justify-center">
                <h1 className=" font-bold text-2xl">Loading...</h1>
            </main>
        )
    }

  return (
    <div className=' mx-20 mt-8 flex'>
        <img 
          src={`https://image.tmdb.org/t/p/original/${data?.results[0].poster_path}`}
          alt='hero image'
          className=' h-[80vh] w-[30vw] pr-6 border-r-[1px] border-neutral-400'
        />
        <div>
            <h1 className=' text-4xl font-bold ml-32 text-[#e50914]'>{data?.results[0].original_title ? data?.results[0].original_title : data?.results[0].original_name}</h1>
            <div className=' flex flex-col ml-2 mt-8'>
                <h2 className=' text-base font-bold'>Movie Title:</h2>
                <h3 className=' text-sm text-neutral-300'>{data?.results[0].title ? data?.results[0].title : data?.results[0].name}</h3>
            </div>
            <div className=' flex flex-col ml-2 mt-5'>
                <h2 className=' text-base font-bold'>Release date:</h2>
                <h3 className=' text-sm text-neutral-300'>{data?.results[0].release_date ? data?.results[0].release_date : data?.results[0].first_air_date}</h3>
            </div>
            <div className=' flex flex-col ml-2 mt-5'>
                <h2 className=' text-base font-bold'>Genre:</h2>
                <h3 className=' text-sm text-neutral-300'>Superhero zction</h3>
            </div>
            <div className=' flex flex-col ml-2 mt-5'>
                <h2 className=' text-base font-bold'>Language:</h2>
                <h3 className=' text-sm text-neutral-300'>{data?.results[0].original_language}</h3>
            </div>
            <div className=' flex flex-col ml-2 mt-5'>
                <h2 className=' text-base font-bold'>Overview:</h2>
                <h3 className=' text-sm text-neutral-300'>{data?.results[0].overview.slice(0,200)}</h3>
            </div>
            <div className=' flex flex-col ml-2 mt-5'>
                <h2 className=' text-base font-bold'>Seasons:</h2>
                <h3 className=' text-sm text-neutral-300'>Scrollbar</h3>
            </div>
            <div className=' flex flex-col ml-2 mt-5'>
                <h2 className=' text-base font-bold'>Rating:</h2>
                <h3 className=' text-sm text-neutral-300'>{data?.results[0].vote_average}</h3>
            </div>
            <div className=' flex flex-col ml-2 mt-5'>
                <h2 className=' text-base font-bold'>Rate:</h2>
                <span className=' flex'><textarea className=' text-sm text-black h-4 w-12 pl-1'></textarea><button className=' text-sm bg-[#e50914] px-1 rounded-sm ml-2'>Rate</button></span>
            </div>
            
        </div>

    </div>
  )
}

export default HeroSection