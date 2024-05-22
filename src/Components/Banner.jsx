import React from "react";
import { useEffect, useState } from "react";
function Banner({movies}) {
  return (
    <div
      className="h-[1000px] bg-center bg-no-repeat bg-cover flex flex-col flex-wrap w-full justify-end items-end gap-[50px] "
      style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${movies[0].backdrop_path})`}}
    >
      <div className="h-[100px] w-full relative bg-black/80 flex flex-col flex-wrap items-center justify-center opacity-0 hover:opacity-100  transition-all duration-200">
        <h1 className="text-white text-center text-l m-[20px] font-bold">
          {" "}
          {movies[0].original_title}
        </h1>
        </div>
    </div>
  );
}

export default Banner;
