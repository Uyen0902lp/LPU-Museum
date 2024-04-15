import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../../components/Footer';
import image from '../../assets/images/aa.png'; // Make sure this path is correct
import './contact.css';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email.trim()) {
      formErrors.email = "Email is required.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Define your service ID, template ID, and public key
      const serviceId = 'service_vgsvzhr';
      const templateId = 'template_ieycljq';
      const publicKey = '9SFXh_Io87AT8pAfy';

      const templateParams = {
        from_name: name || "Anonymous",
        from_email: email,
        to_name: 'LPU Museum',
        message: message || "No message provided",
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response);
          setName('');
          setEmail('');
          setMessage('');
          setStatus('SUCCESS');
        })
        .catch((error) => {
          console.error('FAILED...', error);
          setStatus('FAILED');
        });
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
    <h2 className='contact-title'>Leave a message</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="emailForm">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Your Email *"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="submit-btn">Submit</button>
          {status === 'SUCCESS' && <div className="alert success">Your message has been sent successfully.</div>}
          {status === 'FAILED' && <div className="alert error">There was an error sending your message.</div>}
        </form>
        <div className='img__contact'>
          <img src={image} alt="side" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
