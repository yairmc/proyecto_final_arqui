import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const url = "http://localhost:3001/login"


import "./LoginA.css"
const LoginA = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        secretKey: ""
    })
    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        doLogin(user)

    }
    const doLogin = async (user) => {
        try {
            const response = await axios.post(`${url}/inhabitant`, user)
            const { data } = response;
            navigate("/adminA")
        } catch (error) {

        }
    }
    const back = () => {
        navigate("/")
    }



    return (
        <div className="login">
            <form className="loginForm"
                onSubmit={handleOnSubmit}
            >
                <h1>Inicia sesion como habitante</h1>
                <div className="input">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" placeholder="Tu nombre"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="input">
                    <label htmlFor="secretKey">Llave Secreta</label>
                    <input type="password" name="secretKey" id="secretKey" placeholder="Tu llave secreta"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="submit">
                    <button onClick={back}>Volver</button>
                    <input type="submit" value={"Iniciar Sesion"} />
                </div>
            </form>
        </div>
    )
}

export default LoginA