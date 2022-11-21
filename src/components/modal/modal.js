const Modal = (props) => {
    
    const buttonClicked = () => {
        props.closeModal();
    }

    return (
        <div>
            <div className="overlay"></div>
            <div className="modal">
                <h1>{props.message}</h1>
                <button onClick={ () => buttonClicked()}> OK </button>
            </div>
        </div>
    )
}
export default Modal;