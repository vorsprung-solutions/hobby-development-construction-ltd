import { Link, useNavigate } from "react-router-dom";
import useProject from "../server-actions/useProject";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline, MdDetails } from "react-icons/md";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import Swal from "sweetalert2";
import { deleteProject } from "../server-actions/deleteProject";
import { useState } from "react";
import Pagination from "../../../../components/pagination/Pagination";
import { AiFillEye } from "react-icons/ai";
import { updateProject } from "../server-actions/updateProject";

const ProjectTable = () => {
  const [projects, isLoading, refetch] = useProject();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteProject(id);
        if (result.data.acknowledged) {
          Swal.fire("Deleted!", "Project has been deleted.", "success");
          refetch();
        }
      }
    });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastOrder = currentPage * 5;
  const indexOfFirstOrder = indexOfLastOrder - 5;
  const currentProjects = projects?.data?.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUpdateStatus = async (id) => {
    const result = await updateProject(id, { webVisibility: true });

    if (result.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Project Status Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/manage-projects");
      refetch();
    } else {
      alert("Something going wrong");
    }
  };
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  return (
    <div>
      <div className="overflow-x-auto mx-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-sm font-light">
              <th>No</th>
              <th>Image</th>
              <th>Project Name</th>
              <th>Porject Type</th>
              <th>Project Status</th>
              <th>Client Name</th>
              <th>Web Visibility</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects?.map((project, index) => (
              <tr key={project._id} className="">
                <th>{(currentPage - 1) * 5 + (index + 1)}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle  w-12 h-12">
                        <img
                          src={
                            project?.imageUrl
                              ? project?.imageUrl
                              : "https://via.placeholder.com/150"
                          }
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{project?.projectName} </td>
                <td>{project?.projectType ? project?.projectType : "N/A"}</td>
                <td>{project?.projectStatus || "N/A"}</td>
                <td>{project?.clientName || "N/A"}</td>
                <td>
                  {project?.webVisibility ? (
                    <p className="text-sm text-[green]">Approved</p>
                  ) : (
                    <button
                      onClick={() => handleUpdateStatus(project?._id)}
                      className="text-sm text-[white] bg-[orange] p-2 rounded"
                    >
                      Pending
                    </button>
                  )}
                </td>
                <th className="block items-center justify-center lg:flex mt-4">
                  <Link
                    to={`${
                      project?.projectType === "Construction"
                        ? `/dashboard/construction-project/${project._id}`
                        : `/dashboard/interior-project/${project._id}`
                    }`}
                  >
                    <button className="mx-1.5 text-lg ">
                      <AiFillEye />
                    </button>
                  </Link>
                  <Link
                    to={`${
                      project?.projectType === "Construction"
                        ? `/dashboard/update-construction-project/${project._id}`
                        : `/dashboard/update-interior-project/${project._id}`
                    }`}
                  >
                    <button className="mx-1.5 text-lg">
                      <FiEdit />
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(project?._id)}
                    className="mx-1.5 text-xl -mt-1 "
                  >
                    <MdDeleteOutline />
                  </button>

                  {/* <Link to="/dashboard/project-details">
                    <button className="btn btn-ghost text-2xl ">
                      <MdDetails />
                    </button>
                  </Link> */}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <Pagination
        tableData={projects}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default ProjectTable;
