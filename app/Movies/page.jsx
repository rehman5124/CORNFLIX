"use client";
import CardCarousal from "@/components/CardCarousal";
import React from "react";
import { redirect } from "next/navigation";

function Movies() {
  return (
    <div>
      {localStorage.getItem("guest_session_id") ? (
        <div>
          <CardCarousal title={"Top 10 Movies in Your country"} />
          <CardCarousal title={"Action"} />
          <CardCarousal title={"Adventure"} />
          <CardCarousal title={"Thriller"} />
          <CardCarousal title={"Horror"} />
          <CardCarousal title={"Documenty"} />
        </div>
      ) : (
        redirect("/Auth")
      )}
    </div>
  );
}

export default Movies;
