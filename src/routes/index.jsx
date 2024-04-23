import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Shop from "./Shop";
import Cart from "./Cart";
import Layout from "./Layout";
import Register from "./Register";


export default function Router () {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route  path="/" element={<Shop />} />
                <Route  path="/login" element={<Login />} />
                <Route  path="/cart" element={<Cart />} />
                <Route  path="/register" element={<Register />} />
            </Route>
        </Routes>
    </BrowserRouter>  
    );
}