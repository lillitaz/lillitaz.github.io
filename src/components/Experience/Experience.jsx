import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>In development</h5>
      <h2>Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          { <h3>Languages</h3> }

          
          <div className="experience_content">
          <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Upper- Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        { <div className="experience_backend">
          <h3>Databases</h3>
          <div className="experience_content">
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
              <div>
              <h4>MongoDB</h4>
                <small className="text-light">Upper- Intermediate</small>
                </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
              <div>
              <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
                </div>
            </article>
          </div>         
        </div>}
        
        { <div className="experience_backend">
          <h3>JavaScript- based Technologies</h3>
          <div className="experience_content">
          <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
              <div>
              <h4>Node</h4>
                <small className="text-light">Intermediate</small>
                </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
              <div>
              <h4>Express</h4>
                <small className="text-light">Intermediate</small>
                </div>
            </article>
          </div>          

        </div> }
      </div>
    </section>
  );
};
export default Experience;
