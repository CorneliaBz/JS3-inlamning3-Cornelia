import React, { Fragment } from "react";
import SignUp from "../../form/signup";
import Login from "../../form/login";

export default class LoginPage extends React.Component {

  render() {
    return (
      <Fragment>
        <div className="bodyContainer">
          <div className="forms">
            <SignUp></SignUp>
            <Login></Login>
          </div>
        </div>
      </Fragment>
    )
  }
}