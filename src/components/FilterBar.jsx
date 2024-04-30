import React from "react";

const FilterBar = ({ filters, onFilterChange, movies }) => {
  const languages = [
    ...new Set(movies.flatMap((movie) => movie.movielanguages)),
  ];
  const countries = [
    ...new Set(movies.flatMap((movie) => movie.moviecountries)),
  ];
  const genres = [...new Set(movies.flatMap((movie) => movie.moviegenres))];

  return (
    <div className="mb-4">
      <label htmlFor="language" className="mr-2">
        Language:
      </label>
      <select
        id="language"
        name="language"
        value={filters.language}
        onChange={onFilterChange}
        className="border rounded-md px-2 py-1"
      >
        <option value="">All</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

      {/* ... (rest of the code remains the same) */}
    </div>
  );
};

export default FilterBar;
