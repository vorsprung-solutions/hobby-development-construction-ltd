import React, { useState } from "react";
import SingleProjecct from "./components/SingleProjecct";
import ProjectHeader from "./components/ProjectHeader";
import useProject from "../Dashboard/ManageProjects/server-actions/useProject";
import PrimaryLoader from "../../components/shared/Loader/PrimaryLoader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Projects = () => {
  const [projects, isLoading, refetch] = useProject();
  // const [filterProject, setFilterProject] = useState([]);

  console.log(projects);

  const availabeProject = projects?.data?.filter(
    (project) => project?.webVisibility === true
  );
  console.log(availabeProject);
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  const pathname = window.location.pathname;
  let filterProjects;
  if (pathname === "/projects/interior") {
    filterProjects = availabeProject?.filter(
      (project) => project?.projectType === "Interior"
    );
  }
  if (pathname === "/projects/construction") {
    filterProjects = availabeProject?.filter(
      (project) => project?.projectType === "Construction"
    );
  }
  return (
    <div className="lg:mx-48 mx-5 sm:mx-auto my-2">
      <div className="text-center  border-blue-500 border-b-2  lg:my-2 my-5">
        <h1 className="lg:text-2xl text-xl lg:py-5 py-2 font-semibold">
          {filterProjects[0].projectType} Projects
        </h1>
      </div>
      {/* <div className="my-5">
        <ProjectHeader></ProjectHeader>
      </div> */}
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Ongoing</Tab>
          <Tab>Upcoming</Tab>
          <Tab>HandOvered</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:p-5 ">
            {filterProjects?.length ? (
              filterProjects?.map((project) => (
                <SingleProjecct
                  key={project._id}
                  project={project}
                ></SingleProjecct>
              ))
            ) : (
              <div className="flex justify-center items-center h-[290px] lg:w-[1000px]">
                No availabe project on this category
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:p-5">
            {filterProjects?.filter(
              (project) => project.projectStatus === "Ongoing"
            ).length ? (
              filterProjects
                ?.filter((project) => project.projectStatus === "Ongoing")

                ?.map((project) => (
                  <SingleProjecct
                    key={project._id}
                    project={project}
                  ></SingleProjecct>
                ))
            ) : (
              <div className="flex justify-center items-center h-[290px] lg:w-[1000px]">
                No availabe project on this category
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:p-5">
            {filterProjects?.filter(
              (project) => project.projectStatus === "Upcoming"
            ).length ? (
              filterProjects
                ?.filter((project) => project.projectStatus === "Upcoming")

                ?.map((project) => (
                  <SingleProjecct
                    key={project._id}
                    project={project}
                  ></SingleProjecct>
                ))
            ) : (
              <div className="flex justify-center items-center h-[290px] lg:w-[1000px]">
                No availabe project on this category
              </div>
            )}

            {}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:p-5">
            {filterProjects?.filter(
              (project) => project.projectStatus === "HandOvered"
            )?.length ? (
              filterProjects
                ?.filter((project) => project.projectStatus === "HandOvered")

                ?.map((project) => (
                  <SingleProjecct
                    key={project._id}
                    project={project}
                  ></SingleProjecct>
                ))
            ) : (
              <div className="flex justify-center items-center h-[290px] lg:w-[1000px]">
                <p className="text-lg">No availabe project on this category</p>
              </div>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Projects;
