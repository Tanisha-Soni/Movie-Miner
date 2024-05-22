import React from "react";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner";
function Movies({watchlist, addInWatchlist, deleteFromWatchlist}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=fabd02d2e2e715337344ef176f232efc&language=en-US&page=${page}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
      console.log("effect in movie")
  }, [page]);

  return (
    <>
    {(movies.length != 0)?
        <Banner movies={movies}/>: <></>
    }
      
      <div className="bg-black ">
        <div className="p-[50px]  text-center text-white text-xl font-medium">
          TRENDING MOVIES
        </div>

        <div className=" pb-[70px] flex flex-wrap w-full justify-center items-center gap-[50px]">
          {movies.map((movieObj) => {
            return (
              <MovieCard
                key={movieObj.id}
                poster_path={movieObj.poster_path}
                original_title={movieObj.original_title}
                vote_average={movieObj.vote_average}
                watchlist={watchlist}
                movieObj={movieObj}
                addInWatchlist={addInWatchlist}
                deleteFromWatchlist={deleteFromWatchlist}
              />
            );
          })}
        </div>

        <div className=" p-[20px]  bg-zinc-900 bg-blend-darken flex flex-wrap w-full justify-center items-center gap-[50px]">
          <button
            onClick={() => {
              page > 1 ? setPage(page - 1) : _;
            }}
            className="text-white"
          >
            &#11164;
          </button>
          <p className="text-white">{page}</p>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            className="text-white"
          >
            &#11166;
          </button>
        </div>
      </div>
    </>
  );
}

export default Movies;
