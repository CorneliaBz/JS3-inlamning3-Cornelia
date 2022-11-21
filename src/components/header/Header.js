import React from "react";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <NavLink to="/"><img src={process.env.PUBLIC_URL + '/images/moviebird.png'} alt="logo"></img></NavLink>
            </header>
        )
    }
}