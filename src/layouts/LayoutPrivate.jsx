import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";

const LayoutPrivate = () => {
    return (
        <div className='container-fluid'>
            <Outlet></Outlet>
        </div>
    )
}
export default LayoutPrivate
