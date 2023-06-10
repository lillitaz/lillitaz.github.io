import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
            <div>
              <h3>Error</h3>
              <h1>Ooopsi, something went wrong.</h1>
              <p>The page you are looking for seems to be missing.</p>
              <a href="/">→ Take me back</a>
            </div>
          </div>
          <div>
            <img
              src="https://merakiui.com/images/components/illustration.svg"
              alt="404 Illustration"
            ></img>
          </div>
        </section>
      </>
    );
  }
}

export default Error;
