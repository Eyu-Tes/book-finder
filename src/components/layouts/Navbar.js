import React from 'react'
import logo from './book-finder.png'
import './Navbar.css'

const Navbar = () => 
    <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="#"> <img src={logo}/> Book Finder </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
            <div className="dropdown-divider"></div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
            </ul>
        </div>
    </nav>

export default Navbar
