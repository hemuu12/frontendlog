import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import AllRoute from './useAllRoute';



const App = () => {
    return (
<>
            <div className="topnav">
                <a href='/'>
                    <Link to="/">Home</Link>
                </a>
                <a href='/login'>
                    <Link to="/login">Login</Link>
                </a>
                <a href='/signup'>
                    <Link to="/signup">Signup</Link>
                </a>
                <a href='/about'>
                    <Link to="/about">About</Link>
                </a>
            </div>
        <div>
            <AllRoute/>
        </div>
</>
    );
}


export default App
