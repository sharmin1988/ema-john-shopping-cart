import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Context/UserContext';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    // const handelLogOutBtn = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.error(error))
    // }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid?
                    <button className='logout-btn' onClick={logOut}>Log out</button>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;