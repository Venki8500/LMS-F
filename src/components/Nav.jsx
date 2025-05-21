import React from "react";
import { Link } from "react-router";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <i className="fas fa-landmark me-2"></i>
                    NexGen FinServe
                </Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item me-3">
                            <Link 
                                to="/login" 
                                className="btn btn-outline-light px-4"
                            >
                                <i className="fas fa-sign-in-alt me-2"></i>
                                Login
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link 
                                to="/signup" 
                                className="btn btn-light px-4"
                            >
                                <i className="fas fa-user-plus me-2"></i>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;