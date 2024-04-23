import { NavLink } from "react-router-dom";
import "./header.css"

export default function Header () {

    return (
        <div id="header">
            <div id="left-section">
                <NavLink to={"/"}>
                    <h1>Crazy Shirt Shop</h1>  
                </NavLink>
            </div>
            <div id="right-section">
                <NavLink to={"/login"}><button>Login</button></NavLink>
                <NavLink to={"/"}>Shop</NavLink>
                <span>
                    <NavLink to={"/cart"}>Cart</NavLink>
                    <span> (0)</span>
                </span>
            </div>
        </div>
    );
}