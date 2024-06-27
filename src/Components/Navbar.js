import React from 'react'

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg" >
            <div className="container">
                <Link className="navbar-brand"><i className='fa-solid fa-snowflake'></i> <strong>OLAVERA</strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ps-3">
                            <Link className="nav-link nav-bar" aria-current="page" to="/"> Home</Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link" to="/About"> About Us</Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link" to="/Services">Our Services</Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link" to="/Experiences">Our Experiences</Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link" to="/Resources">Resources</Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link" to="/Contact"><button className='btn btn-sm btn-danger rounded-pill'>Contact Us</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link'>
                                <span className='ps-3'><i className='fa-brands fa-facebook'></i></span>
                                <span className='ps-3'><i className='fa-brands fa-twitter'></i></span>
                                <span className='ps-3'><i className='fa-brands fa-instagram'></i></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
