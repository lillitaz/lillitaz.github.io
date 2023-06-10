import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { Impressum } from "./pages/Impressum/Impressum";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="impressum" element={<Impressum />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;
