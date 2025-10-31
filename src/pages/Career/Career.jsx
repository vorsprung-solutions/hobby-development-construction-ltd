import React, { useState } from "react";
import { Link } from "react-router-dom";
// import JobList from "./JobList";
import useJobs from "../Dashboard/ManageJob/server-actions/useJobs";
import PrimaryLoader from "../../components/shared/Loader/PrimaryLoader";
import "./Career.css";
import { Helmet } from "react-helmet-async";

const Career = () => {
  //define useState for jobList
  const [jobs, isLoading, refetch] = useJobs();
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }

  const currentDate = new Date();
  const activeJobs = jobs?.data?.filter(
    (job) => job?.deadline > currentDate.toISOString().split("T")[0]
  );
  console.log(activeJobs);
  return (
    <>
      <div
        id="careers-sec"
        className=" h-28 md:h-56 flex items-center justify-center"
      >
        <Helmet>
          <meta
            name="description"
            content="Explore rewarding career opportunities in the construction industry. Join our team and be part of a dynamic workforce committed to building a better future. Discover the path to a successful and fulfilling career in construction with us."
          />
        </Helmet>
        <h1 className="text-4xl font-bold text-first">Careers</h1>
      </div>
      {activeJobs?.length &&
      activeJobs?.find((job) => job?.status === "Active") ? (
        <div className="lg:mx-48 mx-5 my-3">
          <h1 className="text-xl font-medium text-[blue] my-3 m-1">
            Job Opportunities
          </h1>{" "}
          <br />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Job Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Job Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Vacancy
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Deadline
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {activeJobs
                  ?.filter((job) => job?.status === "Active")
                  .map((job, i) => (
                    <JobList key={i} job={job}></JobList>
                  ))} */}
              </tbody>
            </table>
          </div>
          <br />
          <h1 className="text-xl font-medium text-[blue] my-5 m-1">
            Application Advice
          </h1>{" "}
          <div className="mx-10 mb-5 text-justify">
            <ul className="list-disc">
              <li className="font-light m-2">
                All openings will be available under Vacant Positions. Review
                the openings and apply to the positions best suited to your
                interests and skills.
              </li>
              <li className="font-light m-2">
                To understand the specific requirements for any position, please
                review the Job Description by clicking on the Job Link.
              </li>
              <li className="font-light m-2">
                Before starting your application, have your resume/ CV ready for
                uploading. Step-by-Step Instructions for application are
                available on each page.
              </li>

              <li className="font-light m-2">
                Your candidate profile is our first interaction with you. Take
                your time in completing your application and proofread before
                submission
              </li>
              <li className="font-light m-2">
                Make sure you fill in all details of personal, education,
                career, training, extra-curricular activities and any other
                skills that you feel would enhance your chances to be a part of
                our family. Once you complete filling in all the details, you
                will be able to review your information before submission.
              </li>
              <li className="font-light m-2">
                Once you submit your application, it will be reviewed and
                assessed. Please note that only shortlisted candidates will be
                contacted for interviews.
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-72">
          <p className="text-lg text-primary">No Available Job Opportunities</p>
        </div>
      )}
    </>
  );
};

export default Career;
