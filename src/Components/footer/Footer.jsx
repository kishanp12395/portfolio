import React from "react";
import "./footer.css";
import footer_logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import email_icon from "../../assets/email_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Logo" />
          <p>
            I am a frontend developer from the USA with 10 years of experience
            in companies like Microsoft, Tesla, and Apple.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © 2023 Kishan Prajapati. All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me:</p>
          <div className="footer-social-icons">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <img src={linkedin_icon} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <img src={github_icon} alt="GitHub" />
            </a>

            <a href="mailto:your-email@example.com" className="email">
              <img src={email_icon} alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
