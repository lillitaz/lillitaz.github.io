import React from "react";
import "./about.css";
import PHOTO from "../../assets/chalks.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={PHOTO} alt="About imge" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>0.5+ Years Experience</small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            <small>13+ Projects</small>
                        </article>
                    </div>
                    <p>
                        {" "}
                        As a participant in a project-based training course in full stack development,
                        I have already successfully completed several projects and now want to apply and expand my knowledge in practice.
                        I have very good knowledge of HTML, CSS, and JavaScript, as well as experience with the MERN stack. In my training,
                        I have intensively dealt with the development of web applications and the creation of performant and maintainable code.
                        Working with databases and handling various APIs is also familiar to me. Above all, I was able to deepen my skills in the
                        area of higher-order functions in JavaScript and develop my love for clean and readable code.<br></br>
                        <br></br>
                        My goal is working on web development projects for non-profits and associations.
                        These types of projects offer a unique opportunity to create websites
                        and applications that have a tangible impact on people's lives, whether it's by providing
                        important information, facilitating communication, or raising awareness about social issues.
                        <br></br>
                        <br></br>
                        I am excited to use my expertise in web development to help non-profit organizations and
                        projects achieve their goals and make a positive impact on society. By collaborating with
                        like-minded individuals and working towards a common goal, I believe we can make a real
                        difference in the world.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};
export default About;
