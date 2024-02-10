"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { FaCalendar } from "react-icons/fa";
import StarIcon from '@mui/icons-material/Star';

function Component() {
  return (
    <div className=" my-6 mx-16 border-[1px] border-white pr-4">
      {localStorage.getItem("guest_session_id") ? (
        <div className=" flex">
          <img
            src="/images/hero-img.jpg"
            alt="detailed image"
            className=" p-6 size-[33%]"
          />

          <div className=" w-full">
            <div className=" ">
              <h1 className=" text-4xl font-bold text-[#e50914] mt-4 flex justify-center">
                Justice League
              </h1>
              <div className=" flex mt-2 justify-center">
                <span className=" flex">
                  <FaCalendar />{" "}
                  <h3 className=" ml-1 relative bottom-[3px]">02/02/2024</h3>
                </span>
                <span className=" flex">
                  {" "}
                  <h1 className=" ml-2 relative bottom-[3px]">&#x2022;</h1>{" "}
                  <h3 className=" text-base font-normal ml-1 relative bottom-[2px]">
                    Animation, Family, Comedy
                  </h3>
                </span>
                <span className=" flex">
                  {" "}
                  <h1 className=" ml-2 relative bottom-[3px]">
                    {" "}
                    &#x2022;{" "}
                  </h1>{" "}
                  <h3 className=" text-base font-normal ml-1 relative bottom-[2px]">
                    1h 33m
                  </h3>
                </span>
              </div>
            </div>

            <div className=" w-full mt-4">
              <h2 className=" flex justify-center text-[#e50914]">
                The war on earth will be decided in space.
              </h2>
              <div className=" ml-4 w-full">
                <h2 className=" font-bold text-lg">Overview</h2>
                <h3 className=" font-normal text-slate-300">
                  John and Jane are taking a time-out. Will they be able to say
                  they’re sorry or will this be the end of their adventures?
                  Grab some tissues John and Jane, it’s A BREAKUP! Only this
                  time, it’s life and death. Don’t be so dramatic!
                </h3>
              </div>
              <span className=" flex mt-4 mx-4">
                <div className="">
                  <h2 className=" font-bold text-lg">Adult</h2>
                  <h3 className=" font-normal text-slate-300">no</h3>
                </div>
                <div className=" ml-36">
                  <h2 className=" font-bold text-lg">IMDB ID</h2>
                  <h3 className=" font-normal text-slate-300">13349865</h3>
                </div>
              </span>
              <span className=" flex mt-4 mx-4">
                <div className=" ">
                  <h2 className=" font-bold text-lg">Budget</h2>
                  <h3 className=" font-normal text-slate-300">13800000</h3>
                </div>
                <div className=" ml-28">
                  <h2 className=" font-bold text-lg">Revenue</h2>
                  <h3 className=" font-normal text-slate-300">28700000</h3>
                </div>
              </span>
              <span className=" flex mt-4 mx-4">
                <div className=" ">
                  <h2 className=" font-bold text-lg">Status</h2>
                  <h3 className=" font-normal text-slate-300">Released</h3>
                </div>
                <div className=" ml-[7.5rem]">
                  <h2 className=" font-bold text-lg">Popularity</h2>
                  <h3 className=" font-normal text-slate-300">3017.89</h3>
                </div>
              </span>
              <span className=" flex mt-4 mx-4">
                <div className=" ">
                  <h2 className=" font-bold text-lg">Ratings</h2>
                  <h3 className=" font-normal text-slate-300">20</h3>
                </div>
                <div className=" ml-[7.5rem]">
                  <h2 className=" font-bold text-lg">Average Rating</h2>
                  <h3 className=" font-normal text-slate-300">5.47</h3>
                </div>
              </span>
              <span className=" flex mt-4 mx-4">
                <div className=" ">
                  <h2 className=" font-bold text-lg">Origin</h2>
                  <h3 className=" font-normal text-slate-300">
                    US
                  </h3>
                </div>
                <div className=" ml-[8.5rem]">
                  <h2 className=" font-bold text-lg">Production Company</h2>
                  <h3 className=" font-normal text-slate-300">LD Entertainments</h3>
                </div>
              </span>
              <div className=" flex gap-2 mt-4 mx-4">
                <textarea className=" border-[1px] border-black w-16 h-8 rounded-md px-2"></textarea>
                <button
                  className=" text-white rounded-md px-1 bg-[#e50914]"
                >
                  {" "}
                  Rate <StarIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        redirect("/Auth")
      )}
    </div>
  );
}

export default Component;
