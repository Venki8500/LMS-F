import { Field, Form, Formik, FieldArray } from "formik";
import React from "react";
import { useAddLoanMutation } from "../services/LmsApi";
import ManagerNav from "./ManagerNav";

function AddLoan() {
  var [addLonFn] = useAddLoanMutation();

  return (
    <div>
      {/* <ManagerNav></ManagerNav> */}
      
      <Formik
        initialValues={{
          typeofloan: "",
          loanitem: "",
          productcost: Number,
          intrest: {
            tenuretype: "",
            tenure: Number,
            rateofintrest: Number,
          },
          downpayment: Number,
          customerMobile: Number,
          customerName: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          alert("loan added");
          addLonFn(values).then(function (res) {
            console.log(res);
          });
        }}
      >
        {(formik) => {
          return (
            <div className="container py-5">
              <div className="card shadow-lg">
                <div className="card-header bg-primary text-white">
                  <h3 className="mb-0 text-center">Add New Loan</h3>
                </div>
                <div className="card-body">
                  <Form className="px-4 py-3">
                    <div className="row g-4">
                      {/* Type of Loan */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Type Of Loan</label>
                        <Field name="typeofloan" className="form-control form-control-lg" />
                      </div>

                      {/* Loan Item */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Loan Item</label>
                        <Field name="loanitem" className="form-control form-control-lg" />
                      </div>

                      {/* Product Cost */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Product Cost</label>
                        <Field name="productcost" type="number" className="form-control form-control-lg" />
                      </div>

                      {/* Downpayment */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Downpayment</label>
                        <Field name="downpayment" type="number" className="form-control form-control-lg" />
                      </div>

                      {/* Interest Section */}
                      <div className="col-12">
                        <div className="card bg-light">
                          <div className="card-header">
                            <h5 className="mb-0">Interest Details</h5>
                          </div>
                          <div className="card-body">
                            <div className="row g-3">
                              <div className="col-md-4">
                                <label className="form-label fw-bold">Tenure Type</label>
                                <Field name="intrest.tenuretype" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label fw-bold">Tenure</label>
                                <Field name="intrest.tenure" type="number" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label fw-bold">Rate of Interest</label>
                                <Field name="intrest.rateofintrest" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Customer Details */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Customer Mobile</label>
                        <Field name="customerMobile" type="number" className="form-control form-control-lg" />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Customer Name</label>
                        <Field name="customerName" className="form-control form-control-lg" />
                      </div>

                      <div className="col-12 text-center mt-4">
                        <button type="submit" className="btn btn-primary btn-lg px-5">
                          Submit Loan Application
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddLoan;
