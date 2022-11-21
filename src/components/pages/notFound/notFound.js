import { NavLink, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigator = useNavigate();
    const goBack = () => {
        navigator(-1)
    }

    return (
        <div>
            <h1>404 not found</h1>
            <ul>
                <li>
                <NavLink to="/">Go back to Home</NavLink>
                </li>
            </ul>
            <button onClick={() => goBack()}>Go back</button>
        </div>
        
    )
}

export default NotFound;