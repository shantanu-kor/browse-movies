import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

import { authActions } from '../store/authSlice';

const NavBar = () => {
    const auth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authHandler = (event) => {
        event.preventDefault();
        dispatch(authActions.setFalse());
        localStorage.setItem("login", false);
        navigate('/auth');
    }

    return (
        <React.Fragment>
            <Navbar className="py-2 bg-gradient-to-r from-violet-950 via-violet-700 to-violet-300 flex flex-wrap justify-between">
                <h1 className="text-2xl text-white"><span className="text-3xl font-bold">Browse</span> Movies</h1>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link className="md:text-white text-black md:text-2xl text-1xl" as='div'>
                        <Link className="hover:text-rose-500" to="/">Home</Link>
                    </Navbar.Link>
                    <Navbar.Link className="md:text-white text-black md:text-2xl text-1xl" as='div'>
                        <Link className="hover:text-rose-500" to="/company-info">Company Info</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
                <button className="md:text-2xl hidden md:inline text-1xl hover:text-white" onClick={authHandler}>{auth ? 'Logout' : 'SignUp'}</button>
            </Navbar>
            <div className="text-right">
                <button className="inline md:hidden text-1xl m-1 p-1 bg-purple-600 text-white rounded" onClick={authHandler}>{auth ? 'Logout' : 'SignUp'}</button>
            </div>
        </React.Fragment>
    )
}

export default NavBar;