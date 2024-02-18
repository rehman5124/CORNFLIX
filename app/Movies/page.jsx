"use client";
import MediaCard from "@/components/Card";
import React from "react";
import { redirect } from "next/navigation";
import { useQuery, useIsFetching } from "@tanstack/react-query";

function Movies() {

  const PopMovieURL = 'https://api.themoviedb.org/3/movie/top_rated';

  const { data } = useQuery({
    queryKey: ["BlockBsterMovies"],
    queryFn: (query) => fetch(PopMovieURL, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
        accept: 'application/json'
      }
    }).then((res) => res.json()),
  });

  return (
    <div className=" mt-28 w-full">
      {localStorage.getItem("guest_session_id") ? (
        <div className=" w-full lg:mr-8">
          <h1 className=" text-4xl font-bold grid justify-center mt-8 mb-8">
            All time BlockBusters
          </h1>
          <div className=" grid w-full place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {data?.results.slice(5, 25).map((item) => {
              return (
                <MediaCard
                  title={item.title ? item.title : item.original_name}
                  overview={item.overview.slice(0, 150)}
                  releseDate={
                    item.release_date ? item.release_date : item.first_air_date
                  }
                  image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  data={item}
                />
              );
            })}
          </div>
        </div>
      ) : (
        redirect("/Auth")
      )}
    </div>
  );
}

export default Movies;
