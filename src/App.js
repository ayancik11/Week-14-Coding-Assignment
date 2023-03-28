import React from "react";
import Movie from "./Components/movie";
import { movieList } from "./Components/movieList";
import "./App.css";
import Navbar from "./Components/navbar";
import Header from "./Components/header";

function App() {
  const movies = movieList.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="container" id="movie">
        <div className="row gy-4">
          <>{movies}</>
        </div>
      </div>
    </div>
  );
}

export default App;