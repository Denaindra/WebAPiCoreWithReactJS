import { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditDepartmentPopUp(props) {
  const departmentIDInputRef = useRef();
  const departmentNameInputRef = useRef();

  const UpdateDepartment = (event) => {
    event.preventDefault();
    const departmentID = departmentIDInputRef.current.value;
    const entereddepartmentName = departmentNameInputRef.current.value;

    const updatedDepartment = {
      id: props.selectedDepartment.id,
      department: {
        id: props.selectedDepartment.id,
        departmentId: departmentID,
        departmentName: entereddepartmentName,
      },
    };
    props.update(updatedDepartment);
  };

  return (
    <Modal show={props.show} backdrop="static" keyboard={false}>
      <Form onSubmit={UpdateDepartment}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Department ID</Form.Label>
            <Form.Control
              disabled
              value={props.selectedDepartment.departmentId}
              type="number"
              placeholder="Department ID"
              ref={departmentIDInputRef}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Department Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Department Name"
              ref={departmentNameInputRef}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hide}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EditDepartmentPopUp;
