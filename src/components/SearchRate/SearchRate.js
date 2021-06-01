import React from 'react'
import './SearchRate.css'
import ReactStars from "react-rating-stars-component";
const SearchRate = ({searchRatingMovie}) => {
  //const changeRatingMovie = e =>{searchRatingMovie(e.target.value);}
    const ratingChanged = (searchRating) => { searchRatingMovie(searchRating);};
    return (
        <>
          {/*
        <input type="text" placeholder="Search for a movie" onChange={changeRatingMovie} defaultValue=""/>
          */}
            <form className="rateCantainer"> 
            <ReactStars  onChange={ratingChanged} count={5} size={30} activeColor="#ffd700"edit={true} isHalf={true} color="white"
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>} />
            </form>   
        </>
    )
}
export default SearchRate
