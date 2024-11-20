import React from "react";
import { useNavigate } from "react-router-dom";
import './MovieList.css';

const movies = [
  { id: 1, title: "Movie 1", image: "/img1.jfif" },
  { id: 2, title: "Movie 2", image: "/img2.jfif" },
  { id: 3, title: "Movie 3", image: "/img3.jfif" },
  { id: 4, title: "Movie 4", image: "/img1.jfif" },
  { id: 5, title: "Movie 5", image: "/img2.jfif" },
  { id: 6, title: "Movie 6", image: "/img3.jfif" },
];

const MovieList = () => {
  const navigate = useNavigate();

  return (
    <div className="movie-list-container">
      {/* Centered Title */}
      <h1 className="movie-list-title">Welcome to Movie World</h1>

      {/* Movie Grid */}
      <div className="movie-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h4 className="movie-title">{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
