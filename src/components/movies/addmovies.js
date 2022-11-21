
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

const AddMovies = () => {
  const MovieObject = {
    movieTitle: "",
    movieDiscription: "",
    movieImage: "https://palmvilla-chiangmai.com/wp-content/uploads/2022/05/istockphoto-911590226-612x612-1.jpeg",
    movieID: "",
  }

  const navigate = useNavigate();

  const userID = localStorage.getItem("userID")
  MovieObject.movieID = userID

  useEffect(() => {
    if (localStorage.getItem("userLoggedIn")) {

    } else {
      navigate("/");
    }
  },)

  const AddMovies = (e) => {
    e.preventDefault();

    const movieArray = localStorage.getItem("Movies") ? JSON.parse(localStorage.getItem("Movies")) : []
    movieArray.push(MovieObject)
    localStorage.setItem("Movies", JSON.stringify(movieArray))
  }

  return (
    <div className="bodyContainer">
      <div className="movieForm">
      <h1>Add Movie</h1>
        <form onSubmit={(e) => AddMovies(e)}>
          <input type="text" placeholder="Titel" required onChange={(e) => MovieObject.movieTitle = e.target.value}></input>
          <input type="text" placeholder="Discription" required onChange={(e) => MovieObject.movieDiscription = e.target.value}></input>
          <input type="text" placeholder="Paste IMG Link or Leave Empty" onChange={(e) => MovieObject.movieImage = e.target.value}></input>
          <input type="submit" value="Add Movie"></input>
        </form>
      </div>
    </div>
  )
}

export default AddMovies;