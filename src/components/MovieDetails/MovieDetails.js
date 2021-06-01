import React,{useState,useEffect} from "react";
import "./MovieDetails.css";
import PostData from "../data/posters.json";
import ReactPlayer from "react-player";

export const MovieDetails = ({ match }) => {
  const [movie,setMovie]=useState("")
  useEffect(() => {
    setMovie(PostData.find(el=>el.title === match.params.title))
  }, [match.params.title])
      return (
    <div className="MovieDetails">
          <p className="title"><b>Title : </b>{movie.title}</p>
            <p className="storyLine"><b>StoryLine : </b>{movie.Storyline} </p>
          <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={movie.Trailer}
          width='90%'
          height='80%'
          controls
        />
      </div>
    </div>
  );
};