import { Link } from "react-router-dom";
import { useState } from "react";
import Select from 'react-select'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/FirebaseConfig'


const LogInForm = () => {

    const [logInEmail, setLogInEmail] = useState();
    const [logInPassword, setLogInPassword] = useState();
    const [branchOffice, setBranchOffice] = useState()
    const [errorLogIn, setErrorLogIn] = useState("");
    const [loggedUser, setLoggedUser] = useState({});


    const logIn = async () => {

        try {
            const user = await signInWithEmailAndPassword(auth, logInEmail, logInPassword)
            console.log(user)
        }
        catch (error) {
            setErrorLogIn(error.message)
            console.error(error.message)
        }

    };

    const logOut = async () => {

        await signOut(auth)

    };


    onAuthStateChanged(auth, (currentUser) => {
        setLoggedUser(currentUser)
    });


    const options = [
        { value: '01', label: 'Trelew' },
        { value: '53', label: 'Mar del Tuyú' },
        { value: '75', label: 'Belgrano 2' }
    ]

    const handleSelect = (e) => {
        setBranchOffice(e.value);
        console.log(branchOffice)
    };

    const handleEmail = (e) => {
        setLogInEmail(e.target.value)
        console.log(logInEmail)
    }

    const handlePassword = (e) => {
        setLogInPassword(e.target.value)
        console.log(logInPassword)
    }


    return (

        <>
            <h1>Bienvenido, por favor ingrese sus datos</h1>
            <input
                placeholder="Mail"
                type="text"
                onChange={e => handleEmail(e)}
            />
            <input
                placeholder="Contraseña"
                type="password"
                onChange={e => handlePassword(e)}
            />
            <Select
                defaultValue="Ingrese su sucursal"
                onChange={e => handleSelect(e)}
                options={options}
                placeholder="Seleccione su Sucursal"
            />
            <p className="loginContainer__form--error">{errorLogIn}</p>

            {logInEmail && logInPassword && branchOffice && !loggedUser ?
                <button onClick={logIn} className="loginContainer__form--button">
                    Iniciar Sesión
                </button>
                :
                <button className="loginContainer__form--button" id="registerDisabled" >
                    Iniciar sesión
                </button>
            }
            {loggedUser ?
                <div>
                    <h4 className="loginContainer__form--success">Usuario logueado: {loggedUser?.email}</h4>
                    <button className="loginContainer__form--button" onClick={logOut}>
                                Cerrar sesión
                            </button>

                    <Link to="/dashboard">
                        <button className="loginContainer__form--button">Ingresar al sitio</button>
                    </Link>
                </div>
                :
                <>
                </>
            }

        </>


    );
}

export default LogInForm;