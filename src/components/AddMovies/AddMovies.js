import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import './AddMovie.css';
import ReactStars from "react-rating-stars-component";

const AddMovies = ({adMovie}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMov,setNewMov]=useState({
    
    title: '',
    Storyline:'',
    year:'',
    rating: 0 ,
    poster:'',
    Trailer:''
  })
  
  const changeMovie = (e) =>
  {
    setNewMov({...newMov,
      [e.target.name] : e.target.value
    }
      )
  }
  
  return (
    <>
      <div className="addBtn">
        <Button variant="primary" onClick={handleShow}>
        +ADD
        </Button>
      </div> 

      <Modal show={show} onHide={handleClose} animation={false} className="AddMovie">
      <Modal.Header>
        <h3 className="headerContainer">Add your favorite movie 🎥 </h3> 
      </Modal.Header>
        <Modal.Body>
          <div className="input-block">
            <label className="input-label"> Title : </label>
          <input type="text" name='title'value={newMov.title} onChange={changeMovie}/>
        
          </div >
          <div className="input-block">
            <label className="input-label">Poster:</label>
            <input type="text" name='poster' value={newMov.poster} onChange={changeMovie}/>
            </div>
            <div className="input-block">
            <label className="input-label">Storyline:
            </label>
            <input type="text" name="Storyline" value={newMov.Storyline} onChange={changeMovie}/>
            </div>
            <div className="input-block">
            <label className="input-label">Year:
            </label>
            <input type="text" name="year" value={newMov.year} onChange={changeMovie}/>
            </div>
            <div className="input-block">
            <label className="input-label">Rating:
            </label>
            {  /* <input type="text" name="rating" value={newMov.rating} onChange={changeMovie}/>*/}
              <ReactStars  onChange={(rate) =>
            {
              setNewMov({...newMov,
            rating : rate
                    })
                  }
                }
              count={5} 
              size={24} 
              activeColor="#ffd700"
              edit={true} 
              isHalf={true} 
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>} />
            </div>
            <div className="input-block">
            <label className="input-label">Trailer:
            </label>
            <input type="text" name="Trailer" value={newMov.Trailer} onChange={changeMovie}/>
            </div>
          <div>
          <Button variant="primary" onClick={()=>
          {adMovie(newMov);setNewMov({title:"",poster:"",Storyline:"",year:"",rating:"",Traiter:""});setShow(false)}}>
            Add Movie
          </Button>        
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
  
export default AddMovies;