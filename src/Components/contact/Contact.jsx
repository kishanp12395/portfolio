import React, { useState } from 'react';
import './contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [status, setStatus] = useState(null);
  const formAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ message: "Sending your message...", type: "loading" });

    const formData = new FormData(event.target);
    formData.append("access_key", formAccessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        setStatus({ message: "✅ Message sent successfully!", type: "success" });
        event.target.reset(); // Clear form fields after successful submission
      } else {
        setStatus({ message: "❌ Failed to send message. Please try again.", type: "error" });
      }
    } catch (error) {
      setStatus({ message: "⚠️ Network error! Try again later.", type: "error" });
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>kishanp12395@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91- 8948779664</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>G.Noida, G.B Nagar U.P</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" required />
          <label htmlFor="message">Write Your Message Here</label>
          <textarea name="message" id="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type="submit" className="contact-submit">Submit</button>
          
          {status && <p className={`status-message ${status.type}`}>{status.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
