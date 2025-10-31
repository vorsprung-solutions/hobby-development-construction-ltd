import React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FcOvertime } from "react-icons/fc";

const SingleProjecct = ({ project }) => {
  return (
    <div>
      <div className=" relative w-full mx-auto max-w-sm bg-white border   border-gray-200 rounded shadow-lg dark:bg-gray-800 dark:border-gray-700 ">
        <span
          className={` absolute right-2 top-2 rounded-3xl px-2 py-1 text-white font-bold flex justify-center items-center ${
            project?.projectStatus === "Ongoing" ? " bg-[#FB9A00]" : ""
          }  ${
            project?.projectStatus === "HandOvered" ? " bg-[#00B904]" : ""
          }  ${project?.projectStatus === "Upcoming" ? " bg-indigo-500" : ""}`}
        >
          <GoDotFill color="white" className=" me-0.5" />
          {project?.projectStatus}
        </span>
        <div className="w-100 rounded-lg">
          <img
            src={project?.imageUrl}
            alt=""
            className=" shadow-lg h-[450px]  w-96 p-5 "
          />
        </div>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <Link
              to={`/projects/${project?.projectType?.toLowerCase()}/${
                project?._id
              }`}
            >
              <span className="text-xl font-medium  text-primary hover:text-blue-900 hover:underline">
                {
                  // allow upto 30 characters
                  project?.projectName?.length > 25
                    ? project?.projectName?.substring(0, 25) + "..."
                    : project?.projectName
                }
              </span>
            </Link>
          </div>
          {/* <p>
            {
              // allow upto 120 characters
              project?.description?.length > 120
                ? project?.description?.substring(0, 120) + "..."
                : project?.description
            }
          </p> */}
          <div className="flex flex-col my-1 ">
            <div className="flex justify-center items-center gap-2 ">
              <CiLocationOn className="text-2xl" />
              <p className="font-light">
                {
                  project?.projectAddress
                  /* {project?.projectAddress?.length > 18
                  ? project?.projectAddress?.substring(0, 19) + "..."
                  : project?.projectAddress} */
                }
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2 my-1 ">
                {project?.handOverDate?.split("T")[0] && (
                  <>
                    {" "}
                    <FcOvertime className="text-2xl" />
                    <p className="font-light">
                      {project?.handOverDate?.split("T")[0] &&
                        project?.handOverDate?.split("T")[0]}
                    </p>
                  </>
                )}
              </div>
              <div className="badge badge-outline">{project?.buildingType}</div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* <div className="w-full max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="w-100 ">
          <img src={project.images[0]} alt="" className=" h-48 w-96" />
        </div>
        <div className="card-body">
          <Link to={`${project._id}`}>
            <h2 className="card-title ">
              {project?.projectName}
              <div className="badge bg-blue-800 text-white">Running</div>
            </h2>
          </Link>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            asperiores cumque.{" "}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Construction</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SingleProjecct;
