import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FcInfo } from "react-icons/fc";
import useProjectInfo from "../server-components/useProjectInfo";
import PrimaryLoader from "../../../components/shared/Loader/PrimaryLoader";
import { base_url } from "../../../config";
const InteriorProjectInfo = () => {
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
                  Building Type :{" "}
                  {projectInfo?.buildingType
                    ? projectInfo?.buildingType
                    : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Cost: {projectInfo?.price ? projectInfo?.price : "N/A"} (TK)
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
                  Interior Designer:{" "}
                  {projectInfo?.interiorDesigner
                    ? projectInfo?.interiorDesigner
                    : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2 ">
                  No. of Bed :{" "}
                  {projectInfo?.numberOfBeds
                    ? projectInfo?.numberOfBeds
                    : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2 ">
                  No. of Dining :{" "}
                  {projectInfo?.numberOfDiningRoom
                    ? projectInfo?.numberOfDiningRoom
                    : "N/A"}
                </p>
              </div>

              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Units Available :{" "}
                  {projectInfo?.projectType ? projectInfo?.projectType : "N/A"}
                </p>
              </div>
              <div className="flex mx-2 ">
                <FcInfo className=" w-8 tex-sm font-normal  mb-2 mt-3 mr-2 " />
                <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                  Projects Address :{projectInfo?.projectAddress}
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

              {/*  <div className="flex mx-2 ">
              <FcInfo  className=" w-8 tex-sm font-normal tracking-wider leading-6 mb-2 mt-3 mr-2 " />
              <p className="tex-sm font-normal tracking-wider leading-6 mb-2 mt-2  ">
                Developer: bddl Housing Ltd
              </p>
            </div> */}
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

export default InteriorProjectInfo;
