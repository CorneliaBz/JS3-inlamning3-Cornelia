import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {

  render() {
    return (
      <Fragment>
        <nav>
          <ul>
          <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/addMovie">My Movies</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </Fragment>
    )
  }
}