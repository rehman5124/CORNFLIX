"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

export default function MediaCard({
  title,
  overview,
  image,
  releseDate,
  data,
}) {
 
  return (
    <div className=" mx-20 my-6">
      <Card
        sx={{ width: 400, borderRadius: 3, backgroundColor: " rgb(50 50 50)" }}
      >
        <Link href={`/${data?.release_date ? 'Movies': 'TvShows'}/${data?.id}`}>
          <CardMedia
            sx={{ height: 350 }}
            image={image}
            className=" object-fill"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className=" font-semibold w-fit h-8 text-white overflow-x-hidden"
            >
              {title}
            </Typography>
            <Typography
              gutterBottom
              component="div"
              className=" font-thin text-[2px] text-slate-300"
            >
              Release date: {releseDate}
            </Typography>
            <Typography variant="body2" className="text-slate-400">
              {overview}
            </Typography>
          </CardContent>
          <CardActions>
            <textarea className=" border-[1px] border-black w-16 h-8 rounded-md ml-2 px-2 pt-1"></textarea>
            <Button
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#e50914" }}
              className=" text-white bg-[#e50914]"
            >
              {" "}
              Rate <StarIcon sx={{ color: "white", height: 17 }} />
            </Button>
          </CardActions>
        </Link>
      </Card>
    </div>
  );
}
