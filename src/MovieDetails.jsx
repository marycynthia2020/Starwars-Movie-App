import React from "react";

const MovieDetails = ({selectedItem, handleGoBack}) => {

  return (
    <div className="movie selected-div">
    <a href="#" className="movie-title">{selectedItem.title}</a>
    <p className="movie-title">Directed by: {selectedItem.director}</p>
    <p className="date">
    {new Date(selectedItem.release_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
    </p>
    <p className="opening-crawl">{selectedItem.opening_crawl}</p>
    <button className="more-info" onClick={handleGoBack}>Back to Movies</button>
  </div>
  )
};
export default MovieDetails;
