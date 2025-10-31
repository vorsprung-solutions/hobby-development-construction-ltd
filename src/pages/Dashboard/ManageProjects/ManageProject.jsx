import { Link } from "react-router-dom";
import UploadBtn from "../../../components/button/UploadBtn";
import UploadButton from "../../../components/button/UploadButton";
import ProjectTable from "./components/ProjectTable";

const ManageProject = () => {
  return (
    <div className="my-5  mx-10">
      <div className="flex justify-between items-center mx-5">
        <h1 className="lg:text-2xl text-blue-800 text-center my-6">
          Manage Project
        </h1>
        <Link to="/dashboard/upload-project/interior"></Link>
        <div className="lg:flex items-center gap-2 hidden ">
          <UploadButton
            value={"Interior Project"}
            linkTo={"/dashboard/upload-project/interior"}
          ></UploadButton>
          <UploadButton
            value={"Construction "}
            linkTo={"/dashboard/upload-project/construction"}
          ></UploadButton>
        </div>
      </div>
      <ProjectTable></ProjectTable>
    </div>
  );
};

export default ManageProject;
