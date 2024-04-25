import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Shop from "./Shop";
import Cart from "./Cart";
import Layout from "./Layout";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";


export default function Router () {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route  path="/" element={<Shop />} />
                <Route  path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                    <Route  path="/cart" element={<Cart />} />
                </Route>
                <Route  path="/register" element={<Register />} />
            </Route>
        </Routes>
    </BrowserRouter>  
    );
}