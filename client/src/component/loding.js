import React, { memo } from 'react'

const loding = memo(() => {
  return (
   <>

    {/* ======= Services Section ======= */}
    <div id="services" className="services-area area-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="section-headline services-head text-center">
                                <h2 className='text-success '>Leading Eye Care Hospital in Delhi &amp; NCR</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        {/* Start Left services */}
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="about-move">
                                <div className="services-details ">
                                    <div className="single-services border border-success">
                                        <a className="services-icon" href="#">
                                            <i className="bi bi-briefcase" />
                                        </a>
                                        <h3>250000+</h3>
                                        <h3 className='text-success font-weight-bold'>HAPPY PATIENTS</h3>
                                    </div>
                                </div>
                                {/* end about-details */}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="about-move">
                                <div className="services-details">
                                    <div className="single-services border border-success">
                                        <a className="services-icon" href="#">
                                            <i className="bi bi-card-checklist" />
                                        </a>
                                        <h3>5000+</h3>
                                        <h3 className='text-success font-weight-bold'>SURGERIES PER YEAR</h3>
                                    </div>
                                </div>
                                {/* end about-details */}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            {/* end col-md-4 */}
                            <div className=" about-move">
                                <div className="services-details">
                                    <div className="single-services border border-success">
                                        <a className="services-icon" href="#">
                                            <i className="bi bi-bar-chart" />
                                        </a>
                                        <h3>20000+</h3>
                                        <h3 className='text-success font-weight-bold'>EYE CHECK-UP</h3>
                                    </div>
                                </div>
                                {/* end about-details */}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            {/* end col-md-4 */}
                            <div className=" about-move">
                                <div className="services-details">
                                    <div className="single-services border border-success">
                                        <a className="services-icon" href="#">
                                            <i className="bi bi-binoculars" />
                                        </a>
                                        <h3>90+</h3>
                                        <h3 className='text-success font-weight-bold'>PARTNER HOSPITAL</h3>
                                    </div>
                                </div>
                                {/* end about-details */}
                            </div>
                        </div>
                        {/* End Left services */}
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            {/* end col-md-4 */}
                            <div className=" about-move">
                                <div className="services-details">
                                    <div className="single-services border border-success">
                                        <a className="services-icon" href="#">
                                            <i className="bi bi-brightness-high" />
                                        </a>
                                        <h3>850+</h3>
                                        <h3 className='text-success font-weight-bold'>HEALTH CAMPS</h3>
                                    </div>
                                </div>
                                {/* end about-details */}
                            </div>
                        </div>
                        {/* End Left services */}
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            {/* end col-md-4 */}
                            <div className=" about-move">
                                <div className="services-details">
                                    <div className="single-services border border-success">
                                        <a className="services-icon" href="#">
                                            <i className="bi bi-calendar4-week" />
                                        </a>
                                        <h3>19+</h3>
                                        <h3 className='text-success font-weight-bold'>COVERED STATES</h3>

                                    </div>
                                </div>
                                {/* end about-details */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Services Section */}

   </>
  )
})

export default loding