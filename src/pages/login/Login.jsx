import "./login.css"
import { useRef, useContext } from "react";
import {loginCall} from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext"
import { CircularProgress } from "@material-ui/core"
import { Link } from "react-router-dom";

export default function Login() {

    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value, password:password.current.value}, dispatch)
    }

    console.log(user)
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Nitempo</h3>
                    <span className="loginDesc">This is the login description</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress size='20px'/>: "Log in"}</button>
                        <span className="loginForgot">Forgot Password</span>
                        <Link to={"/register"}>
                            <button className="loginRegister">{isFetching ? <CircularProgress size='20px'/>: "Create an Account"}</button>
                        </Link>
                    </form>
                </div>

            </div>
        </div>
    )
}
