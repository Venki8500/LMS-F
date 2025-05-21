import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import { useUsrLoginMutation } from "../services/LmsApi";

function Login() {
    var navigate = useNavigate();
    var [usrLoginFn] = useUsrLoginMutation();

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white text-center py-3">
                                <h3 className="mb-0">Welcome</h3>
                            </div>
                            <div className="card-body p-4">
                                <Formik
                                    initialValues={{
                                        username: "",
                                        password: ""
                                    }}
                                    onSubmit={function(values) {
                                        console.log(values)
                                        usrLoginFn(values).then(function(res) {
                                            console.log(res)
                                            var role = res.data.role;
                                            var msg = res.data.msg;
                                            if (msg === "loginsuccess") {
                                                if (role === "user") {
                                                    window.localStorage.setItem("token", res.data.token)
                                                    window.localStorage.setItem("role", role)
                                                    navigate("/dashboard")
                                                }
                                                else {
                                                    if (role === "manager") {
                                                        window.localStorage.setItem("token", res.data.token)
                                                        window.localStorage.setItem("role", role)
                                                        navigate("/managerdashboard")
                                                    }
                                                    else {
                                                        if (role === "admin") {
                                                            window.localStorage.setItem("token", res.data.token)
                                                            window.localStorage.setItem("role", role)
                                                            navigate("/admindashboard")
                                                        }
                                                        else {
                                                            navigate("/login")
                                                        }
                                                    }
                                                }
                                            }
                                           
                                        })
                                    }}
                                    >
                                        {
                                            (formik) => {
                                                return (
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
                                                        <div className="d-grid gap-2">
                                                            <button type="submit" className="btn btn-primary btn-lg">
                                                                Sign In
                                                            </button>
                                                        </div>
                                                        <div className="text-center mt-4">
                                                            <p className="mb-0 text-muted">
                                                                Not registered yet?{" "}
                                                                <a href="/signup" className="text-primary fw-bold text-decoration-none">
                                                                    Create an Account
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </Form>
                                                );
                                            }}
                                        </Formik>
                                        
                                        <div className="mt-4 pt-3 border-top">
                                            <h3 className="text-center mb-3 text-muted fs-5">Demo Accounts</h3>
                                            <div className="table-responsive">
                                                <table className="table table-sm table-bordered mb-0">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th className="text-center">Role</th>
                                                            <th className="text-center">Username/Password</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-center">User</td>
                                                            <td className="text-center">mani/123</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-center">Manager</td>
                                                            <td className="text-center">venki/123</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-center">Admin</td>
                                                            <td className="text-center">praveen/123</td>
                                                            
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
}

export default Login;