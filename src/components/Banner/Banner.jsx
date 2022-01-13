import React, { useEffect, useState } from "react";
import "./Banner.css";
import api from "../../api/api";

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const axios = require("axios").default;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`
      );
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    };
    fetchData();
  }, [axios]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "... " : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.originam_name}
        </h1>
        <div className="ban">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBotton"></div>
    </header>
  );
};

export default Banner;
