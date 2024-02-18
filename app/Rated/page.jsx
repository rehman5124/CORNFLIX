"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import CardCarousal from "@/components/CardCarousal";
import MediaCard from "@/components/Card";

function Rated() {

  const url = `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`;
  const Tvurl = `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/tv?language=en-US&page=1&sort_by=created_at.asc`;

  const {data: ratedMovies, isLoading} = useQuery({
    queryKey: ['getRatedMovies'],
    queryFn: (query) => fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
        accept: 'application/json'
      }
    }).then(res => res.json())
  })

  const {data: ratedTvShows} = useQuery({
    queryKey: ['getRatedTvShows'],
    queryFn: (query) => fetch(Tvurl, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
        accept: 'application/json'
      }
    }).then(res => res.json())
  })

  if(isLoading) {
    return <main className=" grid w-full justify-center">
      <h1 className="">Loading...</h1>
    </main>
  }

  if(ratedMovies?.results.length === 0 && ratedTvShows?.results.length === 0) {
    return <main className=" grid w-full justify-center">
      <h1 className=" uppercase text-2xl font-semibold my-12">You have not rated anything yet!</h1>
    </main>
  }

  return (
    <div className=" w-[100%] overflow-hidden mt-20">
      {localStorage.getItem("guest_session_id") ? (
        <div>
          {ratedMovies?.results.length === 0 ? (
            <h1 className=" text-4xl font-bold w-full flex justify-center my-8">
              {" "}
              No Movie rated!{" "}
            </h1>
          ) : (
            <div>
              <h1 className=" text-4xl font-bold ml-20 mt-8 mb-4">
                Rated Movies
              </h1>
              <div className=" flex w-[100%] gap-6 ml-6 lg:gap-0 lg:ml-0 overflow-x-scroll pr-[17px] box-content hide-scrollbar">
                {ratedMovies?.results.slice(0, 10).map((item) => {
                  return (
                    <MediaCard
                      title={item.title ? item.title : item.original_name}
                      overview={item.overview.slice(0, 150)}
                      releseDate={
                        item.release_date
                          ? item.release_date
                          : item.first_air_date
                      }
                      image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      data={item}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {ratedTvShows?.results.length === 0 ? (
            <h1 className=" text-4xl font-bold w-full flex justify-center my-8">
              {" "}
              No TvShow rated!{" "}
            </h1>
          ) : (
            <div>
              <h1 className=" text-4xl font-bold ml-20 mt-8 mb-4">
                Rated Tv Shows
              </h1>
              <div className=" flex w-[100%] gap-6 ml-6 lg:gap-0 lg:ml-0 overflow-x-scroll pr-[17px] box-content hide-scrollbar">
                {ratedTvShows?.results.slice(0, 10).map((item) => {
                  return (
                    <MediaCard
                      title={item.title ? item.title : item.original_name}
                      overview={item.overview.slice(0, 150)}
                      releseDate={
                        item.release_date
                          ? item.release_date
                          : item.first_air_date
                      }
                      image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      data={item}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* <CardCarousal title={"Rated Movies"} data= {ratedMovies}/>
          <CardCarousal title={"Rated Tv Shows"} data= {ratedTvShows}/> */}
        </div>
      ) : (
        redirect("/Auth")
      )}
    </div>
  );
}

export default Rated;
