import useGallery from "../server-actions/useGallery";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import Swal from "sweetalert2";
import { deleteImage } from "../server-actions/deleteImage";
import { useState } from "react";
import Pagination from "../../../../components/pagination/Pagination";

const GalleryTable = () => {
  const [gallery, isLoading, refetch] = useGallery();

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
        const result = await deleteImage(id);
        if (result.data.acknowledged) {
          Swal.fire("Deleted!", "Photo has been deleted.", "success");
          refetch();
        }
      }
    });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastOrder = currentPage * 5;
  const indexOfFirstOrder = indexOfLastOrder - 5;
  const currentGallery = gallery?.data?.slice(
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
              <th>Title</th>
              <th>Upload</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentGallery?.map((photo, index) => (
              <tr key={photo?._id}>
                <th>{(currentPage - 1) * 5 + (index + 1)}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={photo?.imgUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{photo?.title}</td>
                <td>{photo?.updatedAt?.split("T")[0]}</td>
                <th className="flex items-center">
                  <Link to={`/dashboard/update-photo/${photo._id}`}>
                    <button className="btn btn-ghost text-2xl">
                      <FiEdit />
                    </button>
                  </Link>
                  <Link>
                    <button
                      onClick={() => handleDelete(photo?._id)}
                      className="btn btn-ghost text-2xl p-2"
                    >
                      <MdDeleteOutline />
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <Pagination
        tableData={gallery}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      ></Pagination>

      {/* <div className=" flex justify-center my-10 gap-2">
        {Array.from({
          length: Math.ceil(gallery?.data?.length / 5),
        }).map((_, index) => (
          <button
            key={index}
            className={`join-item btn    ${
              currentPage === index + 1 ? " bg-first text-white" : "bg-white text-black"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default GalleryTable;
