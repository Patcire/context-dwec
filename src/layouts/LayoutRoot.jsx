import Navbar from "../components/Navbar.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import LayoutPrivate from "./LayoutPrivate.jsx";

export const LayoutRoot = () => {


    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
