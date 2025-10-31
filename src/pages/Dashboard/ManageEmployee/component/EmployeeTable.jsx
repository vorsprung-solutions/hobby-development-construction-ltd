import React, { useState } from "react";
import { Link } from "react-router-dom";
import useEmployee from "../server-actions/useEmployee";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline, MdDetails } from "react-icons/md";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import { AiFillEye } from "react-icons/ai";
import Swal from "sweetalert2";
import { deleteEmployee } from "../server-actions/deleteEmployee";
import ViewEmployeeModal from "./ViewEmployeeModal";
import Pagination from "../../../../components/pagination/Pagination";

const EmployeeTable = () => {
  const [employee, isLoading, refetch] = useEmployee();
  const [isOpen, setIsOpen] = useState(false);
  const [employeeData, setEmployeeData] = useState({});

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure, you want to delete the employee?",
      text: "Once you will delete the employee, it will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteEmployee(id);
        console.log(result);
        if (result.data.acknowledged) {
          Swal.fire("Deleted!", "Employee has been deleted.", "success");
          refetch();
        }
      }
    });
  };
  const handleViewEmployee = (emp) => {
    setIsOpen(true);
    setEmployeeData(emp);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastOrder = currentPage * 5;
  const indexOfFirstOrder = indexOfLastOrder - 5;
  const currentEmployees = employee?.data?.slice(
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
              <th>employee Name</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Email</th>
              {/* <th>Make Admin</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees?.map((emp, index) => (
              <tr key={emp._id}>
                <th>{(currentPage - 1) * 5 + (index + 1)}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={emp?.imgUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{emp?.name} </td>
                <td>{emp?.designation}</td>
                <td>{emp?.phone}</td>
                <td>{emp?.email}</td>
                {/* <th>
                  <button className="text-xs font-normal border border-green-800 p-1 rounded-lg">
                    Make Admin
                  </button>
                </th> */}
                <th>
                  <Link to={`/dashboard/employee-details/${emp?._id}`}>
                    <button
                      // onClick={() => handleViewEmployee(emp)}
                      className="btn btn-ghost text-2xl p-2"
                    >
                      <AiFillEye />
                    </button>
                  </Link>

                  <Link to={`/dashboard/update-employee/${emp?._id}`}>
                    <button className="btn btn-ghost text-2xl">
                      <FiEdit />
                    </button>
                  </Link>
                  <button onClick={() => handleDelete(emp?._id)}>
                    <button className="btn btn-ghost text-2xl p-1">
                      <MdDeleteOutline />
                    </button>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <Pagination
        tableData={employee}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      ></Pagination>

      {/* <ViewEmployeeModal
        employee={employeeData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      /> */}
    </div>
  );
};

export default EmployeeTable;
