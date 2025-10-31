import React from "react";
import useProject from "../../../Dashboard/ManageProjects/server-actions/useProject";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import SingleProjecct from "../../components/SingleProjecct";

const HomeProjects = () => {
  const [projects, isLoading, refetch] = useProject();
  // const [filterProject, setFilterProject] = useState([]);
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  return (
    <div className="lg:mx-48 mx-5">
      <div className="text-center  border-blue-500 border-b-2  my-10">
        <h1 className="lg:text-3xl text-xl py-5 font-semibold">
          Recent Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:p-5">
        {projects?.data?.length > 6
          ? projects?.data
              ?.filter((project) => project?.webVisibility === true)
              ?.slice(0, 6)
              ?.map((project) => (
                <SingleProjecct
                  key={project._id}
                  project={project}
                ></SingleProjecct>
              ))
          : projects?.data?.map((project) => (
              <SingleProjecct
                key={project._id}
                project={project}
              ></SingleProjecct>
            ))}
      </div>
    </div>
  );
};

export default HomeProjects;
