import React from "react";

function MovieCard({
  movieObj,
  original_title,
  vote_average,
  watchlist,
  poster_path,
  addInWatchlist,
  deleteFromWatchlist,
}) {
  function doesContains(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (movieObj.id == watchlist[i].id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="w-[300px] h-[400px] rounded-[30px] bg-center bg-no-repeat bg-cover hover:scale-110 transition-all duration-200"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="h-full w-full relative rounded-[30px] bg-black/80 flex flex-col flex-wrap items-center justify-center opacity-0 hover:opacity-100  transition-all duration-200">
        <h1 className="text-white text-center text-l m-[20px] font-bold">
          {" "}
          {original_title}
        </h1>
        <h1 className="text-white text-center text-l m-[20px] font-bold">
          Ratings: {vote_average.toFixed(1)}
        </h1>
        {doesContains(movieObj) ? (
          <div>
            <button
              onClick={() => deleteFromWatchlist(movieObj)}
              className=" text-center text-2xl m-[20px] font-bold"
            >
              &#129505;
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => addInWatchlist(movieObj)}
              className="text-white text-center text-2xl m-[20px] font-bold"
            >
              &#129293;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
