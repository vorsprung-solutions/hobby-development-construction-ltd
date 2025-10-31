import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./JobDetails.css";
import PrimaryLoader from "../../components/shared/Loader/PrimaryLoader";
import { base_url } from "../../config";
import { FcDownload } from "react-icons/fc";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [jobInfo, setJobInfo] = useState({});
  useEffect(() => {
    setIsLoading(true);
    fetch(base_url + `/job/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJobInfo(data?.data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  const handleDownload = () => {
    // Create a temporary anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = jobInfo?.jobCircularImgUrl;
    downloadLink.download = "SHDCL-Circular"; // Set the default filename if not provided

    // Trigger a click on the anchor element to initiate the download
    downloadLink.click();

    // Cleanup: remove the temporary anchor element from the DOM
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="">
      <div
        id="job-details-title"
        className=" h-20 md:h-48 flex items-center justify-center"
      >
        <h4 className=" text-4xl font-bold text-first">Job Details</h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  justify-center mx-8 md:mx-48 my-12 gap-10">
        <div className="text-justify">
          <img src={jobInfo?.jobCircularImgUrl} alt="" />
        </div>
        <div className=" font-light">
          <div>
            <div className="border my-5 p-3">
              <h1 className="text-2xl">Job Description</h1>
              <p className=" my-4 font-light">{jobInfo?.jobDescription}</p>
            </div>
            <div className=" p-5 bg-[#F3F3FF] rounded-lg text-black">
              <div className="flex justify-between items-center">
                <h4 className=" font-bold text-lg">Job Information</h4>
                <button className="border px-2 p-1 rounded  m-1 flex justify-center items-center">
                  <FcDownload onClick={handleDownload} className="text-white" />
                </button>
              </div>
              <hr className=" h-[1px] border-none bg-first" />
              <p>
                <span className=" font-bold">Job Title:</span>{" "}
                {jobInfo?.jobTitle}
              </p>
              <p>
                <span className=" font-bold">Job Type:</span> {jobInfo?.jobType}
              </p>
              <p>
                <span className=" font-bold">Vacancy:</span> {jobInfo?.vacancy}
              </p>
              <h6>
                <span className=" font-bold">Salary:</span> {jobInfo?.salary}{" "}
                TK. Per Month
              </h6>
            </div>
          </div>
          <button className=" bg-first text-white w-full rounded-lg mt-4 py-4 font-bold">
            <Link to={`/careers/job-details/apply-now/${id}`}> Apply Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
