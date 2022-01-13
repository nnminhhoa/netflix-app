import React, { useEffect, useState } from "react";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const axios = require("axios").default;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API}${fetchUrl}`
      );
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [fetchUrl, axios]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title || movie?.original_title || movie.original_name || ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      origin: window.location.href,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies &&
          movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie?.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            />
          ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
