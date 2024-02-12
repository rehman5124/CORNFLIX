"use client"
import React from "react";
import { useParams } from "next/navigation";
import { FaCalendar } from "react-icons/fa";
import StarIcon from "@mui/icons-material/Star";
import { useQuery, useIsFetching, useMutation } from "@tanstack/react-query";
import DropDown from "@/components/DropDown";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { APIKEY } from "@/app/constants";

function TvComponent() {

    const {id} = useParams();
    const isFetching = useIsFetching();
    const URL = `https://api.themoviedb.org/3/tv/${id}`;
    var Rvalue;
    const handleChange = (e) => {
      Rvalue = e.target.value;
    }

    
    const mutation = useMutation({
      mutationKey: ['ratingTvshows'],
      mutationFn: () => fetch(`https://api.themoviedb.org/3/tv/${id}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=${APIKEY}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            accept: "application/json",
        },
        body: `{"value":${Rvalue}}`
      })
    });

    const {data} = useQuery({
        queryKey: ['Tvdetailsss'],
        queryFn: (query) => fetch(URL, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2QxODVjNTIxN2ExNjhlYTcwNjY4NmQ1ZDcxMTEyNyIsInN1YiI6IjY1YWU1YmQ0YmQ1ODhiMDBlYmFlMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXT_y9EOO7LqJILcfz0Tp3beHgwy5jPyzUDbTYjkdIE',
                accept: 'application/json'
            }
        }).then((response) => response.json())
    })
    // console.log(data)
    const handleClick = (event) => {
      mutation.mutate();
      toast("Rating Successful!");
    }

    if(isFetching) {
        return <div className=" w-full flex justify-center">
            <h1>Loading...</h1>
        </div>
    }

    // var time = data?.episode_run_time
    // var Hours = Math.floor(time /60)
    // var minutes = time % 60

  return (
    <div className=" my-6 mx-16 border-[1px] border-white pr-4">
      <div className=" flex">
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
          alt="detailed image"
          className=" p-6 size-[33%]"
        />

        <div className=" w-full">
          <div className=" ">
            <h1 className=" text-4xl font-bold text-[#e50914] mt-4 flex justify-center">
              {data?.name}
            </h1>
            <div className=" flex mt-2 justify-center">
              <span className=" flex">
                <FaCalendar />{" "}
                <h3 className=" ml-1 relative bottom-[3px]">{data?.first_air_date}</h3>
              </span>
              <span className=" flex">
                {" "}
                <h1 className=" ml-2 relative bottom-[3px]">&#x2022;</h1>{" "}
                <h3 className=" text-base font-normal ml-1 relative bottom-[2px]">
                  {data?.genres.slice(0,3).map((item) => {return item.name + ', '})}
                </h3>
              </span>
              <span className=" flex">
                {" "}
                <h1 className=" ml-2 relative bottom-[3px]"> &#x2022; </h1>{" "}
                <h3 className=" text-base font-normal ml-1 relative bottom-[2px]">
                  {data?.episode_run_time + 'm/ep'}
                </h3>
              </span>
            </div>
          </div>

          <div className=" w-full mt-4">
            <h2 className=" flex justify-center text-[#e50914]">
              {data?.tagline}
            </h2>
            <div className=" ml-4 w-full">
              <h2 className=" font-bold text-lg">Overview</h2>
              <h3 className=" font-normal text-slate-300">
                {data?.overview}
              </h3>
            </div>
            <span className=" flex mt-4 mx-4">
              <div className="">
                <h2 className=" font-bold text-lg">Adult</h2>
                <h3 className=" font-normal text-slate-300">{data?.adult === false ? 'No': 'Yes'}</h3>
              </div>
              <div className=" ml-36">
                <h2 className=" font-bold text-lg">Producers</h2>
                <h3 className=" font-normal text-slate-300">{data?.created_by.map((item)=> {return item.name + ', '})}</h3>
              </div>
            </span>
            <span className=" flex mt-4 mx-4">
              <div className=" ">
                <h2 className=" font-bold text-lg">Popularity</h2>
                <h3 className=" font-normal text-slate-300">{data?.popularity}</h3>
              </div>
              <div className=" ml-[6.5rem]">
                <h2 className=" font-bold text-lg">Status</h2>
                <h3 className=" font-normal text-slate-300">{data?.status}</h3>
              </div>
            </span>
            <span className=" flex mt-4 mx-4">
              <div className=" ">
                <h2 className=" font-bold text-lg">Ratings</h2>
                <h3 className=" font-normal text-slate-300">{data?.vote_count}</h3>
              </div>
              <div className=" ml-[8rem]">
                <h2 className=" font-bold text-lg">Average Rating</h2>
                <h3 className=" font-normal text-slate-300">{data?.vote_average}</h3>
              </div>
            </span>
            <span className=" flex mt-4 mx-4">
              <div className=" ">
                <h2 className=" font-bold text-lg">Origin</h2>
                <h3 className=" font-normal text-slate-300">{data?.production_companies[0].origin_country}</h3>
              </div>
              <div className=" ml-[9rem]">
                <h2 className=" font-bold text-lg">Production Company</h2>
                <h3 className=" font-normal text-slate-300">
                {data?.production_companies[0].name}
                </h3>
              </div>
            </span>
            <div className=" mt-4 mx-4">
              <DropDown />
            </div>
            <div className=" flex gap-2 mt-4 mx-4">
              <textarea onChange={handleChange} maxLength={1} className=" border-[1px] border-black text-black w-16 h-8 rounded-md px-2"></textarea>
              <button onClick={handleClick} className=" text-white rounded-md px-1 bg-[#e50914]">
                {" "}
                Rate <StarIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default TvComponent;
