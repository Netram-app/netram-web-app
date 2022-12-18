
import React, { memo } from 'react'
import '../App.css'

const blog = memo((props) => {
    return (

        <>
        {/* ======= Blog Section ======= */}
        <div id="blog" className="blog-area">
          <div className="blog-inner area-padding">
            <div className="blog-overly" />
            <div className="container ">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="section-headline text-center">
                    <h2>Latest News</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Start Left Blog */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="blog.html">
                      <img src='https://i.postimg.cc/rmffNtXM/eye.jpg' alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o" />
                        <a href="#">13 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar" />
                        2016-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="blog.html">Assumenda repud eum veniam</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet conse adipis elit Assumenda repud
                        eum veniam optio modi sit explicabo nisi magnam quibusdam.sit
                        amet conse adipis elit Assumenda repud eum veniam optio modi
                        sit explicabo nisi magnam quibusdam.
                      </p>
                    </div>
                    <span>
                      <a href="blog.html" className="ready-btn">
                        Read more
                      </a>
                    </span>
                  </div>
                  {/* Start single blog */}
                </div>
                {/* End Left Blog*/}
                {/* Start Left Blog */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="blog.html">
                      <img src="https://i.postimg.cc/FsNjHH2x/peplee.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o" />
                        <a href="#">130 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar" />
                        2016-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="blog.html">Explicabo magnam quibusdam.</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet conse adipis elit Assumenda repud
                        eum veniam optio modi sit explicabo nisi magnam quibusdam.sit
                        amet conse adipis elit Assumenda repud eum veniam optio modi
                        sit explicabo nisi magnam quibusdam.
                      </p>
                    </div>
                    <span>
                      <a href="blog.html" className="ready-btn">
                        Read more
                      </a>
                    </span>
                  </div>
                  {/* Start single blog */}
                </div>
                {/* End Left Blog*/}
                {/* Start Right Blog*/}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="blog.html">
                      <img src="https://i.postimg.cc/5N4CMkC7/peple.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o" />
                        <a href="#">10 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar" />
                        2016-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="blog.html">Lorem ipsum dolor sit amet</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet conse adipis elit Assumenda repud
                        eum veniam optio modi sit explicabo nisi magnam quibusdam.sit
                        amet conse adipis elit Assumenda repud eum veniam optio modi
                        sit explicabo nisi magnam quibusdam.
                      </p>
                    </div>
                    <span>
                      <a href="blog.html" className="ready-btn">
                        Read more
                      </a>
                    </span>
                  </div>
                </div>
                {/* End Right Blog*/}
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Section */}
      </>
      
    )
})

blog.propTypes = {}

export default blog