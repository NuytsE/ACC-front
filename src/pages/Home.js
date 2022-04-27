import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <div style={{marginLeft:"200px", marginTop:"100px"}}>
        <p >This compliance checker is a deliverable from a master thesis at Ghent University.</p>
        <p>You can upload a Linked Building Data file and check the compliance with the Belgian building code on accessibility.</p>
        <p>The tool uses the Shapes Constraint Languages (SHACL) to validate building projects,
        using the '
          <a href= 'https://github.com/zazuko/rdf-validate-shacl'>rdf-validate-shacl</a>', '
          <a href="https://github.com/rdf-ext/rdf-ext">rdf-ext</a>' and '
          <a href="https://github.com/rdfjs/N3.js">RDF.js</a>' modules.
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
