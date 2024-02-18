"use client"
import React, { useState } from "react";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import Link from "next/link";

function HeroSection() {
  
    const isFetching = useIsFetching();
    const URL = 'https://api.themoviedb.org/3/trending/all/day'
    const detailedURL = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US'

    const { data } = useQuery({
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

    const {data: heroDetails } = useQuery({
        queryKey: ['trendingDetails'],
        queryFn: (query) => fetch(`https://api.themoviedb.org/3/movie/${data?.results[0].id}?language=en-US`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
                accept: 'application/json'
            }
        }).then((res) => {
            return res.json()
        }),
        enabled: !!data
    })
    console.log(heroDetails)

    if (isFetching) {
        return (
            <main className=" grid justify-center">
                <h1 className=" font-bold text-2xl">Loading...</h1>
            </main>
        )
    }

  return (
    <Link
      href={`/${data?.results[0].release_date ? "Movies" : "TvShows"}/${
        data?.results[0].id
      }`}
    >
      <div className=" grid place-items-center">
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.results[0].poster_path}`}
          alt="hero image"
          className=" h-[100vh] w-full object-cover"
        />
        <div className=" absolute hidden sm:block md:left-10 mt-20 w-[265px] bottom-[10vh]">
          {/* <img
            src={`https://image.tmdb.org/t/p/original/${heroDetails?.production_companies[2].logo_path}`}
            alt="logo"
            className=" w-60 h-20"
          /> */}
          <h1 className=" text-5xl font-bold text-center text-[#e50914]">{heroDetails?.title}</h1>
          {/* <h1 className=" text-2xl font-semibold mt-4 text-center shadow-2xl  text-[#e50914]">{heroDetails?.overview.slice(0, 50)}...</h1> */}
          <button className=" bg-[#e50914] px-4 py-2 rounded-md mt-4 w-full">More Info</button>
        </div>
      </div>
    </Link>
  );
}

export default HeroSection