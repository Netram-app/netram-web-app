import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";




function Contact() {

    const navigate = useNavigate()

    const url = '/postData'
    const [data, setData] = useState({
        your_name: "",
        your_email:"",
        subject:"",
        message:""
    })

        function submit(e) {
            e.preventDefault();
            Axios.post(url, {
              your_name: data.your_name,
              your_email: data.your_email,
              subject: data.subject,
              message: data.message,

            })
                .then(res => {
                    window.alert("Contact form submit successfully")
                })
                .then(res => {
                    navigate('/');
                })
        }


    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }



    return (

        <>
  {/* ======= Suscribe Section ======= */}
  <div className="suscribe-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
          <div className="suscribe-text text-center">
            <h3>Are you want to visit</h3>
            <a className="sus-btn" href="#">
             book an appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Suscribe Section */}
  {/* ======= Contact Section ======= */}
  <div id="contact" className="contact-area">
    <div className="contact-inner area-padding">
      <div className="contact-overly" />
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-center">
              <h2>Contact us</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Start contact icon column */}
          <div className="col-md-4">
            <div className="contact-icon text-center">
              <div className="single-icon">
                <i className="bi bi-phone" />
                <p>
                  Call:+91 9319909455
                  <br />
                  <span>Monday-saturdy (9am-6pm)</span>
                </p>
              </div>
            </div>
          </div>
          {/* Start contact icon column */}
          <div className="col-md-4">
            <div className="contact-icon text-center">
              <div className="single-icon">
                <i className="bi bi-envelope" />
                <p>
                  Email:  ngonetram@gmail.com
                  <br />
                  <span>Web: www.netram.co.in</span>
                </p>
              </div>
            </div>
          </div>
          {/* Start contact icon column */}
          <div className="col-md-4">
            <div className="contact-icon text-center">
              <div className="single-icon">
                <i className="bi bi-geo-alt" />
                <p>
                  Location: I -1791, C R Park, near IDBI Bank.
                  <br />
                  <span>Delhi 110019, Delhi</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Start Google Map */}
          <div className="col-md-6">
            {/* Start Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0455190187176!2d77.25160009999999!3d28.538351499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d7e429ecd7%3A0x15bc5bac6817b6f7!2sNetram%20Eye%20Foundation!5e0!3m2!1sen!2sin!4v1668875315138!5m2!1sen!2sin"
              width="100%"
              height={380}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
            />
            {/* End Map */}
          </div>
          {/* End Google Map */}
          {/* Start  contact */}
          <div className="col-md-6">
            <div className="form contact-form">
            <form onSubmit={(e) => submit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    onChange={(e) => handle(e)} id='your_name' value={data.your_name}
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={(e) => handle(e)} id='your_email' value={data.your_email}
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    onChange={(e) => handle(e)} id='subject' value={data.subject}
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    onChange={(e) => handle(e)} id='message' value={data.message}
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className='btn btn-success btn-rounded btn-lg'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
          {/* End Left contact */}
        </div>
      </div>
    </div>
  </div>
  {/* End Contact Section */}
</>


    )
}

export default Contact;