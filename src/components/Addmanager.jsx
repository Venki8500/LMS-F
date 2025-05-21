import React from "react";
import { useAprvMangrMutation, useGetMangerQuery, useRmvMangrMutation } from "../services/LmsApi";
import AdminNav from "./AdminNav";

function Addmanager() {
    var { isLoading, data } = useGetMangerQuery();
    var [aprvMngrFn] = useAprvMangrMutation();
    var [remvMngrFn] = useRmvMangrMutation();

    function aprv(a){
        // console.log(a)
        aprvMngrFn(a).then(function(res){
            console.log(res)
        }).catch(function(err){
            console.log(err)
        })
        alert("User changed to MANAGER")
    }

    function remov(a){
        remvMngrFn(a).then(function(res){
            console.log(res)
        }).catch(function(err){
            console.log(err)
        })
        alert("Manager changed to USER")
    }

    return (
        
                            <div className="table-responsive">
                                <table className="table table-hover table-bordered align-middle mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th className="py-3 text-dark">Username</th>
                                            <th className="py-3 text-dark">Add Manager</th>
                                            <th className="py-3 text-dark">Remove Manager</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data &&
                                            data.map(function (usr) {
                                                if (usr.role === "manager" || usr.role === "user") {
                                                    return (
                                                        <tr key={usr.id}>
                                                            <td className="py-3">
                                                                <span className="fw-bold text-dark">
                                                                    {usr.username.toUpperCase()}
                                                                </span>
                                                            </td>
                                                            <td className="py-3">
                                                                {usr.role === "user" && (
                                                                    <button
                                                                        className="btn btn-success btn-sm px-4"
                                                                        onClick={() => aprv(usr.id)}
                                                                    >
                                                                        <i className="fas fa-user-plus me-2"></i>
                                                                        Add as Manager
                                                                    </button>
                                                                )}
                                                            </td>
                                                            <td className="py-3">
                                                                {usr.role === "manager" && (
                                                                    <button
                                                                        className="btn btn-danger btn-sm px-4"
                                                                        onClick={() => remov(usr.id)}
                                                                    >
                                                                        <i className="fas fa-user-minus me-2"></i>
                                                                        Remove Manager
                                                                    </button>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    

export default Addmanager;
