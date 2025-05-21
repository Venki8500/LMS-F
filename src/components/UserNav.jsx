import React from "react";
import { Link, useNavigate } from "react-router";

function UserNav() {
    var navigate=useNavigate()
        async function logout(){
            try{
                await window.localStorage.clear()
                navigate("/login")
            }
            catch(err){
                console.log(err)
            }
            
             
            }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/dashboard">
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
                        <li className="nav-item">
                            <button 
                                onClick={logout}
                                className="btn btn-light px-4"
                            >
                                <i className="fas fa-sign-out-alt me-2"></i>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default UserNav;