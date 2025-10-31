import { useLoaderData, useParams } from "react-router-dom";
import useEmployee from "../server-actions/useEmployee";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import useIncome from "../server-actions/useIncome";
import ExpenseTable from "./ExpenseTable";
import IncomeExpense from "./IncomeExpense";
import useExpense from "../server-actions/useExpense";
import NetBalance from "../../ManageProjects/components/NetBalance";

const EmployeeDetails = () => {
  const { data } = useLoaderData();
  const [income, isLoading, refetch] = useIncome();
  const [expense] = useExpense();

  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }

  const employeeIncome = income?.data?.filter(
    (i) => i?.userId?._id === data?._id
  );

  const employeeExpense = expense?.data?.filter(
    (i) => i?.userId?._id === data?._id
  );

  const active = data?.status === "Active";
  console.log(employeeIncome, employeeExpense);

  return (
    <div className="mx-8 lg:mx-20 my-16">
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-16 items-center">
        <div className="lg:w-[300px] overflow-hidden group relative">
          <img
            className="w-[300px] h-[250px] rounded-lg ease-in-out duration-500 transform group-hover:scale-125"
            src={data?.imgUrl}
            alt={data?.name}
          />
          <div className="text-white absolute top-0 right-0">
            <button
              className={
                active
                  ? "bg-[green] px-2 rounded-lg py-1"
                  : "bg-red-600 px-2 rounded-lg py-1"
              }
            >
              {data?.status}
            </button>
          </div>
          <div className="text-white absolute top-0">
            <button className="bg-orange-500 px-2 rounded-lg py-1">
              {data?.priority}
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl">
            <span className=" font-bold">Name: </span>
            {data?.name}
          </h2>
          <h3 className="text-xl font-bold text-blue">
            <span className="font-bold">Designation: </span>
            {data?.designation}
          </h3>
          <p>Role: {data?.role}</p>
          <p>Phone: {data?.phone}</p>
          <p>Email: {data?.email}</p>
          <p>Blood Group: {data?.bloodType}</p>
          <p>
            Facebook Link: {data?.fbLink ? data.fbLink : "No information given"}
          </p>
        </div>
        <NetBalance
          Income={employeeIncome}
          Expense={employeeExpense}
        ></NetBalance>
      </div>

      <div>
        <IncomeExpense
          employeeIncome={employeeIncome}
          employeeExpense={employeeExpense}
        />
      </div>
    </div>
  );
};

export default EmployeeDetails;
