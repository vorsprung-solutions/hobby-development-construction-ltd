import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useJobs from "../server-actions/useJobs";
import { deleteApplicant } from "../../../JobDetailsPage/server-actions/deleteApplicant";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import Pagination from "../../../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import { base_url } from "../../../../config";

const ApplicantsTable = () => {
  const [jobs, isLoading, refetch] = useJobs();
  const [loading, setLoading] = useState(true);
  const [applicants, setApplicants] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(base_url + `/job/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setApplicants(data?.data?.applicants);
      });
  }, [id, applicants]);
  const data = jobs?.data?.find((job) => job._id === id);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastOrder = currentPage * 10;
  const indexOfFirstOrder = indexOfLastOrder - 10;
  const currentApplicants = applicants?.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (loading && !applicants?.length) {
    return <PrimaryLoader></PrimaryLoader>;
  }
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
        const result = await deleteApplicant(id, data?._id);
        if (result.data.acknowledged) {
          Swal.fire("Deleted!", "Applicant has been deleted.", "success");
          refetch();
        }
      }
    });
  };
  return (
    <div className="lg:my-12 mx-8 py-5">
      <h1 className="lg:text-4xl text-blue-800 text-center  mb-5">
        Job Applicants Information
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-md">
              <th>#</th>
              <th>Photo</th>
              <th>Applicants Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>CV</th>
              <th>Applied At</th>
              <th>Actions</th>
            </tr>
          </thead>
          {currentApplicants?.length > 0 ? (
            <tbody>
              {currentApplicants?.map((applicant, index) => (
                <tr key={index} className="shadow-lg">
                  <th>{(currentPage - 1) * 10 + (index + 1)}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={`${
                              applicant?.photo
                                ? applicant?.photo
                                : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1697137232~exp=1697137832~hmac=5cf5719726cb1286ccd902ce128797ec4ae6b1a9986ae6df4f172bd694e8d476"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{applicant?.name}</td>
                  <td>{applicant?.email}</td>
                  <td>{applicant?.phone}</td>
                  <td className="text-2xl">
                    <a href={applicant?.cvLink} download={`SHDCL-CV.pdf`}>
                      {" "}
                      <HiOutlineDownload />
                    </a>
                  </td>
                  <td>{applicant?.updatedAt?.split("T")[0]}</td>
                  {/* <td>12-12-12</td> */}
                  <th>
                    <button
                      onClick={() => handleDelete(applicant?._id)}
                      className="btn btn-ghost text-2xl"
                    >
                      <MdOutlineDeleteOutline />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          ) : (
            <p className=" text-2xl">No Applicant here </p>
          )}
        </table>
      </div>
      <div className=" flex justify-center my-10 gap-2">
        {Array.from({
          length: Math.ceil(applicants?.length / 10),
        }).map((_, index) => (
          <button
            key={index}
            className={`join-item btn    ${
              currentPage === index + 1
                ? " bg-first text-white"
                : "bg-white text-black hover:text-white border border-blue-700"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ApplicantsTable;
