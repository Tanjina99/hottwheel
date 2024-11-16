import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { MdPhoneIphone, MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <div className="info">
                <span className="icon-ho mt-3 pr-5">
                  <FaHome size={20} />
                </span>
                <p>
                  Our Business address is 1063 <br />
                  Freelon Street, San Francisco 0
                </p>
              </div>
            </div>

            <div className="contact-info">
              <div className="info">
                <span className="icon-ho mt-25 pr-5">
                  <MdPhoneIphone size={17} />
                </span>
                <p>+4078997678</p>
              </div>
            </div>

            <div className="contact-info">
              <div className="info">
                <span className="icon-ho mt-25 pr-5">
                  <MdEmail size={18} />
                </span>
                <p>samplemail@sample.com</p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Connect with Us</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Newsletter Signup</h3>
            <p>Subscribe to get updates on our latest products and offers.</p>
            <form className="newshelter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2024 Bike Store - All Rights Reserved.{" "}
            {/* <span className="theme">Tanjina Sultana</span> */}
          </p>
          <div className="policy-links">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
