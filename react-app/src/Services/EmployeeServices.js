import ServiceConstants from "../constants/ServiceConstants";
import axios from "axios";

export function UploadEmployeeProfileImage(params) {
  return axios
    .post("https://localhost:44374/api/Employees/EmployeeImage", params, {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (propgressevent) => {
        console.log(
          "Upload Progress: ",
          propgressevent.loaded / propgressevent.total
        );
      },
    }).catch((error) => {
      console.log(error);
    });
}
