import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './newsLetter.css'; 

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    let timer;
    if (status) {
      timer = setTimeout(() => setStatus(''), 3000);
    }
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: "Newsletter Subscriber", 
      to_name: 'LPU Museum', 
      from_email: email, 

    };


    emailjs.send('service_vgsvzhr', 'template_f5052y9', templateParams, '9SFXh_Io87AT8pAfy')
      .then((result) => {
          console.log(result.text);
 
          setEmail('');

          setStatus('SUCCESS');
      }, (error) => {
          console.log(error.text);

          setStatus('FAILED');
      });
  }

  return (
    <div className="newsletter-container">
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <h4>Join Our Newsletter</h4>
        <input 
          type="email" 
          name="from_email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          required 
        />
        <button type="submit" className="subscribe-btn">Subscribe</button>
      </form>
      {status === 'SUCCESS' && <p className="success-message">Thank you for subscribing!</p>}
      {status === 'FAILED' && <p className="error-message">Failed to subscribe. Please try again later.</p>}
    </div>
  );
}

export default Newsletter;
