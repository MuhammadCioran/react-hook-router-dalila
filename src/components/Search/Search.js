import React from 'react'
import './Search.css'
const Search = ({searchMovie}) => {
    const changeMovie = e =>{
    searchMovie(e.target.value);
    }
    return (
        
        <form className="searchbox-wrap"> 
            <input type="text" className="Searchbox" placeholder="Search for a movie..." onChange={changeMovie} defaultValue=""/>   
            
        </form>   
        
    )
}

export default Search


