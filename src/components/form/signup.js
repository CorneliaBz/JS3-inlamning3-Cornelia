import React from "react";
import Modal from "../modal/modal";

export default class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      message: "",
      openModal: false
    }
  }
  SignupObject = {
    inputEmail: "",
    inputPassword: ""
  }

  closeModal = () => {
    this.setState({openModal: false})
  }

  checkEmail = (e) => {
    e.preventDefault();
    const userArray = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : []

    //check if email already is in use
    let checkEmail = false;
    for (let i = 0; i < userArray.length; i++) {
      if (userArray[i].inputEmail === this.SignupObject.inputEmail) {
        checkEmail = true;
      }
    }
    if (checkEmail === true) {
      //Run Modal
      this.setState({message: "Email already in use", openModal: true})

    } else {
      userArray.push(this.SignupObject)
      localStorage.setItem("Users", JSON.stringify(userArray))
      // Run Modal
      this.setState({message: "User registered", openModal: true})
    }
  }

  render() {
    return (
      <div>
        <h1>Create your account</h1>
        <form onSubmit={(e) => this.checkEmail(e)}>
          <input type="email" placeholder="Email" required onChange={(e) => this.SignupObject.inputEmail = e.target.value}></input>
          <input type="password" placeholder="Password" required onChange={(e) => this.SignupObject.inputPassword = e.target.value}></input>
          <input type="submit" value="Sign Up"></input>
        </form>
        {this.state.openModal && <Modal message={this.state.message} closeModal={this.closeModal}></Modal>}
      </div>
    )
  }
}