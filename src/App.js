import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { Impressum } from "./pages/Impressum/Impressum";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
 
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/">
            <Routes>
              <Route path="/impressum" element={<Impressum />} exact></Route>
              <Route path="*" element={<Error />} exact></Route>
              <Route path="/" element={<Homepage />} exact></Route>
            </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
