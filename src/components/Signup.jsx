import React from "react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import { useUsersignupMutation } from "../services/LmsApi";
import { Link } from "react-router-dom";
function Signup() {
    var navigate=useNavigate()
    var [usrSignFn]=useUsersignupMutation();
    return(
         <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white text-center py-3">
                                <h3 className="mb-0">Create Account</h3>
                            </div>
                            <div className="card-body p-4">
                                <Formik
                                    initialValues={{
                                        username: "",
                                        password: "",
                                        mobile: Number
                                    }}
                                    onSubmit={function(values) {
                                        console.log(values)
                                            usrSignFn(values).then(function(res){
                                                console.log(res)
                                                navigate("/login")
                                        })
                                        
                                        
                                    }}
                                >
                                    {(formik) => (
                                        <Form>
                                            <div className="mb-4">
                                                <label className="form-label fw-bold">Username</label>
                                                <Field
                                                    name="username"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your username"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label fw-bold">Password</label>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your password"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label fw-bold">Mobile Number</label>
                                                <Field
                                                    name="mobile"
                                                    type="number"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your mobile number"
                                                />
                                            </div>

                                            <div className="d-grid gap-2">
                                                <button type="submit" className="btn btn-primary btn-lg">
                                                    <i className="fas fa-user-plus me-2"></i>
                                                    Create Account
                                                </button>
                                            </div>

                                            <div className="text-center mt-4">
                                                <p className="mb-0 text-muted">
                                                    Already have an account?{" "}
                                                    <Link to="/login" className="text-primary fw-bold text-decoration-none">
                                                        Sign In
                                                    </Link>
                                                </p>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;