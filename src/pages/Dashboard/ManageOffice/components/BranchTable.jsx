import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline, MdDetails } from "react-icons/md";
import { Link } from "react-router-dom";
import useBranch from "../server-actions/useBranch";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import { deleteBranch } from "../server-actions/deleteBranch";
import Swal from "sweetalert2";
import Pagination from "../../../../components/pagination/Pagination";

const BranchTable = () => {
  const [branch, isLoading, refetch] = useBranch();

  const handleDeleteBranch = (id) => {
    Swal.fire({
      title: "Are you sure, you want to delete the branch?",
      text: "Once you will delete this branch, it will delete permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteBranch(id);
        if (result.data.acknowledged) {
          Swal.fire("Deleted!", "Branch has been deleted.", "success");
          refetch();
        }
      }
    });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastOrder = currentPage * 5;
  const indexOfFirstOrder = indexOfLastOrder - 5;
  const currentBranch = branch?.data?.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
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
              <th>Image</th>
              <th>Branch Name</th>
              <th>Branch Manager</th>
              <th>Contact Info</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentBranch?.map((brnc, index) => (
              <tr key={brnc._id}>
                <th>{(currentPage - 1) * 5 + (index + 1)}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={brnc.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{brnc?.branchName} </td>
                <td>{brnc?.branchManager}</td>
                <td>{brnc?.contactInfo}</td>
                <td className="w-44">{brnc?.address}</td>
                <th>
                  <Link to={`${`/dashboard/update-branch/${brnc._id}`}`}>
                    <button className="btn btn-ghost text-2xl">
                      <FiEdit />
                    </button>
                  </Link>
                  <Link>
                    <button
                      onClick={() => handleDeleteBranch(brnc._id)}
                      className="btn btn-ghost text-2xl p-2"
                    >
                      <MdDeleteOutline />
                    </button>
                  </Link>
                  <Link to="/dashboard/branch-details">
                    <button className="btn btn-ghost text-2xl p-2">
                      <MdDetails />
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        tableData={branch}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default BranchTable;
