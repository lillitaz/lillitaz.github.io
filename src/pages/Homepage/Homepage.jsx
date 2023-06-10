import React, { Component } from 'react';
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import Experience from "../../components/Experience/Experience";

class Homepage extends Component {
  render() {
    return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
    </div>
    );
  }
}

export { Homepage };
