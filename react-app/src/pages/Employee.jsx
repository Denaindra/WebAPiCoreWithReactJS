import AddEmployee from "../componets/Employee/AddEmployee";
import { Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import { UploadEmployeeProfileImage } from "../Services/EmployeeServices";

function Employee() {
  const [employeeModalView, setemployeeModalView] = useState(false);

  function ShowAddEmployeeModal() {
    setemployeeModalView(true);
  }

  function HidaAddEmployeeModal() {
    setemployeeModalView(false);
  }

  function UploadEmployeeImage(selectedFile) {
    const formData = new FormData();
    formData.append("Avatar", selectedFile);
    formData.append("Name", "some value user types");

    UploadEmployeeProfileImage(formData).then((data) => {
      console.log("response result 1: ", data);
    });
  }

  return (
    <div>
      <Spinner animation="border" variant="primary" />
      <h6>This is Employee screen</h6>
      <Button variant="primary" type="button" onClick={ShowAddEmployeeModal}>
        Add employee
      </Button>

      <AddEmployee
        show={employeeModalView}
        hide={HidaAddEmployeeModal}
        upload={UploadEmployeeImage}
      />
    </div>
  );
}

export default Employee;
