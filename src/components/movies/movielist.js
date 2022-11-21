import React from "react";
import { useNavigate } from "react-router-dom"

const MoviesList = () => {
  const movieArray = localStorage.getItem("Movies") ? JSON.parse(localStorage.getItem("Movies")) : []
  const navigate = useNavigate();

  const readMoreBtn = (value) => {
    const movieInfoObject = {
      title: value.movieTitle,
      discription: value.movieDiscription,
      image: value.movieImage,
      id: value.movieID,
    }

    navigate("/movies/" + value.movieTitle, { state: { movieInfoObject: movieInfoObject } })
  }

  const canDelete = (value, index) => {
    const movieInfoObject = {
      title: value.movieTitle,
      discription: value.movieDiscription,
      image: value.movieImage,
      id: value.movieID
    }
      if (movieInfoObject.id === localStorage.getItem("userID")) {
        const tempArray = [...movieArray];
        tempArray.splice(index, 1);
        localStorage.setItem('Movies', JSON.stringify(tempArray));
        
        //inte den finaste lösningen men fick inte rätt på det med useEffect eller forceUpdate.
        window.location.reload();

      } else {
        // console.log("cant delete", "By user: ", movieInfoObject.id)
      }
  }

  return (
    <div className="movieContainer">
      {movieArray.map((value, index) => {
        return (
          <div key={index} className="movie">
            <div className="imgbox"><img src={value.movieImage} alt=""></img></div>
            <div className="movieInfo">
            <button className="deleteButton" onClick={() => canDelete(value, index)}> X </button>
              <h4> ★ ★ ★ ★ ★ </h4>
              <h1 className="h1MovieTitle">{value.movieTitle}</h1>
              <h4>{value.movieDiscription}</h4>
              <button className="readMoreButton" onClick={() => readMoreBtn(value)}>Read More</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default MoviesList;
