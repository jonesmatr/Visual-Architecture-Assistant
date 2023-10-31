import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ContactModal from '../components/ContactModal';
// import '../utils/App.css';
import Card from 'react-bootstrap/Card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill out all fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email.match(emailRegex)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    handleShowModal();
    
  };

  return (
    <div className='contact-container'>
      <h1 style={{color: "#003249"}}>Contact Us</h1>
      
      <Form className="custom-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control className='outline' type="" placeholder="name" onChange={handleNameChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='outline' type="email" placeholder="name@example.com" onChange={handleEmailChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Please leave us a message</Form.Label>
          <Form.Control className='outline' as="textarea" rows={3} onChange={handleMessageChange}/>
        </Form.Group>
        <p style={{color: "red"}}>{error}</p>
        <Button className="btn" type="submit">
          Submit
        </Button>
      </Form>

      {/* Render the modal component */}
      <ContactModal show={showModal} handleClose={handleCloseModal} />
      <br></br>
      <div>
      <Card>
     
    </Card>
</div>

     
    </div>
  );
}

export default Contact;
