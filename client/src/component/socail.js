import React from "react";

import '../App.css';

function Social() {
    return (
        

        <>
        {/* ======= Portfolio Section ======= */}
        <div id="portfolio" className="portfolio-area area-padding fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Our Portfolio</h2>
                </div>
              </div>
            </div>
            <div className="row awesome-project-content portfolio-container">
              {/* portfolio-item start */}
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfolio-item">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="https://i.postimg.cc/15JpdZf5/netram-4.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="https://images.pexels.com/photos/8949865/pexels-photo-8949865.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        >
                          <h4>Happy</h4>
                          <span>Netram patient</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* portfolio-item end */}
              {/* portfolio-item start */}
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                    <img src="https://i.postimg.cc/X7VfxvNz/netram-3.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="https://i.postimg.cc/X7VfxvNz/netram-3.jpg"
                        >
                          <h4>Help</h4>
                          <span>Netram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* portfolio-item end */}
              {/* portfolio-item start */}
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-card">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                    <img src="https://i.postimg.cc/T2jjrbxb/netram-1.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="https://i.postimg.cc/T2jjrbxb/netram-1.jpg"
                        >
                          <h4>Netram</h4>
                          <span>Eye foundation</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* portfolio-item end */}
              {/* portfolio-item start */}
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                    <img src="https://i.postimg.cc/T2jjrbxb/netram-1.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="https://i.postimg.cc/T2jjrbxb/netram-1.jpg"
                        >
                          <h4>Team Netram </h4>
                          <span>Eye foundation</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* portfolio-item end */}
              {/* portfolio-item start */}
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                    <img src="https://i.postimg.cc/Wz7MjB88/natrem-2.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="https://i.postimg.cc/Wz7MjB88/natrem-2.jpg"
                        >
                          <h4>Netram</h4>
                          <span>Eye Foundation</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* portfolio-item end */}
              {/* portfolio-item start */}
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="https://i.postimg.cc/15JpdZf5/netram-4.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="https://i.postimg.cc/15JpdZf5/netram-4.jpg"
                        >
                          <h4>Netram</h4>
                          <span>Team</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* portfolio-item end */}
            </div>
          </div>
        </div>
        {/* End Portfolio Section */}
      </>


    )
}

export default Social;