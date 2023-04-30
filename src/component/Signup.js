import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import helpdeskcontext from './context/helpdesk/helpdeskcontext';
const Swal = require('sweetalert2')

const Signup = () => {
    const context = useContext(helpdeskcontext)
    const {CreateUser} = context

    const [student, setstudent] = useState({"e_name" : "" , e_email  : "" , e_ph : " " , e_school : " " , e_state : " " , e_result : " " , e_branch :  "" , e_password : " "});
    const handelChange = (e)=>{
        setstudent({... student , [e.target.name] : e.target.value})
    }
    const handleSubmit = ()=>{
        CreateUser(student)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You Are Register Successfully',
            showConfirmButton: false,
            timer: 1500
          })
    }
  return (
    <>
        <section className="vh-100" style={{ "background-color": "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ "border-radius": "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form className="mx-1 mx-md-4">

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="e_name" name='e_name' className="form-control" onChange={handelChange} />
                              <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="number" id="e_result" name='e_result' className="form-control" onChange={handelChange}/>
                              <label className="form-label" htmlFor="form3Example1c" >Your Result</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="number" id="senroll" className="form-control" onChange={handelChange}/>
                              <label className="form-label" htmlFor="form3Example1c">Your Enrollmenr No</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="e_school" name='e_school' className="form-control" onChange={handelChange}/>
                              <label className="form-label" htmlFor="form3Example1c">Your School Name</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="e_state" name='e_state' className="form-control" onChange={handelChange}/>
                              <label className="form-label" htmlFor="form3Example1c">Your State</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="e_branch" name='e_branch' className="form-control" onChange={handelChange}/>
                              <label className="form-label" htmlFor="form3Example1c">Your Branch</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="e_email" name='e_email' className="form-control" onChange={handelChange}/>
                              <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="e_ph" name='e_ph' className="form-control" onChange={handelChange}/>
                              <label className="form-label" htmlFor="form3Example3c">Your Contact No :</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="e_password" name='e_password' className="form-control" onChange={handelChange}/>
                              <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button"id='sregister' onClick={handleSubmit} className="btn btn-primary btn-lg">Register</button>
                            <Link className='btn btn-success mx-3 text-center' to="/">Go To Login</Link>
                          </div>

                        </form>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid" alt="Sample image" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default Signup
