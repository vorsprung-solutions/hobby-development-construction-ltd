import React from "react";
import UploadButton from "../../../components/button/UploadButton";
import ProjectTable from "../ManageProjects/components/ProjectTable";
import EmployeeTable from "./component/EmployeeTable";

const ManageEmployee = () => {
  return (
    <div className="my-5 mx-10">
      <div className="flex justify-between items-center mx-5">
        <h1 className="lg:text-2xl text-blue-800 text-center my-6">
          Manage Employee
        </h1>
        <UploadButton
          value={"New Employee"}
          linkTo={"/dashboard/upload-employee"}
        ></UploadButton>
      </div>
      <EmployeeTable></EmployeeTable>
    </div>
  );
};

export default ManageEmployee;
