import "./Styles.css";
import React, { useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import PostData from "./components/data/posters.json";
import Search from "./components/Search/Search";
import AddMovies from "./components/AddMovies/AddMovies";
import SearchRate from "./components/SearchRate/SearchRate";
import Rating from "./components/Rating/Rating";
import FooterApp from "./components/Footer/FooterApp";
import Contact from "./components/Contact/Contact";
import {MovieDetails} from "./components/MovieDetails/MovieDetails";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [newMovie, setNewMovie] = useState(PostData);
  const [search, setSearch] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  
  // declare callback func
  const searchMovie = (title) => {
    setSearch(title);
  };
  const searchRatingMovie = (rate) => {
    setSearchRating(rate);
  };
  const adMovie = (favoriteMovie) => {
    setNewMovie([...newMovie, favoriteMovie]);
  };
                  /*************Remove button***************/
  const Remove = (removeTitle) => {
	setNewMovie(newMovie.filter((favorite => favorite.title !== removeTitle)));
  //setNewMovie(newMovie.splice(newMovie.findIndex(({title}) => title === removeTitle), 1));
};
  /****************** */

  return (
    <Router>
      <Switch>
      <Route  exact path="/">
          <div className="App">
              <Search searchMovie={searchMovie} />
              <SearchRate searchRatingMovie={searchRatingMovie} />
              <main>
                  <MovieList
                      posters={newMovie.filter(
                      p =>p.title.toLocaleUpperCase().includes(search.trim().toLocaleUpperCase()) &&
                      p.rating >= searchRating
                      )} 
                      handleRemove={Remove}/>
                    <AddMovies adMovie={adMovie}/>
                    <Rating /> 
                    <Contact/>
                </main>
                    <footer> <FooterApp /> </footer>   
              </div> 
        </Route>
    
        <Route  path="/:title" component={MovieDetails}/>
  
        </Switch>
      </Router>
  );
}
export default App;




