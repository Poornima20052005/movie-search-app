import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = "149a131e";

  const searchMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
    );

    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div>
      <h1>Movie Search App 🎬</h1>

      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchMovies}>Search</button>

      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} width="150" />
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default App;