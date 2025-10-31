import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline, MdEngineering } from "react-icons/md";
import { Link } from "react-router-dom";
import useJobs from "../server-actions/useJobs";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import Swal from "sweetalert2";
import { deleteJob } from "../server-actions/deleteJob";
import Pagination from "../../../../components/pagination/Pagination";

const JobTable = () => {
  const [jobs, isLoading, refetch] = useJobs();

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
        const result = await deleteJob(id);
        if (result.data.acknowledged) {
          Swal.fire("Deleted!", "Job has been deleted.", "success");
          refetch();
        }
      }
    });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastOrder = currentPage * 5;
  const indexOfFirstOrder = indexOfLastOrder - 5;
  const currentJobs = jobs?.data?.slice(indexOfFirstOrder, indexOfLastOrder);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-md">
              <th>#</th>
              <th>Job Title</th>
              <th>Location</th>
              <th>Deadline</th>
              <th>Vacancy</th>
              <th>Applicants</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.data?.map((job, index) => (
              <tr key={job._id} className="shadow-lg">
                <th>{(currentPage - 1) * 5 + (index + 1)}</th>
                <td className="w-44">{job?.jobTitle} </td>
                <td className="w-44">{job?.location}</td>
                <td>{job?.deadline?.split("T")[0]}</td>
                <td>{job?.vacancy}</td>
                <td>{job?.applicants?.length}</td>
                <th>
                  <Link
                    to={`/dashboard/manage-jobs/show-applicants/${job._id}`}
                  >
                    <button className="btn btn-ghost text-2xl p-2">
                      <MdEngineering />
                    </button>
                  </Link>
                  <Link to={`/dashboard/update-job/${job?._id}`}>
                    <button className="btn btn-ghost text-2xl">
                      <FiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(job?._id)}
                    className="btn btn-ghost text-2xl p-2"
                  >
                    <MdDeleteOutline />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        tableData={jobs}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default JobTable;
