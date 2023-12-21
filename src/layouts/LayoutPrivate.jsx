import Navbar from "../components/Navbar.jsx";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import Home from "../pages/Home.jsx";
import {useContext, useEffect} from "react";
import {UserContext} from "../context/UserContext.jsx";

const LayoutPrivate = () => {

    const {user, setUser} = useContext(UserContext)

    // con esto controlamos
    // que solo podamos acceder a la ruta /dashboard di estamos logueados
    return (
        user ? (
                <div className='container-fluid'>
                    <Outlet></Outlet>
                </div>
            ) :
            (
                <Navigate to={"/"}></Navigate>
            )
    )
}
export default LayoutPrivate
