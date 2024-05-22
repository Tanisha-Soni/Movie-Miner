import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black flex space-x-5 relative h-16 items-center justify-center">

      <Link
        to="Movie-Miner"
        className="text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
      >
        Movies
      </Link>

      <Link
        to="watchlist"
        className="text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
      >
        Watch-List
      </Link>

    </div>
  );
}

export default Navbar;
