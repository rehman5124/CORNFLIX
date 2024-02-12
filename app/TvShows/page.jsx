"use client";
import MediaCard from "@/components/Card";
import React, { useEffect } from "react";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import { redirect } from "next/navigation";

function TvShows() {

  const PopularTvURL = 'https://api.themoviedb.org/3/tv/top_rated';

  const { data } = useQuery({
    queryKey: ["FavouriteTvShows"],
    queryFn: (query) => fetch(PopularTvURL, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
        accept: 'application/json'
      }
    }).then((res) => res.json()),
  });

  return (
    <div>
      {localStorage.getItem("guest_session_id") ? (
        <div>
        <h1 className=" text-4xl font-bold ml-20 mt-8 mb-4">
            All time Favourites
          </h1>
          <div className=" grid grid-cols-3">
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

export default TvShows;
