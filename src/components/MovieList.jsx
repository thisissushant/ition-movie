import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src={
              movie.moviemainphotos[0] ||
              "https://unsplash.com/photos/a-man-in-a-wet-suit-is-holding-a-stick-in-the-water-YZJpLKQYvm8"
            }
            alt={movie.movietitle}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{movie.movietitle}</h2>
            <p>Languages: {movie.movielanguages.join(", ")}</p>
            <p>Countries: {movie.moviecountries.join(", ")}</p>
            <p>Genres: {movie.moviegenres.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
