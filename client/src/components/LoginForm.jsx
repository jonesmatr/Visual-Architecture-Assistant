import { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Layout from '../components/Layout';


const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...userFormData }
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    // New section for styling the login form
    <Layout> 
    <section className="login-block">
      <div className="container">
        <div className="row">
          {/* Login Section */}
          <div className="col-md-4 login-sec">
            <h2 className="text-center">Login Now</h2>
            <form className="login-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="text-uppercase">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={handleInputChange}
                  value={userFormData.email}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-uppercase">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                  required
                />
              </div>
              <div className="form-check">
                <button type="submit" className="btn-login">Submit</button>
              </div>
            </form>
            <div className="copy-text">Created with <i className="fa fa-heart"></i> by V.A.A</div> {/* Adjust "YourName" */}
          </div>

          {/* Carousel Section */}
          <div className="col-md-8 banner-sec">
          {/* Main Carousel Container */}
  <div id="bannerCarousel" className="carousel slide" data-ride="carousel">

{/* Carousel Indicators: These are the small dots at the bottom of the carousel that indicate which slide is currently active */}
        <ul className="carousel-indicators">
        <li data-target="#bannerCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#bannerCarousel" data-slide-to="1"></li>
        <li data-target="#bannerCarousel" data-slide-to="2"></li>
      </ul>

{/* Carousel Slides: This section contains the images that will be displayed in the carousel */}
<div className="carousel-inner">
    {/* First Slide */}
    <div className="carousel-item active" data-interval="10000">
        <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" alt="Image 1" width="100%" />
    </div>
    {/* Second Slide */}
    <div className="carousel-item" data-interval="10000">
        <img src="https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg" alt="Image 2" width="100%" />
    </div>
    {/* Third Slide */}
    <div className="carousel-item" data-interval="10000">
        <img src="https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg" alt="Image 3" width="100%" />
    </div>
</div>

{/* Carousel Controls */}
{/* Left Control (Previous Slide) */}
<a className="carousel-control-prev" href="#bannerCarousel" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
</a>
{/* Right Control (Next Slide) */}
<a className="carousel-control-next" href="#bannerCarousel" data-slide="next">
    <span className="carousel-control-next-icon"></span>
</a>

      </div>
     </div>
    </div>
   </div>
          </section>
   </Layout> 
  );
};

export default LoginForm;
