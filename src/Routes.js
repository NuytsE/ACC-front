import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Legislation from "./pages/Legislation";
import NavBar from "./pages/NavBar";
import Report from "./pages/Report"

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legislation" element={<Legislation />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/625816c8d991f2c44981e634" element={<Report/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Routing;
