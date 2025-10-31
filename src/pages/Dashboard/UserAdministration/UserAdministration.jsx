import React from "react";
import UserTable from "./_components/UserTable";
import UploadButton from "../../../components/button/UploadButton";

const UserAdministration = () => {
  return (
    <div>
      <div className="flex items-center justify-between lg:mr-20 my-8">
        <h1 className="text-2xl text-blue-800 ">Manage User</h1>
        <UploadButton
          value={"Create Account"}
          linkTo={`/dashboard/manage-user/create-user`}
        ></UploadButton>
      </div>
      <UserTable />
    </div>
  );
};

export default UserAdministration;
