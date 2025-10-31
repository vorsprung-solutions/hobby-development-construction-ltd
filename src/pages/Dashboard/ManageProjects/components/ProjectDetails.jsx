import React from "react";
import { useLoaderData } from "react-router-dom";
import "../styles/table.css";
import useIncome from "../../ManageEmployee/server-actions/useIncome";
import IncomeExpense from "../../ManageEmployee/component/IncomeExpense";
import useExpenses from "../../ManageEmployee/server-actions/useExpense";
import ProjectIncomeExpense from "./ProjectIncomeExpense";
import NetBalance from "./NetBalance";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";

const ProjectDetails = () => {
  const { data } = useLoaderData();

  const [income, isLoading, refetch] = useIncome();
  const [expense] = useExpenses();

  const projectIncome = income?.data?.filter(
    (i) => i?.projectId?._id === data?._id
  );
  const projectExpense = expense?.data?.filter(
    (i) => i?.projectId?._id === data?._id
  );
  console.log(projectIncome, projectExpense);
  if (isLoading) {
    return <PrimaryLoader />;
  }
  return (
    <div className="mx-12 my-16">
      <h2 className="text-xl font-bold mb-4 text-center">
        {data?.projectName}
      </h2>
      <div className="flex flex-col lg:flex-row  justify-center items-start gap-5">
        <div className="lg:w-1/3 relative">
          <img
            className="rounded-lg"
            src={
              data?.imageUrl
                ? data?.imageUrl
                : "https://via.placeholder.com/300"
            }
            alt=""
          />
          <div className="absolute top-0 right-0 text-white">
            <button className="bg-blue-700 px-2 rounded-lg">
              {data?.buildingType }
            </button>
          </div>
          <div className="absolute top-0 right-24 text-white">
            <button className="bg-blue-700 px-2 rounded-lg">
              {data?.projectStatus}
            </button>
          </div>
        </div>
        <div className="">
          <table>
            <tbody>
              <tr>
                <th className="th">Client Name</th>
                <td className="td">{data?.clientName}</td>
              </tr>
              <tr>
                <th className="th">Phone</th>
                <td className="td">{data?.clientPhoneNo}</td>
              </tr>
              <tr>
                <th className="th">Apartment Size</th>
                <td className="td">{data?.aptSize}</td>
              </tr>
              <tr>
                <th className="th">Available Unit</th>
                <td className="td">{data?.availableUnit}</td>
              </tr>
              <tr>
                <th className="th">Land Size</th>
                <td className="td">{data?.landSize}</td>
              </tr>
              <tr>
                <th className="th">Price</th>
                <td className="td">{data?.price}</td>
              </tr>
              <tr>
                <th className="th">Project Address</th>
                <td className="td">{data?.projectAddress}</td>
              </tr>
              <tr>
                <th className="th">Project Type</th>
                <td className="td">{data?.projectType}</td>
              </tr>
              <tr>
                <th className="th">Storied</th>
                <td className="td">{data?.storied}</td>
              </tr>
              <tr>
                <th className="th">Total Unit</th>
                <td className="td">{data?.totalUnit}</td>
              </tr>
              <tr>
                <th className="th">Unit Per Floor</th>
                <td className="td">{data?.unitPerFloor}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <NetBalance
          Income={projectIncome}
          Expense={projectExpense}
        ></NetBalance>
      </div>

      <div>
        <ProjectIncomeExpense
          projectIncome={projectIncome}
          projectExpense={projectExpense}
        />
      </div>

      {/* <div>
                <h2 className='text-xl mb-12'><span className='font-bold text-blue-800'>{data?.projectName}'s</span> Expenses</h2>
                <ProjectExpense tag="project" name={data?._id} />

            </div> */}
    </div>
  );
};

export default ProjectDetails;
