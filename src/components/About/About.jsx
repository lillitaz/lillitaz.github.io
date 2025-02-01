import React from "react";
import "./about.css";
import PHOTO from "../../assets/about-graphic.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { Link } from "react-router-dom";

const About = () => {
    const scrollTo = (target) => {
      const targetElement = document.getElementById(target);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={PHOTO} alt="About Graphic" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Experience</small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            <small>23+ Projects</small>
                        </article>
                    </div>
                    <p>
                        {" "}
                        While gaining experience in DevOps and cloud-native technologies, I have worked on various projects that focus on developer enablement, deployment strategies, and automation. My expertise includes CI/CD pipelines, container orchestration, and infrastructure as code, ensuring efficient and scalable workflows.<br></br>
                        <br></br>
                        I have experience with Docker, Kubernetes, Helm, and Terraform, as well as managing cloud infrastructure on AWS. Working on observability, and security best practices, I strive to build reliable, maintainable, and elegant solutions that support development teams.
                        <br></br>
                        <br></br>
                        Alongside my work as a DevOps Engineer, I leverage my skills to develop web platforms that improve access to information and foster communication, supporting meaningful causes and communities. If you need assistance with such a project, feel free to reach out.
                    </p>
                    <Link to="#contact" className="btn btn-primary" onClick={() => scrollTo('contact')} >Get in Touch</Link>
                </div>
            </div>
        </section>
    );
};
export default About;
