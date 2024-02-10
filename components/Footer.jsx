import React from "react";

function Footer() {
  return (
    <div className=" mx-8 lg:mx-24 mb-8">
      <div className=" gradient-05 h-[15%] w-[25%] absolute left-[40vw]" />
      <div>
        <hr className=" mt-12 opacity-20 border-white" />
        <div className=" flex flex-col justify-between mt-16 gap-y-4 lg:flex-row md:flex-row">
          <h2 className=" text-2xl font-bold text-[#e50914]">CORNFLIX</h2>
          <h4 className=" text-sm font-light opacity-50">
            Copyright © 2021 - 2022 Cornflix. All rights reserved
          </h4>
          <div className=" flex gap-4">
            <img src="/twitter.svg" alt="twitter" />
            <img src="/linkedin.svg" alt="linkedin" />
            <img src="/instagram.svg" alt="instagram" />
            <img src="/facebook.svg" alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer