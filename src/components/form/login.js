import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Modal from "../modal/modal";

const Login = () => {
    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    //Modal messages
    const [message, setMessage] = useState('')
    const [openModal, setOpenModal] = useState('')

    const closeModal = () => {
        setOpenModal(false)
    }

    const checkUser = (e) => {
        e.preventDefault();

        const userArray = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : []

        let checkUser = false;
        for (let i = 0; i < userArray.length; i++) {
            if (userArray[i].inputEmail === userEmail && userArray[i].inputPassword === userPassword) {
                checkUser = true;

                const userID = userArray[i].inputEmail;
                localStorage.setItem("userID", (userID))
            }
        }
        if (checkUser === true) {

            const userLoggedIn = true;
            localStorage.setItem("userLoggedIn", (userLoggedIn))

            navigate("/");
            //Run modal
            setMessage(`Message: Welcome ${userEmail}`)
            setOpenModal(true)

        } else {
            //Run modal
            setMessage(`User do not exsist`)
            setOpenModal(true)
        }
    }

    return (
        <div>
            <h1>Welcome back!</h1>
            <form onSubmit={(e) => checkUser(e)}>
                <input type="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
                <input type="submit" value="Login" />
            </form>
            {openModal && <Modal message={message} closeModal={closeModal}></Modal>}
        </div>
    )
}
export default Login;