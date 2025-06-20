import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../../context/AuthContext/AuthContext';

import jobIcon from "../../assets/logo/favicon.png"

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)
    
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
            alert("signout successfully")
            })
            .catch(error => {
            console.log(error.message)
        })
    }


    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>Home</NavLink></li>
        
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl ">
                    <img src={jobIcon} alt="Icon" />

                    <h2>JobConnect</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}

                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-primary ml-2">Sign Out</button>
                        :
                        <>
                            <Link to="/register" className='border-b-2 border-purple-900'>Register</Link>
                            <Link to="/signIn" className="btn btn-primary ml-2">Sign In</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;