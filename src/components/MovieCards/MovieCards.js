import React from "react";
import "./MovieCards.css";
import StarRatingComponent from 'react-star-rating-component';
import { Card } from "react-bootstrap";

export const MovieCards = ({ film }) => {
      return (
    <div className="MovieCards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={film.poster} />
        <Card.Body className="cardBody">
          <h4 className="cardTitle">{film.title}</h4>
          <div className="cardtext">
            <Card.Text>{film.year} </Card.Text>
            <StarRatingComponent 
                  name="rate1" 
                  starCount={5}
                  value={film.rating}
                  emptyStarColor={"white"}
        />
            </div>
            </Card.Body>
      </Card>
    </div>
  );
};