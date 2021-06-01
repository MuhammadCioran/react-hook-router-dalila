import React  from "react";
import './Rating.css';
import {Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
const Rating = () => {
    return (
      <div className="rateContainer">
        <h4> evaluate the APP </h4>
        <div className="stars">
        <ReactStars  count={5} size={28} activeColor="#ffd700" color="white" edit={true} isHalf={true} 
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>} />
        </div>
        <div>
        <textarea placeholder="What's your opinion?"  className="container"/>
            <div className="submitBtn">
        <Button variant="primary" onClick ={()=>alert(` Thanks for your feedback ✅` )}>
        Submit
        </Button>
      </div> 
        </div>
      </div>
    );
  };
  
export default Rating
