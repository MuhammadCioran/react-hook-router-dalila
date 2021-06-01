import React from "react";
import "./MovieList.css";
import { MovieCards } from "../MovieCards/MovieCards";
import {Link} from 'react-router-dom'
const MovieList = ({ posters}) => {
    return (
    <>
    <div className="Movielist">
        {posters.map((film, key) => (
            <Link to={`${film.title}`} className="link">
        <MovieCards film={film} key={key}/>
        </Link>
        ))}
    </div>
    </>
    );
};
export default MovieList;

