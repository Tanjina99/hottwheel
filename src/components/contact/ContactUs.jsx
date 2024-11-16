import React from "react";
import { Typography, Input, Button, Form } from "antd";
import { MdLocationOn, MdPhone, MdEmail, MdWeb } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <Title level={2}>Get in Touch</Title>
        <Paragraph>We are here for you!</Paragraph>
      </div>

      <div className="contact-content">
        <div className="message-form">
          <Title level={3}>Drop a Message</Title>
          <Form layout="vertical">
            <div className="form-row">
              <Form.Item label="Full Name" className="form-item">
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item label="Phone" className="form-item">
                <Input placeholder="Enter your phone number" />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item label="Email" className="form-item">
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item label="Subject" className="form-item">
                <Input placeholder="Enter the subject" />
              </Form.Item>
            </div>
            <Form.Item label="Message">
              <Input.TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>
            <Button type="primary" className="send-button">
              Send Message
            </Button>
          </Form>
        </div>

        {/* Contact Information Section */}
        <div className="contact">
          <Title level={3}>Contact Information</Title>
          <div className="contact-details">
            <p>
              <MdLocationOn /> Our Business address is 1063 <br />
              Freelon Street, San Francisco 0
            </p>
            <p>
              <MdPhone /> +4078997678
            </p>
            <p>
              <MdEmail /> samplemail@sample.com
            </p>
            <p>
              <MdWeb /> www.website.com
            </p>
          </div>

          <div className="social">
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
      </div>
    </div>
  );
};

export default ContactUs;
