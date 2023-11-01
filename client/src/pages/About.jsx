import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div id="aboutCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="carousel-caption text-left">
                  <h3>Innovative Design Solutions</h3>
                  <p>At Visual Architecture Assistant, we transform your ideas into reality. Our team of dedicated professionals is committed to delivering designs that captivate and inspire.</p>
                </div>
              </div>
              <div className="col-md-6">
                <img src="/about-image1.png" alt="Company Office" className="carousel-image" />
              </div>
            </div>
          </div>
      
          {/* Slide 2 */}
          <div className="carousel-item">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
               <div className="carousel-caption text-left">
                  <h3>Craftsmanship Meets Technology</h3>
                 <p>Leveraging the latest technology, we ensure that every project stands out. Our attention to detail and commitment to excellence is evident in every design.</p>
             </div>
         </div>
        <div className="col-md-6">
      <img src="/about-image3.png" alt="Project Design" className="carousel-image" />
    </div>
  </div>
</div>

         {/* Slide 3 */}
<div className="carousel-item">
  <div className="row">
    <div className="col-md-6 d-flex align-items-center">
      <div className="carousel-caption text-left">
        <h3>Collaborative Approach</h3>
        <p>We believe in collaboration. Working closely with our clients, we ensure that every design not only meets but exceeds expectations. Your vision is our mission.</p>
      </div>
    </div>
    <div className="col-md-6">
      <img src="/about-image4.png" alt="Client Meeting" className="carousel-image" />
    </div>
  </div>
</div>


        {/* Carousel Controls */}
        <a className="carousel-control-prev" href="#aboutCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#aboutCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>
      </div>

      <div className="container mt-5">
    <div className="row">
        {/* Team Member 1 */}
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="box-part text-center">
            <img src="/self-image-PM.JPG" alt="Phaminh's Profile" className="profile-image" />
                <div className="title">
                    <h4>Pham Minh</h4>
                </div>
                <div className="text">
                    <span>Team Member Description</span>
                </div>
                <a href="https://iphaminh.github.io/my-react-portfolio/">Learn More</a>
            </div>
        </div>

        {/* Team Member 2 */}
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="box-part text-center">
            <img src="/self-image-MJ.jpg" alt="Matthew's Profile" className="profile-image" />
                <div className="title">
                    <h4>Matthew Jones</h4>
                </div>
                <div className="text">
                    <span>Team Member Description</span>
                </div>
                <a href="https://github.com/jonesmatr">Learn More</a>
            </div>
        </div>

        {/* Team Member 3 */}
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="box-part text-center">
            <img src="/self-image-SM.png" alt="Matthew's Profile" className="profile-image" />
                <div className="title">
                    <h4>Sheila McGovern</h4>
                </div>
                <div className="text">
                    <span>Team Member Description</span>
                </div>
                <a href="https://github.com/aliehs111">Learn More</a>
            </div>
        </div>

        {/* Team Member 4 */}
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="box-part text-center">
            <img src="/self-image-JB.png" alt="Jamie's Profile" className="profile-image" />
                <div className="title">
                    <h4>Jamie Branch</h4>
                </div>
                <div className="text">
                    <span>Team Member Description</span>
                </div>
                <a href="https://github.com/jbranch6432">Learn More</a>
            </div>
        </div>
    </div>
</div>

    </Layout>
  );
};

export default About;