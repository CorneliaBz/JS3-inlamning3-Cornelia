import React, { Fragment } from "react";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Nav from "../nav/nav";
import { Outlet } from "react-router-dom";

export default class Layout extends React.Component {

  render() {
    return (
      <Fragment>
        <Header></Header>
        <Nav></Nav>
        <Outlet/>
        <Footer></Footer>
      </Fragment>
    )
  }
}