import React from "react";
import { useNavigate } from "react-router";
import { useGetLoanDetailsQuery, usePayEmiMutation } from "../services/LmsApi";

function Dashboard() {
    var navigate=useNavigate()
    var {isLoading,data}=useGetLoanDetailsQuery()
    console.log(data)


    var [payEmFn]=usePayEmiMutation()

    function payE(a,b){
        // console.log(a)
        // console.log(b)
        payEmFn({ loanid: a, emiid: b }).then(function(res){
            console.log(res)
        }).catch(function(err){
            console.log(err)
        })
        alert("changed to paid  ")
        
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
    return (
       
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="py-3">EMI Date</th>
                                            <th className="py-3">EMI Amount</th>
                                            <th className="py-3 text-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.emis.map(function(emi) {
                                            return (
                                                <tr key={emi._id}>
                                                    <td className="py-3">{new Date(emi.emiDate).toDateString()}</td>
                                                    <td className="py-3">₹{emi.emiAmount.toLocaleString()}</td>
                                                    <td className="text-center py-3">
                                                        {emi.emiStatus === "not paid" ? (
                                                            <button 
                                                                className="btn btn-success btn-sm px-4"
                                                                onClick={() => payE(data._id, emi._id)}
                                                            >
                                                                <i className="fas fa-money-bill-wave me-2"></i>
                                                                Pay Now
                                                            </button>
                                                        ) : (
                                                            <span className="badge bg-secondary px-3 py-2">
                                                                <i className="fas fa-check me-2"></i>
                                                                Paid
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
                   

export default Dashboard;