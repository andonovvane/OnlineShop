import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Login from "./Login";

export default function ProtectedRoute () {
    const isLoggedIn = useSelector((state) => state.user.accessToken); 

    if (!isLoggedIn) {
        return <Login />
    }
    else {
        return <Outlet />
    }
}