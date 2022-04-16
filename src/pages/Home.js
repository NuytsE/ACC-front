import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <div style={{ padding: "100px" }}>
        <p>UITLEG</p>
        <Button variant="outline-dark" href="/upload">
          Validate a building project
        </Button>
        {"     "}
        <Button variant="outline-dark" href="/legislation">
          View the building legislation on accessibility
        </Button>
      </div>
    );
  }
}

export default Home;
