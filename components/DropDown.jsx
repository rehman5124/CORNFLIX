'use client'
import React from "react";
import { FaCaretDown } from "react-icons/fa";

function DropDown() {
  const handleClick = () => {
    document.getElementById("container-list").classList.contains("hidden")
      ? document.getElementById("container-list").classList.remove("hidden")
      : document.getElementById("container-list").classList.add("hidden");
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
      <div id="container-list" className=" ml-1 mt-2 bg-[#e50914] w-fit p-2 h-16 overflow-y-auto hidden ">
        <ul className="">
          <li onClick={handleList} className=" ">
            Season 1{" "}
            <span className=" float-right">
              <FaCaretDown className=" mt-[4px] ml-1" />
            </span>
            <ul id="sub-list" className=" hidden"><li className=" ml-2">ep.128</li></ul>
          </li>
          <li onClick={handleList} className=" ">
            Season 2{" "}
            <span className=" float-right">
              <FaCaretDown className=" mt-[4px] ml-1" />
            </span>
            <ul id="sub-list2" className=" hidden"><li className=" ml-2">ep.128</li></ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
