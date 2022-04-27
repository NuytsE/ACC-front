import React, { useState } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import axios from "axios";
import { Container} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

function Upload() {
  const [LBDFile, setLBDFile] = useState("");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [message] = useState("");

  async function postProject(e) {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append("LBDFile", LBDFile);
        console.log(`formData`, formData);

        axios.post(`http://localhost:4800/upload`, formData)
          .then((res) => console.log("res", res))
          .catch((error) => console.log("error uploading Formdata", error));
        
        window.location.href = '/report';
      ;
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
    setLBDFile(e.target.files[0]);
  }

  const add = (
    <div style={{ marginTop: 100, marginBottom: 50 }}>
        <Container
          component="main"
          maxWidth="xs"
          style={{ marginTop: 10, marginBottom: 5 }}
        >
          <Form onSubmit={postProject}>
            <Form.Group>
              <input type="file" name="LBDFile" onChange={onChangeFile} />
            </Form.Group>
            <br /> <br />
            
            <Button
              variant="outline-dark"
              type="submit"
            >
              CHECK COMPLIANCE
            </Button>
           
            {showError ? (
              <div style={{ marginTop: 30 }}>
                <Alert variant="danger" dismissible onClose={handleAlertClose}>
                  {" "}
                  {error}{" "}
                </Alert>
              </div>
            ) : (
              <></>
            )}
          </Form>
          <p>{message}</p>
        </Container>
    </div>
  );
  return <div>{add}</div>;
}
export default Upload;