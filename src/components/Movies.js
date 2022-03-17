import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ec0d0ac1a02925c493e247d245274ced&query=${query}`
      )
      .then(function (response) {
        setMovies(response.data.results);
      });
  };

  return (
    <main className="MainMovies">
      <div >
        <label>
          {" "}
          recherche :
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="nom du film"
          />
        </label>
        <button onClick={getMovies}> rechercher ! </button>

        {/* puisque ena 3andi tawwa un tableau plein des films
        je vais essayer de parcourir ce tableau la , et pour
        chaque element je vais affichier le titre 
        
        */}
<div className="moviesList">
        {movies.map((element) => {
          return (
            <span>
              <h4>{element.original_title}</h4>

              <img
                style={{ width: "255px", height: "255px" }}
                src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
              />
            </span>
          );
        })}
        </div>
      </div>
    </main>
  );
}
