import React from 'react'
import Form from './contact';
import Service from './service';
import Blog from './blog';

import Social from './socail';

import Tetmosoil from './testimonial';

import Loding  from './loding';

import '../App.css'




function Home() {



    return (

        <>
            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.postimg.cc/9FWktF4b/group.png" alt="Los Angeles" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.wixstatic.com/media/af5c61_7b58093e2d39476797cbf6e8ecaa0490~mv2.jpg/v1/fill/w_1903,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/af5c61_7b58093e2d39476797cbf6e8ecaa0490~mv2.jpg" alt="Chicago" width={1100} height={500} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.postimg.cc/9FWktF4b/group.png" alt="New York" width={1100} height={500} />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>


            <Loding/>



            

            <br /><br />

            <div className="text-center">

                <h4 style={{ fontSize: "20px" }} >It’s an organization built on foundation of ethics, righteousness and quality eye care.</h4>

                <h4 style={{ fontSize: "20px" }} >Exemplary eye care services at grass root level. Philosophy of Netram is to lead every eye from darkness to light.</h4>


                <h4 style={{ fontSize: "20px" }} >Established in 2011, in a short span of time it has conducted over 850 outreach camps and operated more than 50,000 patients successfully.</h4>

                <h4 style={{ fontSize: "20px" }} >It has six peripheral eye centres and main eye centre in C R Park, headed by Dr Anchal Gupta.</h4>

            </div>

            <br />
            <br />
            <hr />

            <Service />



            <div className="container">
                <div className="card-deck text-center p-0 m-0">
                    <div className="card border-0">
                        <img className="card-img-top" src="https://i.postimg.cc/QtTmLYvY/doctor-anchal-1.jpg" alt="Card image cap" />
                        <div className="card-body">

                            <p className="card-text p-0">
                               Your Complete Eye Care is our Responsibility form the day you visit us.
                                
                            </p>
                        </div>
                    </div>
                    <div className="card border-0">
                        <img className="card-img-top" src="https://i.postimg.cc/FRF4KcV4/dodc.jpg" alt="Card image cap" />
                        <div className="card-body">

                            <p className="card-text p-0">
                               Your Complete Eye Care is our Responsibility form the day you visit us.
                                
                            </p>
                        </div>
                    </div>
                    <div className="card border-0">
                        <img className="card-img-top" src="https://i.postimg.cc/fbKG1yng/docc.jpg" alt="Card image cap" />
                        <div className="card-body">

                            <p className="card-text p-0">
                               Your Complete Eye Care is our Responsibility form the day you visit us.
                                
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <br /><br />

            

           


            <Tetmosoil />


            <Social />

            <Blog />

            <Form />


        </>

    )
}

export default Home;


