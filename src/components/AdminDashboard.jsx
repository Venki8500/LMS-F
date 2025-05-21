import React from "react";
import { useApproveloanMutation, useDesburseloanMutation, useGetDataQuery } from "../services/LmsApi";
import { useNavigate } from "react-router";

function AdminDashboard() {
    var navigate = useNavigate();
    var { isLoading, data } = useGetDataQuery();
    var [approvlnFn] = useApproveloanMutation();
    var [desburselnFn] = useDesburseloanMutation();

    function approvln(id){
                // console.log(id)
                approvlnFn(id)
                alert("status changed to approved")
            }

            function desburse(id){
                desburselnFn(id)
                alert("status changed to desburse")
            }

            

    async function logout(){
     try{
         await window.localStorage.clear()
         navigate("/login")
     }
     catch(err){
         console.log(err)
     }
     
      
     }
    return(
        <div className="bg-light min-vh-100">
            <div className="container py-5">
                <div className="card shadow-lg">
                    <div className="card-header bg-primary text-white py-3">
                        <h2 className="mb-0 text-center">Loan Management Dashboard</h2>
                    </div>
                    <div className="card-body p-4">
                        {isLoading ? (
                            <div className="text-center py-4">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="py-3">Name</th>
                                            <th className="py-3">Loan Item</th>
                                            <th className="py-3">Product Cost</th>
                                            <th className="py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map(function(loan) {
                                            var ar = loan.status;
                                            return (
                                                <tr key={loan._id}>
                                                    <td className="fw-semibold">{loan.customerName}</td>
                                                    <td>{loan.loanitem}</td>
                                                    <td>₹{loan.productcost.toLocaleString()}</td>
                                                    <td>
                                                        {ar[ar.length-1].code === "applied" && (
                                                            <button 
                                                                className="btn btn-success btn-sm px-4"
                                                                onClick={() => approvln(loan._id)}
                                                            >
                                                                Approve
                                                            </button>
                                                        )}
                                                        
                                                        {ar[ar.length-1].code === "approved" && (
                                                            <span className="badge bg-primary px-3 py-2">
                                                                Waiting For Downpayment
                                                            </span>
                                                        )}
                                                        
                                                        {ar[ar.length-1].code === "downpayment Received" && (
                                                            <button 
                                                                className="btn btn-success btn-sm px-4"
                                                                onClick={() => desburse(loan._id)}
                                                            >
                                                                Disburse
                                                            </button>
                                                        )}
                                                        
                                                        {ar[ar.length-1].code === "disbursed" && (
                                                            <span className="badge bg-warning text-dark px-3 py-2">
                                                                Loan Disbursed Successfully
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;