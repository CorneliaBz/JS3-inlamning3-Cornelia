import React, { Fragment } from "react";
import MoviesList from "../../movies/movielist";

export default class MoviesPage extends React.Component {

  render() {
    return (
      <Fragment>
        <h1>Amazing Movies</h1>
        <div className="bodyContainer">
          <MoviesList></MoviesList>
        </div>

      </Fragment>
    )
  }
}