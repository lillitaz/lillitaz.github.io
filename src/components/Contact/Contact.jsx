import React from "react";
import "./contact.css";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaCalendarPlus } from 'react-icons/fa';
const Contact = () => {
    return (
        <section id="contact">
            <h5>Let's talk?</h5>
            <h2>Contact</h2>
            <div className="container contact_container">

                <div className="contact_content">
                    <article className="contact_details">
                        <div>
                            <a className="contact_details-icon" href="https://www.linkedin.com/in/elisabethweitzer/" target="_blank" rel="noreferrer">LinkedIn   <BsLinkedin /></a>
                        </div>
                    </article>
                    <article className="contact_details">
                        <div>
                            <a className="contact_details-icon" href="https://github.com/lillitaz" target="_blank" rel="noreferrer">GitHub   <FaGithub /></a>
                        </div>
                    </article>
                    <article className="contact_details">
                        <div>
                            <a className="contact_details-icon" href="mailto:contact@lilliweitzer.com" target="_blank" rel="noreferrer">Mail  <FaHeart/></a>
                        </div> 
                    </article>
                    <article className="contact_details">
                        <div>
                            <a className="contact_details-icon" href="http://calendly.com/elisabeth_weitzer" target="_blank" rel="noreferrer">Schedule a Meeting   <FaCalendarPlus/></a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};
export default Contact;
