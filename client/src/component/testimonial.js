import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import '../App.css'



const Testimonial = memo(() => {


  return (
    <>
      {/* ======= Rviews Section ======= */}
      <br /><br /><br />
      <div className="container-fluid p-5 bg-green">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">

            <img src="https://i.postimg.cc/W35NvSrr/netram-doc.jpg" alt="img" className="img-fluid" style={{ borderRadius: "30px" }} />

          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div class="section-headline services-head text-center"><h2 class="text-white ">AT NETRAM EYE HOSPITAL</h2></div>
            <div className='text-center text-white mb-5'>
              <h3 className='text-white'>Our doctors</h3> <span>specialize in you</span>
            </div>

            <h4 className='text-center text-white mb-5'>Netram Hospital is a global leader in Opthalmology has stood at the forefront of eye care since 2013. Our world-class team of eye care specialists is committed to providing you the highest level of eye care services. We have the expertise of treating the rarest symptoms to performing the most complicated surgeries.</h4>
            <hr />

            <div className="container text-center">
              <div className="row">
                <div className="col-md-6">
                  <h4 className='text-white'>EXPERT TEAM</h4>
                  <i className="fa fa-user-md" style={{ fontSize: 70, color: "black" }} />
                  <p className='text-warning'>
                    Our Eye Care Experts tackle the most difficult challenges not only to provide the best possible eye care results to our patients but to boost the innovation further</p>
                    <Link className='text-white' to='/doctor'>Read more</Link>
                </div>
                <div className="col-md-6">

                  <h4 className='text-white'> INNOVATIVE TECHNOLOGY</h4>
                  <i class="fa fa-eye " style={{ fontSize: 70, color: "black" }}></i>
                  <p className='text-warning'>
                    We provide the most comprehensive range of eye care services ranging from routine eye care to cutting edge diagnosis and treatment of complex eye conditions.</p>
                  <Link className='text-white' to='/doctor'>Read more</Link>

                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
      {/* End Rviews Section */}
    </>


  )
})

export default Testimonial