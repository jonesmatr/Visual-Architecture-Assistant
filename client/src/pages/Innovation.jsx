import React from 'react';
import Layout from '../components/Layout';

const Innovation = () => {
  return (
    <Layout>
      {/* 5x5 Grid Image Section */}
      <div className="innovation-container">
  <div className="image-container">
    <img src="/assets/Inovation-1.jpg" alt="Sample1" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-2.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-3.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-4.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-5.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-6.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-7.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-8.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-9.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-10.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-11.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-12.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-13.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-14.jpg" alt="Sample2" />
  </div>
  <div className="image-container">
    <img src="/assets/Inovation-15.jpg" alt="Sample15" />
  </div>
</div>

 {/* Slide 1 */}
    {/* Banner Section (similar to About page) */}
  <div id="aboutCarousel" className="carousel slide mt-2" data-ride="carousel">
  <div className="carousel-inner">
    {/* Slide 1 */}
    <div className="carousel-item active">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="innovation-carousel-caption text-left">
            <h3 className="innovation-carousel-title">Innovative Design Solutions</h3>
            <p className="innovation-carousel-description">At Visual Architecture Assistant, we transform your ideas into reality. Our team of dedicated professionals is committed to delivering designs that captivate and inspire.</p>
          </div>
        </div>
                    <div className="innovation-banner-image-col">
                        <img src="/portrait-1.png" alt="Company Office" className="carousel-portimage" />
                    </div>
                </div>
            </div>

            {/* Slide 2 */}
             {/* Slide 2 */}
    <div className="carousel-item">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="innovation-carousel-caption text-left">
            <h3 className="innovation-carousel-title">Craftsmanship Meets Technology</h3>
            <p className="innovation-carousel-description">Leveraging the latest technology, we ensure that every project stands out. Our attention to detail and commitment to excellence is evident in every design.</p>
          </div>
        </div>
                    <div className="innovation-banner-image-col">
                        <img src="/portrait-5.png" alt="Project Design" className="carousel-portimage" />
                    </div>
                </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="innovation-carousel-caption text-left">
            <h3 className="innovation-carousel-title">Collaborative Approach</h3>
            <p className="innovation-carousel-description">We believe in collaboration. Working closely with our clients, we ensure that every design not only meets but exceeds expectations. Your vision is our mission.</p>
          </div>
        </div>
                    <div className="innovation-banner-image-col">
                        <img src="/portrait-8.png" alt="Client Meeting" className="carousel-portimage" />
                    </div>
                </div>
            </div>
        </div>

        {/* Carousel Controls */}
        <a className="carousel-control-prev" href="#aboutCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#aboutCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    </Layout>
  );
}

export default Innovation;
