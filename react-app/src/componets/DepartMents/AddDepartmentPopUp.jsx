import { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";


function AddDepartmentPopUp(props) {

  const departmentIDInputRef = useRef();
  const departmentNameInputRef = useRef();

  const SubmitNewDepartment = (event) => {
    event.preventDefault();
     const entereddepatmentID = departmentIDInputRef.current.value;
     const entereddepartmentName = departmentNameInputRef.current.value;

    const newDepartmentData = {
      departmentId: entereddepatmentID,
      departmentName: entereddepartmentName,
    };
    props.submit(newDepartmentData)
  };

  return (
    <Modal show={props.show} backdrop="static" keyboard={false}>
      <Form onSubmit={SubmitNewDepartment}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicDepartmentID">
            <Form.Label>Department ID</Form.Label>
            <Form.Control required  type="number" placeholder="Department ID" ref={departmentIDInputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDepartmetName">
            <Form.Label>Department Name</Form.Label>
            <Form.Control required type="text" placeholder="Department Name" ref={departmentNameInputRef} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hide}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddDepartmentPopUp;
