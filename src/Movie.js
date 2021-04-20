import React from 'react';
import Proptypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster})
{
    return <div class = "movie">
        <img src = {poster} alt={title} title = {title}/> 
        <div class="movie_class">
            <h3 class = "movie_title">{title}</h3>
            <h5 class = "movie_year">{year}</h5>
            <p class ="movie_summary">{summary}</p>
        </div>
    </div>;
}//alt는 포스터에 커서를 놓았을 때 표시되는 텍스트

Movie.propTypes = {
    id : Proptypes.number.isRequired,
    year : Proptypes.number.isRequired,
    title : Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired
};


export default Movie;