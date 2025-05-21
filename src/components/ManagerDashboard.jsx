import React from "react";
import { useNavigate } from "react-router";
import { useGetDataQuery, useDownpaymentReciveMutation } from "../services/LmsApi";

function ManagerDashboard() {
    var navigate=useNavigate()
    var {isLoading,data}=useGetDataQuery()
    // console.log(data)

    var [downpaymntRecFn]=useDownpaymentReciveMutation()

    

            function downpaymentR(id){
                downpaymntRecFn(id)
                alert("status changed to downpayment received")
            }

    async function logout(){
        try{
            await window.localStorage.clear();
            navigate("/login")
        }
        catch(err){
            console.log(err)
        }
        
    }

    return (
       
                           <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="py-3">Customer Name</th>
                                            <th className="py-3">Loan Item</th>
                                            <th className="py-3">Product Cost</th>
                                            <th className="py-3 text-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map(function(loan) {
                                            var ar = loan.status;
                                            return (
                                                <tr key={loan._id}>
                                                    <td className="py-3 fw-semibold">{loan.customerName}</td>
                                                    <td className="py-3">{loan.loanitem}</td>
                                                    <td className="py-3">₹{loan.productcost.toLocaleString()}</td>
                                                    <td className="text-center py-3">
                                                        {ar[ar.length-1].code === "applied" && (
                                                            <span className="badge bg-info px-3 py-2">
                                                                <i className="fas fa-clock me-2"></i>
                                                                Waiting for Approval
                                                            </span>
                                                        )}

                                                        {ar[ar.length-1].code === "approved" && (
                                                            <button 
                                                                className="btn btn-success btn-sm px-4"
                                                                onClick={() => downpaymentR(loan._id)}
                                                            >
                                                                <i className="fas fa-money-bill-wave me-2"></i>
                                                                Receive Downpayment
                                                            </button>
                                                        )}

                                                        {ar[ar.length-1].code === "downpayment Received" && (
                                                            <span className="badge bg-primary px-3 py-2">
                                                                <i className="fas fa-hourglass-half me-2"></i>
                                                                Awaiting Disbursement
                                                            </span>
                                                        )}

                                                        {ar[ar.length-1].code === "disbursed" && (
                                                            <span className="badge bg-success px-3 py-2">
                                                                <i className="fas fa-check-circle me-2"></i>
                                                                Loan Disbursed
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
             

export default ManagerDashboard;