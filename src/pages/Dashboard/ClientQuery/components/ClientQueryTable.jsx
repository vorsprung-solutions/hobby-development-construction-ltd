import { HiOutlineDownload } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import useAllQuery from "../server-actions/useAllQuery";
import { AiFillEye } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { useState } from "react";
import ReplayQuery from "./ReplayQuery";
import QueryViewModal from "./QueryViewModal";
import { deleteQuery } from "../server-actions/deleteQuery";
import Pagination from "../../../../components/pagination/Pagination";

const ClientQueryTable = () => {
  const [query, isLoading, refetch] = useAllQuery();
  let [isOpen, setIsOpen] = useState(false);
  let [isPreviewOpen, setIsPreviewOpen] = useState(false);
  let [queryData, setQueryData] = useState({});
  let [selectQuery, setSelectQuery] = useState({});

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
        const result = await deleteQuery(id);
        if (result.data.acknowledged) {
          Swal.fire("Deleted!", "Query has been deleted.", "success");
          refetch();
        }
      }
    });
  };

  const handlePreviewMessage = (query) => {
    setIsPreviewOpen(true);
    setQueryData(query);
    // console.log(query);
  };

  const handleSendMessage = (q) => {
    setSelectQuery(q);
    setIsOpen(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastOrder = currentPage * 5;
  const indexOfFirstOrder = indexOfLastOrder - 5;
  const currentQueries = query?.data?.slice(
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
    <div className="my-12 mx-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-md">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          {currentQueries?.length > 0 ? (
            <tbody>
              {currentQueries?.map((q, index) => (
                <tr key={index} className="shadow-lg">
                  <th>{(currentPage - 1) * 5 + (index + 1)}</th>

                  <td>{q?.name}</td>
                  <td>{q?.email}</td>
                  <td>{q?.subject}</td>
                  <td>
                    {q?.message?.length > 3
                      ? q?.message.slice(0, 10) + "...."
                      : q?.message}
                  </td>

                  <td>{q?.updatedAt?.split("T")[0]}</td>
                  {/* <td>12-12-12</td> */}
                  <th>
                    <button
                      onClick={() => handlePreviewMessage(q)}
                      className="btn btn-ghost text-2xl p-2"
                    >
                      <AiFillEye />
                    </button>
                    <button
                      onClick={() => handleSendMessage(q)}
                      className="btn btn-ghost text-2xl"
                    >
                      <BsSend />
                    </button>
                    <Link onClick={() => handleDelete(q._id)}>
                      <button className="btn btn-ghost text-2xl p-1">
                        <MdDeleteOutline />
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          ) : (
            <p className=" text-2xl">No query here </p>
          )}
        </table>
        <ReplayQuery
          queryData={selectQuery}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <QueryViewModal
          queryData={queryData}
          isPreviewOpen={isPreviewOpen}
          setIsPreviewOpen={setIsPreviewOpen}
        />
      </div>
      <Pagination
        tableData={query}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default ClientQueryTable;
