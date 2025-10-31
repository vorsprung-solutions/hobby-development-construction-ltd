import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import useEmployee from "../../../pages/Dashboard/ManageEmployee/server-actions/useEmployee";
import useProject from "../../../pages/Dashboard/ManageProjects/server-actions/useProject";
import useBranch from "../../../pages/Dashboard/ManageOffice/server-actions/useBranch";
import PrimaryLoader from "../../../components/shared/Loader/PrimaryLoader";
// import bgimage from "../../../assets/bgimage.png";

const Counter = () => {
  const [countOn, setCountOn] = useState(false);
  const [employee, isLoading] = useEmployee();
  const [projects, ,] = useProject();
  const [branch, ,] = useBranch();

  console.log(projects);
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }

  const completedProjects = projects?.data?.filter(
    (project) => project?.projectStatus === "HandOvered"
  )?.length;
  const runningProjects = projects?.data?.filter(
    (project) => project?.projectStatus === "Ongoing"
  )?.length;
  return (
    <div
      style={{
        // backgroundImage: `url(https://ps-shdcl-bucket.s3.amazonaws.com/Images/counter.jpg)`,
        backgroundImage: `url(/counter.jpg)`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
      }}
      className=" lg:my-16 lg:py-14 mb-32  text-center mx-8 lg:mx-52 border rounded bg-cover "
    >
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        <div className="grid lg:grid-cols-4 grid-cols-1   text-white ">
          <div className="  lg:border-e-2 md:mb-0 border-b-2 py-6 lg:py-0 lg:border-b-0">
            <h2 className="lg:text-4xl font-semibold mb-1">
              {countOn && (
                <CountUp
                  start={0}
                  end={completedProjects}
                  duration={2}
                  delay={0}
                />
              )}
              
            </h2>
            <p className="capitalize">Completed Projects</p>
          </div>
          <div className=" lg:border-e-2 md:mb-0 border-b-2 py-6 lg:py-0 lg:border-b-0">
            <h2 className="lg:text-4xl font-semibold mb-1">
              {countOn && (
                <CountUp
                  start={0}
                  end={runningProjects}
                  duration={2}
                  delay={0}
                />
              )}
              
            </h2>
            <p className="capitalize">Ongoing Projects</p>
          </div>
          <div className=" border-e-0 lg:border-e-2  md:mb-0 border-b-2 py-6 lg:py-0 lg:border-b-0">
            <h2 className="lg:text-4xl font-semibold mb-1">
              {countOn && (
                <CountUp
                  start={0}
                  end={branch?.data?.length}
                  duration={2}
                  delay={0}
                />
              )}
            </h2>
            <p className="capitalize">Our Branches</p>
          </div>
          <div className="lg:py-0 py-6">
            <h2 className="lg:text-4xl font-semibold mb-1">
              {countOn && (
                <CountUp
                  start={0}
                  end={employee?.data?.length}
                  duration={2}
                  delay={0}
                />
              )}
            </h2>
            <p className="capitalize">Total Employee</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
