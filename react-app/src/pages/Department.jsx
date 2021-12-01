import React, { useEffect, useState } from "react";
import AddDepartmentPopUp from "../componets/DepartMents/AddDepartmentPopUp";
import DepartmentTable from "../componets/DepartMents/DepartmentTable";
import EditDepartmentPopUp from "../componets/DepartMents/EditDepartmentPopUp";
import {
  LoadDepartments,
  AddDepartments,
  UpdateExisitDepartment,
  DeleteDepartment,
} from "../Services/DepartmentSerivces";

function Department() {
  const [loadedDepartments, setLoadedDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addDepartmentModal, setaddDepartmentModal] = useState(false);
  const [editDepartmentModal, setEditDepartmentModal] = useState(false);
  const [selectedDepartmentModal, setselectedDepartmentModal] = useState(JSON);

  useEffect(() => {
    GetDepartmentResults();
  }, []);

  function GetDepartmentResults() {
    LoadDepartments().then((data) => {
      setLoading(false);
      setLoadedDepartments(data);
    });
  }

  // Add new department section
  function OpenAddNewDeaprtmentModal() {
    setaddDepartmentModal(true);
  }

  function CloseAddNewDeaprtmentModal() {
    setaddDepartmentModal(false);
    setEditDepartmentModal(false);
  }

  function SubmitNewDepartment(departmentObj) {
    setaddDepartmentModal(false);
    setLoading(true);
    AddDepartments(departmentObj).then((data) => {
      GetDepartmentResults();
    });
  }

  // Edit section
  const OpenAddEditDeaprtmentModal = (department) => {
    setEditDepartmentModal(true);
    setselectedDepartmentModal(department);
  };

  function UpdateDepartment(updatedDepartment) {
    setEditDepartmentModal(false);
    setLoading(true);
    UpdateExisitDepartment(updatedDepartment).then((data) => {
      GetDepartmentResults();
    });
  }

  //delete section
  function DeleteDepartement(department) {
    if (window.confirm("Are you sure !!")) {
      setLoading(true);
      DeleteDepartment(department).then((data) => {
        GetDepartmentResults();
      });
    } else {

    }
  }

  var loadingView = "";
  if (loading) {
    loadingView = <span>Loadind....</span>;
  } else {
    loadingView = (
      <React.Fragment>
        <DepartmentTable
          data={loadedDepartments}
          edit={OpenAddEditDeaprtmentModal}
          delete={DeleteDepartement}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={OpenAddNewDeaprtmentModal}
        >
          Add Department
        </button>
        <AddDepartmentPopUp
          show={addDepartmentModal}
          hide={CloseAddNewDeaprtmentModal}
          submit={SubmitNewDepartment}
        />
        <EditDepartmentPopUp
          show={editDepartmentModal}
          hide={CloseAddNewDeaprtmentModal}
          update={UpdateDepartment}
          selectedDepartment={selectedDepartmentModal}
        />
      </React.Fragment>
    );
  }

  return <div className="mx-5">{loadingView}</div>;
}

export default Department;
