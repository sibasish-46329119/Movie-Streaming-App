import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: absolute;
  bottom: 10px; /* Adjust as needed */
  left: 100px; /* Adjust as needed */
  padding: 10px;
  background-color: rgba(
    255,
    255,
    255,
    0
  ); /* Set the alpha value to make the background transparent */
  border-radius: 5px;
  width: 30%;
`;

const MovieTitle = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  color: white;
`;

const MovieDetails = styled.p`
  margin-bottom: 10px;
  padding-bottom: 10px;
  color: white;
  font-weight: bold;
`;

const MovieDescription = styled.p`
  margin-bottom: 10px;
  padding-bottom: 10px;
  color: #d3d3d3;
`;

const MovieGenres = styled.p`
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
`;

const Watch = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  color: white;
  border-width: 0;
  background-color: rgba(128, 128, 128, 0.5);
  border-radius: 10px;
`;
const BoldDot = styled.span`
  font-weight: bold;
  margin: 0 5px;
`;

const MovieCard = ({ movie }) => {
  // Join genres with a vertical bar
  const genres = movie.genre.join(" | ");

  return (
    <CardContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieDetails>
        {movie.yearRelease}
        <BoldDot>•</BoldDot>
        {movie.rated}
      </MovieDetails>
      <MovieDescription>{movie.description}</MovieDescription>
      <MovieGenres>{genres}</MovieGenres>{" "}
      {/* Display genres with vertical bar separator */}
      <Watch>Watch Now</Watch>
    </CardContainer>
  );
};

export default MovieCard;
