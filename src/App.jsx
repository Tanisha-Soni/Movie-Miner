import "./App.css";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  function addInWatchlist(movieObj) {
    const newList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newList));
    setWatchlist(newList);
  }

  function deleteFromWatchlist(movieObj) {
    const deleted = watchlist.filter((obj) => movieObj.id !== obj.id);
    localStorage.setItem('moviesApp', JSON.stringify(deleted));
    setWatchlist(deleted);
  }

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (moviesFromLocalStorage) {
      setWatchlist(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Movies
                watchlist={watchlist}
                addInWatchlist={addInWatchlist}
                deleteFromWatchlist={deleteFromWatchlist}
              />
            }
          />
          <Route
            path="/watchlist"

            element={

              <WatchList
                watchlist={watchlist}
                deleteFromWatchlist={deleteFromWatchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;