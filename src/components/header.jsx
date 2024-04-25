import { NavLink } from "react-router-dom";
import "./header.css"
import { computeTotalItems } from "../store/slices/cart";
import { useSelector } from "react-redux"

export default function Header () {
    // const totalItems = useSelector(state => computeTotalItems(state.cart));

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
                    {/* <span>{totalItems}</span> */}
                </span>
            </div>
        </div>
    );
}