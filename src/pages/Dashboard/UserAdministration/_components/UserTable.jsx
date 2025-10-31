import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import useUser from "../server-actions/useUser";
import Swal from "sweetalert2";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import { deleteUser } from "../server-actions/deleteUser";

const UserTable = () => {
  const [users, isLoading, refetch] = useUser();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you want to Delete this User?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteUser(id);
        if (result?.data?.acknowledged) {
          Swal.fire("Deleted!", "User has been deleted.", "success");
          refetch();
        }
      }
    });
  };

  if (isLoading) {
    return <PrimaryLoader />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            {/* <th>Role</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.data?.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user?.employeeId?.imgUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{user?.employeeId?.name}</td>
              <td>{user?.employeeId?.email}</td>
              <td>{user?.employeeId?.phone}</td>
              {/* <td>{user?.employeeId?.role}</td> */}
              <th>
                {/* <Link
                  to={`/dashboard/manage-user/update-user/${user?._id}`}
                  className="btn btn-ghost text-2xl"
                >
                  <FiEdit />
                </Link> */}
                <button
                  onClick={() => handleDelete(user?._id)}
                  className="btn btn-ghost text-2xl"
                >
                  <MdOutlineDeleteOutline />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
