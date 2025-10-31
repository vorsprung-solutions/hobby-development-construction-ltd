import React from "react";
import UploadButton from "../../../components/button/UploadButton";
import BranchTable from "../ManageOffice/components/BranchTable";
import ClientQueryTable from "./components/ClientQueryTable";

const ClientQuery = () => {
  return (
    <div className="my-5 mx-10">
      <div className="flex justify-between items-center mx-5">
        <h1 className="lg:text-2xl text-blue-800 text-center ">
          Manage Client Query
        </h1>
        {/* <Link to='/dashboard/upload-photo' className="bg-blue-800 p-3 rounded-xl text-white">Upload New Photo</Link> */}
        {/* <UploadButton
          value={"New Branch"}
          linkTo={"/dashboard/upload-branch"}
        ></UploadButton> */}
      </div>
      {/* <Gallery></Gallery> */}
      <ClientQueryTable></ClientQueryTable>
    </div>
  );
};
export default ClientQuery;
