import React from "react";

import '../App.css';
import { Link } from "react-router-dom";

function navbar() {
    return (
        <>
            <div className="container-fluid bg-green">

                <div className="container text-white p-1 text-right">
                    Helpline number: 9971030155
                </div>

            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src='https://static.wixstatic.com/media/af5c61_a9eb57bceac846ffa114e934df061b77~mv2.jpg/v1/fill/w_172,h_59,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Netram%20Logo.jpg' alt="logo" style={{ width: '100px', borderRadius: "30px" }} loading="lazy"></img></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-item nav-link text-success" to="/">ABOUT US</Link>
                            <Link className="nav-item nav-link text-success" to="/Service">SERVICES</Link>
                            <Link className="nav-item nav-link text-success" to="/doctor">DOCTORS</Link>
                            <Link className="nav-item nav-link text-success" to="/testimontals">TESTIMONIALS</Link>
                            <Link className="nav-item nav-link text-success" to="/blog">BLOG</Link>
                            <Link className="nav-item nav-link text-success" to="/Contact">CONTACT</Link>
                            <Link className="nav-item nav-link text-white btn btn-success" to="/donate">DONATE</Link>
                        </div>
                    </div>
                </div>
            </nav>


            <a href="https://api.whatsapp.com/send?phone=9212646655&text=aman%20"
                className="float"
                target="_blank"
            >
                <i className="fa fa-whatsapp my-float" />
            </a>




            <>
                {/* Button trigger modal */}
                <a
                    type="button"
                    className="appointment border-0"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                >
                    <img src="https://tatarindental.com/wp-content/uploads/2021/05/request-appointment-1.png" alt="img" className="img-fluid" />
                </a>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="exampleModalCenter"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center text-success" id="exampleModalLongTitle">
                                    Book an Appointment
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName">Your Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputName"
                                                aria-describedby="textHelp"
                                                placeholder="full name"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputName">Mobile number</label>
                                            <input
                                                type="Number"
                                                className="form-control"
                                                id="exampleInputName"
                                                aria-describedby="numberText"
                                                placeholder="Mobile number"
                                            />
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter email"
                                            />
                                        </div>

                                        <div className="form-group  ">
                                            <label for="inputState">Select Speciality</label>
                                            <select id='state' name='state' className="form-control" required>
                                                <option selected>Choose...</option>
                                                <option value="Home Eye Testing">Home Eye Testing</option>
                                                <option value="Eye check Up">Eye check Up</option>
                                                <option value="Cataract surgery">Cataract surgery</option>
                                                <option value="Lasik surgery">Lasik surgery</option>
                                                <option value="Cornea Transplant">Cornea Transplant</option>
                                                <option value="ICL Procedure">ICL Procedure</option>
                                                <option value="Glaucoma treatment">Glaucoma treatment</option>
                                                <option value="Retina treatment">Retina treatment</option>
                                                <option value="Dry Eye">Dry Eye</option>
                                                <option value="DCR">DCR</option>
                                                <option value="Oculoplasty">Oculoplasty</option>



                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputName">Select Date</label>
                                            <input
                                                type="Date"
                                                className="form-control"
                                                id="exampleInputName"
                                                aria-describedby="numberText"
                                                placeholder="Mobile number"
                                            />
                                        </div>

                                        <div className="form-group text-center">
                                        <button type="submit" className="btn btn-success form-control">
                                            Book
                                        </button>
                                        </div>
                                        

                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>







        </>

    )
}

export default navbar;









