import React, { useEffect, useState } from "react";
import genreids from "../utility/genreids";

function WatchList({ watchlist, deleteFromWatchlist, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList ] = useState(['All Genre']);
  const [currGenre, setCurrGenre] = useState('All Genre');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function filterGenre(genre){
    setCurrGenre(genre);
  }

  function sortIncreasing() {
    const sorted = watchlist.sort(
      (movieA, movieB) =>
        movieA.vote_average.toFixed(1) - movieB.vote_average.toFixed(1)
    );

    setWatchlist([...sorted]);
  }

  function sortDecreasing() {
    const sorted = watchlist.sort(
      (movieA, movieB) =>
        movieB.vote_average.toFixed(1) - movieA.vote_average.toFixed(1)
    );
    setWatchlist([...sorted]);
  }

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
        return genreids[movieObj.genre_ids[0]];
    })
    temp = new Set(temp);
    console.log(...temp);
    setGenreList([...temp, 'All Genre']);
  }, [watchlist])

  return (
    <>
      <div className="bg-black text-gray-100 font-sans min-h-screen p-6">
        <div className="flex flex-wrap justify-center space-x-4 mb-6 max-md:gap-2">
            {
                genreList.map((genre, index) => {
                    return <button key={index} onClick={()=>filterGenre(genre)} className={ currGenre == genre ? "px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition duration-300" : "px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg transition duration-300"}>
                        {genre}
                    </button>
                })
            }
          
        </div>
        <div className="flex justify-center mb-6">
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            className="w-full max-w-lg px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <p className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-r-lg transition duration-300">
            <svg
              className="w-5 h-5 text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M15 11a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
              ></path>
            </svg>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className=" max-lg:w-52  px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Poster
                </th>
                <th className=" px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Name
                </th>
                <th className=" px-6 py-4 text-center text-sm font-semibold text-gray-300 flex justify-center gap-2">
                  <button onClick={sortIncreasing}>&#11165;</button>Rating<button onClick={sortDecreasing}>&#11167;</button>
                </th>
                <th className=" px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Popularity
                </th>
                <th className=" px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Genre
                </th>
                <th className=" px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              {watchlist.filter((movieObj) =>{
                if(currGenre == 'All Genre'){
                    return true;
                }else{
                    return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
                .filter((movieObj) => {
                  return movieObj.original_title
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase());
                })
                .map((movieObj) => {
                  return (
                    <tr
                      key={movieObj.id}
                      className="hover:bg-gray-700 transition duration-300"
                    >
                      <td className=" max-lg:w-52  px-6 py-4 border-b border-gray-700 text-center flex justify-center items-center">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                          className="h-40 w-30 object-cover rounded-lg"
                        />
                      </td>
                      <td className=" px-6 py-4 text-center border-b border-gray-700">
                        {movieObj.original_title}
                      </td>
                      <td className=" px-6 py-4 text-center border-b border-gray-700">
                        {movieObj.vote_average.toFixed(1)}
                      </td>
                      <td className=" px-6 py-4 text-center border-b border-gray-700">
                        {movieObj.popularity.toFixed(2)}
                      </td>
                      <td className=" px-6 py-4 text-center border-b border-gray-700">
                        {genreids[movieObj.genre_ids[0]]}
                      </td>
                      <td className=" px-6 py-4 text-center border-b border-gray-700">
                        <button
                          onClick={() => deleteFromWatchlist(movieObj)}
                          className="px-4 py-2 bg-red-700 hover:bg-red-800 rounded-lg transition duration-300"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default WatchList;
