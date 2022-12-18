import React from "react";

import '../App.css';

function footer() {
    return (

      <>
  {/* ======= Footer ======= */}
  <footer>
    <div className="footer-area ">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-content">
              <div className="footer-head">
                <div className="footer-logo">
                  <h2>
                    <span>NETRAM</span>
                  </h2>
                </div>
                <p className="text-dark">
                  Your Complete Eye Care is our Responsibility form the day you visit us.
                </p>
                <h4 className="text-success" style={{fontSize: "20px"}}>आँखें आपकी ज़िम्मेदारी हमारी</h4>
                <div className="footer-icons">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/netrameyefoundation">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/NetramEyeCentre">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/netrameyefoundation/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@NetramEyeFoundation">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/netram-eye-foundation/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* end single footer */}
          <div className="col-md-4">
            <div className="footer-content">
              <div className="footer-head">
                <h4>information</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <div className="footer-contacts">
                  <p>
                    <span>Apponiment no:</span> 01141086655, 01141046655, 
                  </p>
                  <p>
                    <span>Mob:</span> +91 9319909455, 9971030155
                  </p>
                  <p>
                    <span>Email:</span> ngonetram@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end single footer */}

          <img src="https://www.pinclipart.com/picdir/big/145-1456116_contact-lens-clip-art.png" style={{width: "250px"}} alt="" />
          
        </div>
      </div>
    </div>
    <div className="footer-area-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="copyright text-center">
              <p className="text-white">
                © Copyright <strong>Natram</strong>. All Rights Reserved
              </p>
            </div>
            <div className="credits p-0">
              {/*
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eBusiness
      */}
            <a href="https://www.netram.co.in/">www.netram.co.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End  Footer */}


</>




    )
}

export default footer;