import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../stylesheet/Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  // here we are going to use state to keep track of movies. those are short term memories.
  const [movies, setMovies] = useState([]);

  // fetch movies and populate it in empty array

  // this code will run whenever this component will render on the canvas
  // and the empty array in the second parameter says run once and never run again
  useEffect(() => {
    // so basically what we want to do is to make request to the api whenever
    // this component will be rendered on the screen

    // since we are making a request to external api, we need to wrap them in async await

    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setMovies(request.data["results"]);
      return request;
    }
    fetchData();
  }, [props.fetchURL]);

  return (
    <div className="row">
      <h2 className="title">{props.title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
              src={`${baseUrl}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
