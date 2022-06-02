import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <div style={{ marginLeft: "200px", marginTop: "100px" }}>
        <p>
          This compliance checker is a deliverable from a master thesis at Ghent
          University.
        </p>
        <p>
          You can upload a Linked Building Data graph and check the compliance
          with the Belgian building code on accessibility.
        </p>
        <p>
          The tool uses the Shapes Constraint Languages (SHACL) to validate
          building projects, using '
          <a href="https://github.com/RDFLib/pySHACL">pySHACL</a>', and '
          <a href="https://nodejs.org/api/child_process.html">child_process</a>
          '.
        </p>
        <br></br>
        <Button variant="outline-dark" href="/upload">
          Validate a building project
        </Button>
      </div>
    );
  }
}

export default Home;
