'use client'
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function DropDown({data}) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleList = () => {
    
    document.getElementById("sub-list").classList.contains("hidden")
      ? document.getElementById("sub-list").classList.remove("hidden")
      : document.getElementById("sub-list").classList.add("hidden");
      
  }
  return (
    <div>
      <h3
        onClick={handleClick}
        className=" text-lg font-bold bg-[#e50914] w-fit cursor-pointer rounded-md py-1 px-2 flex"
      >
        Seasons
        <FaCaretDown className=" mt-[6px] ml-1" />
      </h3>
      {isOpen ? (
        <div className=" bg-[#e50914] w-fit px-2 rounded-md mt-2 h-[60px] overflow-scroll overflow-x-hidden hide-scrollbar">
          {data?.seasons.map((item) => {
            return (
              <list>
                <ul className=" ">
                  <li className=" text-lg font-semibold px-2">{item.name}
                  <ul>
                    <li className=" px-3 text-sm font-normal">{item.episode_count} EPS.</li>
                  </ul></li>
                </ul>
              </list>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default DropDown;
