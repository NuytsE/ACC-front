import React, { useState } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import axios from "axios";
import { Container} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

function Upload() {
  const [LBDfile, setLBDfile] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState("");

  async function postProject(e) {
    e.preventDefault();
    try {
      const data = {
        name,
      };
      console.log(data);

      setName("");

      axios.post("http://localhost:5000/project", data).then((response) => {
        console.log(`response`, response);
        console.log(`created`, response.data);

        setMessage(response.data.message);

        const projectId = response.data.project._id;
        console.log(`projectId`, projectId);

        const formData = new FormData();
        formData.append("LBDfile", LBDfile);
        console.log(`formData`, formData);

        axios
          .post(
            `http://localhost:5000/api/project/${projectId}/upload`,
            formData
          )
          .then((res) => console.log("res", res))
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
    setLBDfile(e.target.files[0]);
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
              <input type="file" name="LBDfile" onChange={onChangeFile} />
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

//todo: link to report after submit