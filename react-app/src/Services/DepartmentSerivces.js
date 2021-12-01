import ServiceConstants from "../constants/ServiceConstants";

export function LoadDepartments() {
  return fetch(
    ServiceConstants.BasedUrl.concat(ServiceConstants.DeapertmentCpontroller)
  )
    .then((data) => data.json())
    .catch((error) => {});
}

export async function AddDepartments(data) {
  var response = await fetch(
    ServiceConstants.BasedUrl.concat(ServiceConstants.DeapertmentCpontroller),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then((data) => data.json()).catch((error) => {});
  return response;
}

export async function UpdateExisitDepartment(data) {
  var response = await fetch(
    ServiceConstants.BasedUrl.concat(ServiceConstants.DeapertmentCpontroller,"/",data.id),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.department),
    }
  ).then((data) => data.json()).catch((error) => {});
  return response;
}

export async function DeleteDepartment(data) {
  var response = await fetch(
    ServiceConstants.BasedUrl.concat(ServiceConstants.DeapertmentCpontroller,"/",data.id),
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    }
  ).then((data) => data.json()).catch((error) => {});
  return response;
}
