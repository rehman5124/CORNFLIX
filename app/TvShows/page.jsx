"use client";
import CardCarousal from "@/components/CardCarousal";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

function TvShows() {
  return (
    <div>
      {localStorage.getItem("guest_session_id") ? (
        <div>
          <CardCarousal title={"Top 10 TV Shows in Your country"} />
          <CardCarousal title={"Action & Adventure"} />
          <CardCarousal title={"Crime"} />
          <CardCarousal title={"Drama"} />
          <CardCarousal title={"Reality"} />
          <CardCarousal title={"Mystery"} />
        </div>
      ) : (
        redirect("/Auth")
      )}
    </div>
  );
}

export default TvShows;
