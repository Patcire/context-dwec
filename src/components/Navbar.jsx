import {NavLink} from "react-router-dom";
import {UserContext} from "../context/UserContext.jsx";
import {useContext} from "react";


const Navbar = () => {

    const {user, setUser} = useContext(UserContext)

    const logOut = () => {
        setUser(false)
    }

    return (

        <nav className='navbar navbar-dark bg-dark'>
            <NavLink to={"/"}>Home</NavLink>
            {
                user ? (
                    <>
                        <NavLink to={"/dashboard"}>Dashboard</NavLink>
                        <button onClick={() => {
                            logOut()
                        }}>Logout
                        </button>
                    </>
                ) : (
                    <button onClick={() => {
                        setUser(!user)
                    }

                    }>Login</button>
                )
            }
        </nav>
    )


}
export default Navbar
