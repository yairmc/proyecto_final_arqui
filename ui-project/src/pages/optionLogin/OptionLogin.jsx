import { useNavigate } from "react-router-dom"



import "./OptionLogin.css"
const OptionLogin = () => {

    const navigate = useNavigate()



    const navigateToLoginA = () => {
        navigate("/loginA");
    }

    const navigateToLoginE = () => {
        navigate("/loginE");
    }


    return (
        <div className="optionLogin">
            <div className="options">
                <h1>Iniciar sesion</h1>
                <div className="option">
                    <button onClick={navigateToLoginE}>Como Empleado</button>
                </div>
                <div className="option">
                    <button onClick={navigateToLoginA}>Como Habitante</button>
                </div>
            </div>
        </div>
    )
}

export default OptionLogin