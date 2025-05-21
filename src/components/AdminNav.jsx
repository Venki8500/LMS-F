import React from "react";
import { Link, useNavigate } from "react-router";

function AdminNav() {
    var navigate = useNavigate();
    
    async function logout() {
        try {
            await window.localStorage.clear();
            navigate("/login");
        } catch(err) {
            console.log(err);
        }
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/admindashboard">
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
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item me-3">
                            <Link 
                                className="nav-link active d-flex align-items-center" 
                                to="/addmanager"
                            >
                                <i className="fas fa-users-cog me-2"></i>
                                Managers List
                            </Link>
                        </li>
                        
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

export default AdminNav;