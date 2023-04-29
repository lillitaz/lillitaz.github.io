import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Can Do For You</h5>
            <h2>services</h2>

            <div className="container services_container">

                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>I offer a range of services to help organizations create and
                                maintain an effective online presence. Whether you need a new
                                website from scratch or want to update an existing one, I work
                                closely with you to ensure that your website is not only visually
                                appealing but also meets your specific needs and goals. I offer a
                                range of web development services, including custom web design and
                                responsive web development.
                            </p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>Web Maintenance</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            Ongoing support and maintenance to ensure
                            that your website continues to function optimally and remains
                            up-to-date with the latest technology and trends.
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};
export default Services;
