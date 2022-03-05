import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Report from "./pages/Report";
import Legislation from "./pages/Legislation";
import NavBar from "./pages/NavBar";

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/legislation" element={<Legislation />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Routing;
