import axios from "axios";
import {useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddEmployee(props) {
  const [selectedFile, setselectedFile] = useState();

  const onFileChange = (event) => {
    event.preventDefault();
    setselectedFile(event.target.files[0]);
  };
  
  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Default file input example
          </label>
          <input
            onChange={onFileChange}
            className="form-control"
            type="file"
            id="formFile"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hide}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{props.upload(selectedFile)}}>
          Upload Image
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEmployee;
