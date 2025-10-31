import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FcInfo } from "react-icons/fc";
import useProjectInfo from "../server-components/useProjectInfo";
import PrimaryLoader from "../../../components/shared/Loader/PrimaryLoader";
import { base_url } from "../../../config";
const ProjectInfo = () => {
  const id = window.location.pathname.split("/")[3];
  const [isLoading, setIsLoading] = useState(false);
  const [projectInfo, setProjectInfo] = useState({});
  useEffect(() => {
    setIsLoading(true);
    fetch(base_url + `/project/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjectInfo(data?.data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  return (
    <div className="lg:mx-52 mx-5">
      <div className="p-5 ">
        <img
          src={projectInfo?.imageUrl}
          alt=""
          className="rounded shadow lg:h-96 mx-auto  lg:w-auto lg:px-48 p-5 "
        />
      </div>
      <div className="grid grid-cols-1  gap-5 text-justify">
        <div className="my-5">
          <h1 className="text-xl my-1">Project Summary</h1>
          <div className="w-28 h-1 bg-blue-800 my-2" />
          <div className="font-light text-sm  shadow-xl rounded p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3   ">
              <div className="flex mx-2">
                <FcInfo className=" w-8 tex-sm font-normal  mb-2 mt-3 mr-2" />
                <p className="tex-sm font-normal tracking-wider leading-6  mt-2  ">
                  {" "}
                  Project Name :{" "}
                  {projectInfo?.projectName ? projectInfo?.projectName : "N/A"}
                </p>
              </div>
              <div className="flex mx-2">
                <FcInfo className=" w-8 tex-sm font-normal  mb-2 mt-3 mr-2" />
                <p className="tex-sm font-normal tracking-wider leading-6  mt-2  ">
                  {" "}
                  Building Type : {projectInfo?.buildingType}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Price: {projectInfo?.price ? projectInfo?.price : "N/A"} Tk
                </p>
              </div>
              <div className="flex mx-2 justify-start items-center">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Client Name:{" "}
                  {projectInfo?.clientName ? projectInfo?.clientName : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Client Contact :{" "}
                  {projectInfo?.clientPhoneNo
                    ? projectInfo?.clientPhoneNo
                    : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 justify-start items-center">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Developed By:{"SHDCL "}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Apt. Size :{" "}
                  {projectInfo?.aptSize ? projectInfo?.aptSize : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2  " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2 ">
                  No. of Beds :
                  {projectInfo?.numberOfBeds ? projectInfo?.numberOfBed : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2 ">
                  No. of Bath :{" "}
                  {projectInfo?.numberOfBath
                    ? projectInfo?.numberOfBath
                    : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 justify-start items-center">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Unit Per Floor : {projectInfo?.unitPerFloor}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Storied :{" "}
                  {projectInfo?.storied ? projectInfo?.storied : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Total Units :{" "}
                  {projectInfo?.totalUnit ? projectInfo?.totalUni : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Units Available :{" "}
                  {projectInfo?.availableUnit
                    ? projectInfo?.availableUnit
                    : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal  mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Project Address :
                  {projectInfo?.projectAddress
                    ? projectInfo?.projectAddress
                    : "N/A"}
                </p>
              </div>

              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Land : {projectInfo?.landSize ? projectInfo?.landSize : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Handover:{" "}
                  {projectInfo?.handOverDate
                    ? projectInfo?.handOverDate?.split("T")[0]
                    : "N/A"}
                </p>
              </div>

              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2 ">
                  Project Type :{" "}
                  {projectInfo?.projectType ? projectInfo?.projectType : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2 ">
                  Project Status :{" "}
                  {projectInfo?.projectStatus
                    ? projectInfo?.projectStatus
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-xl my-1">Project Description</h1>
          <div className="w-28 h-1 bg-blue-800 my-2" />
          <p className="text-sm font-light">
            {projectInfo?.description
              ? projectInfo?.description
              : "Not Available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
