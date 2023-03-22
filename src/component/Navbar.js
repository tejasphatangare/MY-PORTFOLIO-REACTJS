import React from 'react'
import {
    Link
} from "react-router-dom";

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-body-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand">{props.name}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Blog">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="RecentProject">Recent_Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Hireus">Hire_Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Membership">Membership</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="Contact">Contact_Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Social Media
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="https://www.instagram.com/__tejas_phatangare__/">InstaGram</Link></li>
                                    <li><Link className="dropdown-item" to="edin.com/in/tejas-phatangare-339897235/">LinkedIn</Link></li>
                                    <li><Link className="dropdown-item" to="https://twitter.com/Tejasss_Says">Twitter</Link></li>
                                    <li><Link className="dropdown-item" to="https://hi-in.facebook.com/people/Tejas-Phatangare/pfbid0bVjtz2y66HRTAHLk9bqhSMuXkXmnTDqipY6aX8cQkSxmgAP9PNBbtdB9KE5FUdnKl/">FaceBook</Link></li>
                                    <li><Link className="dropdown-item" to="https://github.com/tejasphatangare">GitHub</Link></li>
                                    <li><Link className="dropdown-item" to="https://www.youtube.com/@__tejas_Phatangare__">YouTube</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
