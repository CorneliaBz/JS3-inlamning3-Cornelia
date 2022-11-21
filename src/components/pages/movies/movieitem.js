import { useLocation } from "react-router-dom";

const MovieItem = () => {
  const location = useLocation();
  const movieInfoObject = location.state.movieInfoObject;

  if (movieInfoObject.image === undefined) {
    movieInfoObject.image = "https://palmvilla-chiangmai.com/wp-content/uploads/2022/05/istockphoto-911590226-612x612-1.jpeg"
  }

  return (
    <div className="bodyContainer">
      <div className="imgboxItem"><img src={movieInfoObject.image} alt=""></img></div>
      <h1>{movieInfoObject.title}</h1>
      <p>{movieInfoObject.discription}</p>
    </div>

  )
}
export default MovieItem;