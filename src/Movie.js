import React from 'react';
import Proptypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster, genres})
{
    return <div className = "movie">
        <img src = {poster} alt={title} title = {title}/> 
        <div className="movie_class">
            <h3 className = "movie_title">{title}</h3>
            <h5 className = "movie_year">{year}</h5>
            <ul className="movie_genres">
                {genres.map((genre, index) => (
                    <li key = {index} className="genres_genre">{genre}</li>
                ))}
            </ul>
            <p className ="movie_summary">{summary.slice(0, 140)}...</p>
            
        </div>
    </div>;
}//alt는 포스터에 커서를 놓았을 때 표시되는 텍스트

Movie.propTypes = {
    id : Proptypes.number.isRequired,
    year : Proptypes.number.isRequired,
    title : Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
};


export default Movie;