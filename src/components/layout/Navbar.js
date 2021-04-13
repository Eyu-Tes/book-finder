import React from 'react'
import {Link} from 'react-router-dom'
import logo from './book-finder.png'
import './Navbar.css'

const Navbar = () => 
    <nav className="navbar navbar-expand-md">
        <div className="container">
            <a className="navbar-brand" href="/book-finder"> 
                <img src={logo} alt="book finder"/> Book Finder 
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <div className="dropdown-divider"></div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/book-finder" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/book-finder/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

export default Navbar
