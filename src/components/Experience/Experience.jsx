import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technical Expertise</h5>
      <h2>Skills</h2>

      <div className="container experience_container">
        {/* Cloud & Infrastructure */}
        <div className="experience_section">
          <h3>Infrastructure & Monitoring</h3>
          <div className="experience_content">
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>AWS</h4>
                <small className="text-light">Experience in provisioning and managing AWS resources.</small>
              </div>
            </article>
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>Terraform</h4>
                <small className="text-light">Infrastructure as Code (IaC) for automating resource provisioning. Authoring Terraform Modules to enable Developers to provision resources.</small>
              </div>
            </article>
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>Splunk Observability</h4>
                <small className="text-light">Using OpenTelemetry for tracing, metrics, and logs to monitor application performance.</small>
              </div>
            </article>
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>Grafana</h4>
                <small className="text-light">Grafana with Prometheus to monitor application performance, database health, and infrastructure metrics, enabling proactive alerting.</small>
              </div>
            </article>
          </div>
        </div>

        {/* CI/CD & Automation */}
        <div className="experience_section">
          <h3>CI/CD & Automation</h3>
          <div className="experience_content">
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>Bitbucket Pipelines</h4>
                <small className="text-light">Implemented build and deployment pipelines for Kubernetes applications.</small>
              </div>
            </article>
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>ArgoCD</h4>
                <small className="text-light">Managing GitOps-based Kubernetes deployments for declarative application management.</small>
              </div>
            </article>
          </div>
        </div>

        {/* Containerization & Orchestration */}
        <div className="experience_section">
          <h3>Containerization & Orchestration</h3>
          <div className="experience_content">
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>Docker</h4>
                <small className="text-light">Building and managing containerized applications for development and production.</small>
              </div>
            </article>
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>Kubernetes</h4>
                <small className="text-light">Deploying, scaling, and managing applications in EKS clusters.</small>
              </div>
            </article>
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>Helm</h4>
                <small className="text-light">Managing Kubernetes applications using Helm charts.</small>
              </div>
            </article>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="experience_section">
          <h3>Programming Languages</h3>
          <div className="experience_content">
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>Java</h4>
                <small className="text-light">Backend development for Spring Boot applications.</small>
              </div>
            </article>
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Frontend development with React and Angular.</small>
              </div>
            </article>
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>Python</h4>
                <small className="text-light">Writing automation scripts, API interactions. Web Development with Django or Flask.</small>
              </div>
            </article>
            <article className="experience_details">
              <span className="experience_details-icon">
                <BsPatchCheckFill />
              </span>
              <div>
                <h4>Bash</h4>
                <small className="text-light">Writing scripts.</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
