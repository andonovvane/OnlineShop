import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { api } from "../store/api";
import { useDispatch } from "react-redux";
import { login, loadUser } from "../store/slices/user"

export default function Login () {
    const [email, setEmail] = useState("andonov.vane2@gmail.com")
    const [password, setPassword] = useState("andonov")
    const [loginError, setLoginError] = useState("")

    const dispatch = useDispatch();
    const loc = useLocation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("/auth/token/", {email, password});

            localStorage.setItem("accessToken", res.data.access);
            dispatch(login(res.data.access));
            dispatch(loadUser(res.data.user));
            setLoginError("");

            const target = loc.state?.origin || "/cart";
            navigate(target);

        } catch (error) {
            if( error.response?.data.detail) {
                setLoginError(error.response.data.detail)
            } else {
                setLoginError("Login Failed")
                console.log(error)
            }
        }
    }

    return (
        <div id="login">
            <div>
                <form id="login-form" onSubmit={(e) => handleSubmit(e)}>
                    <input 
                        type="email"
                        name="email"
                        placeholder="eMail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type="submit">Login</button>
                    <p>{loginError}</p>
                    </form>
            </div>
            <div id="register">
                <p>Not registered yet?</p>
                <button><NavLink to={"/register"}>Register</NavLink></button>
            </div>
        </div>

    );
}