"use client"
import React, { useEffect, useState } from "react";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import CardCarousal from "./CardCarousal";
import { redirect } from "next/navigation";

function IndexData() {

  const isFetching = useIsFetching();

  const TvURL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
  const MovieURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const PopMovieURL = 'https://api.themoviedb.org/3/movie/top_rated';
  const PopularTvURL = 'https://api.themoviedb.org/3/tv/top_rated';

  const { data: movieData, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: (query) => fetch(MovieURL, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
        accept: 'application/json'
      }
    }).then((res) => res.json()),
  });

  const { data: TvData } = useQuery({
    queryKey: ["TvShows"],
    queryFn: (query) => fetch(TvURL, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
        accept: 'application/json'
      }
    }).then((res) => res.json()),
  });

  const { data: PopMovieData } = useQuery({
    queryKey: ["PopMovies"],
    queryFn: (query) => fetch(PopMovieURL, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
        accept: 'application/json'
      }
    }).then((res) => res.json()),
  });

  const { data: PopTvData } = useQuery({
    queryKey: ["PopTvShows"],
    queryFn: (query) => fetch(PopularTvURL, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
        accept: 'application/json'
      }
    }).then((res) => res.json()),
  });

  if(isFetching){
    return <main className=" mx-auto">
        {null}
    </main>
  }

  if(isError) {
    return <main className=" mx-auto">
        <h1 className=" font-bold text-2xl">Database under Construction</h1>
    </main>
  }

  return (
    <div>
      {localStorage.getItem('guest_session_id')? (
        <div>
          <CardCarousal title={"Movies"} data= {movieData}/>
          <CardCarousal title={"TV Shows"} data= {TvData}/>
          <CardCarousal title={"Popular Movies"} data = {PopMovieData}/>
          <CardCarousal title={"Popular TV Shows"} data = {PopTvData}/>
        </div>
      ): redirect('/Auth')}
      
  </div>
  );
}

export default IndexData;
