import React from 'react';
import "./Movie.css"

const Movie = (props) => {
    return (
        <article>
            <img src={props.link} alt="" />
            <div>
                <h3>{props.title}</h3>
                <h3>{props.year}</h3>
                <h3>{props.genre}</h3>
                <h3>{props.director}</h3>
            </div>
        </article>
    );
}

export default Movie;