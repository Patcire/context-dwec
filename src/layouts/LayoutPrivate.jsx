import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import Home from "../pages/Home.jsx";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";

const LayoutPrivate = () => {

    const {user, setUser} = useContext(UserContext)

    return (
        user ? (
                <div className='container-fluid'>
                    <Outlet></Outlet>
                </div>
            ) :
            (
                <Home></Home>
            )
    )
}
export default LayoutPrivate
