import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "../components/Button";

function Upload() {
  const [properties, setProperties] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState("");

  async function postProjects(e) {
    e.preventdefault();
    try {
      const data = { properties };
      setProperties("");

      axios.post("http://localhost:5000/upload", data).then((response) => {
        console.log(`response`, response);
        console.log(`created`, response.data);

        setMessage(response.data.message);

        const projectId = response.data.project._id;
        console.log(`projectId`, projectId);

        const formData = new FormData();
        formData.append("file", file);
        console.log(`formData`, formData);

        axios
          .post(
            `http://localhost:5000/api/project/${projectId}/upload`,
            formData
          )
          .then((res) => console.log(`res`, res))

          .catch((error) => console.log("error uploading Formdata", error));
      });
    } catch (err) {
      setError(err.message);
      setShowError(true);
      console.log("error", err.message);
    }
  }
  function handleAlertClose() {
    setError(null);
    setShowError(false);
  }

  function onChangeFile(e) {
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  const add = (
    <div>
      <Form onSubmit={postProjects}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload IFC file</Form.Label>
          <input type="file" name="file" onChange={onChangeFile} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Which properties do you want to check?</Form.Label>
          <Form.Check label="Select all" />
          <Form.Check label="Doors" />
          <Form.Check label="Stairs" />
          <Form.Check label="Passages" />
        </Form.Group>

        <Button
          buttonStyle="btn--secondary"
          buttonSize="btn--medium"
          type="submit"
        >
          Submit
        </Button>
        {showError ? (
          <div>
            <Alert variant="danger" dismissible onClose={handleAlertClose}>
              {error}
            </Alert>
          </div>
        ) : (
          <></>
        )}
      </Form>
      <h2>{message}</h2>
    </div>
  );

  return <div>{add}</div>;
}

export default Upload;
