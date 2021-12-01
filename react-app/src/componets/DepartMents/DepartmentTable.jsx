import { Button } from "react-bootstrap";

function DepartmentTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Department ID</th>
          <th scope="col">Department Name</th>
          <th scope="col">Option</th>
        </tr>
      </thead>
      <tbody>
     {
      props.data.map((department) => (
        <tr key={department.id}>  
        <td>{department.departmentId}</td>
        <td>{department.departmentName}</td>
        <td>
    
        <Button className="btn-block" variant="info" onClick={()=>props.edit(department)}>Edit</Button>
        <Button className="btn-block ms-3" variant="danger" onClick={()=>props.delete(department)}>Delete</Button>
   
        </td>
      </tr>
      ))
     }
      </tbody>
    </table>
  );
}

export default DepartmentTable;
