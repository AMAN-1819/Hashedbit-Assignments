// MovieDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import './MovieDetails.css';
const movies = [
  { id: 1, title: "Movie 1", description: "This is Movie 1." },
  { id: 2, title: "Movie 2", description: "This is Movie 2." },
  {  id: 3, title: "Movie 3", description: "This is Movie 3."},
  {  id: 4, title: "Movie 4", description: "This is Movie 4."},
  {  id: 5, title: "Movie 5", description: "This is Movie 5."},
  {  id: 6, title: "Movie 6", description: "This is Movie 6."},
  // Add more movies
];

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
