import { PiUsersThreeFill } from "react-icons/pi";
import { LuBuilding2 } from "react-icons/lu";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { BsFillBuildingFill, BsFillBuildingsFill } from "react-icons/bs";
import useEmployee from "../ManageEmployee/server-actions/useEmployee";
import useProject from "../ManageProjects/server-actions/useProject";
import useBranch from "../ManageOffice/server-actions/useBranch";
import LineChartComponent from "./LineChartComponent";
import PrimaryLoader from "../../../components/shared/Loader/PrimaryLoader";
import { FcHome } from "react-icons/fc";
import { ImOffice } from "react-icons/im";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";
import useIncome from "../ManageEmployee/server-actions/useIncome";
import useExpense from "../ManageEmployee/server-actions/useExpense";

const DashboardHome = () => {
  const [employee, isLoading] = useEmployee();
  const [projects, ,] = useProject();
  const [branch, ,] = useBranch();
  const [income] = useIncome();
  const [expense] = useExpense();
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }

  const interiorProject = projects?.data?.filter(
    (project) => project.projectType === "Interior"
  )?.length;

  return (
    <div className="my-12 px-10">
      <div>
        <div className="stat border-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 ">
          <div className="stat shadow-2xl rounded-lg hover:bg-blue-200 hover:scale-110 hover:transition-transform">
            <div className="stat-figure text-primary">
              <ImOffice className="text-2xl" />
            </div>
            <div className="stat-title">Total Branches</div>
            <div className="stat-value">{branch?.data?.length}</div>
            {/* <div className="stat-desc">21% more than last month</div> */}
          </div>
          <div className="stat shadow-2xl hover:bg-blue-200 hover:scale-110 hover:transition-transform rounded-lg">
            <div className="stat-figure text-primary">
              <PiUsersThreeFill className="text-2xl" />
            </div>
            <div className="stat-title">Total Employee</div>
            <div className="stat-value">{employee?.data?.length}</div>
            {/* <div className="stat-desc">00% more than last month</div> */}
          </div>

          <div className="stat shadow-2xl rounded-lg hover:bg-blue-200 hover:scale-110 hover:transition-transform">
            <div className="stat-figure text-primary">
              <FcHome className="text-2xl" />
            </div>
            <div className="stat-title">Interior Projects</div>
            <div className="stat-value">{interiorProject}</div>
            {/* <div className="stat-desc">
              <span>0%</span> more than last month
            </div> */}
          </div>

          <div className="stat shadow-2xl rounded-lg hover:bg-blue-200 hover:scale-110 hover:transition-transform">
            <div className="stat-figure text-primary">
              <BsFillBuildingsFill className="text-2xl" />
            </div>
            <div className="stat-title">Construction Projects</div>
            <div className="stat-value">
              {projects?.data?.length - interiorProject}
            </div>
            {/* <div className="stat-desc">21% more than last month</div> */}
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="mx-5 text-2xl text-blue-600 font-bold py-5 text-center">
          {" "}
          Income Expense Statistics
        </h1>
        <BarChartComponent></BarChartComponent>
      </div>
      {/* <div className="my-20 flex flex-col lg:flex-row items-center justify-between w-full "></div> */}
      <h1 className="mx-5 text-2xl text-blue-600 font-bold py-5 text-center">
        Income & Expense Summary
      </h1>
      <div className=" flex flex-col lg:flex-row items-center justify-between  ">
        {/* <div className="">
         <h1 className="mx-5 text-2xl text-blue-600 font-bold py-5 text-center">
          {" "}
          Income Expense Statistics
        </h1>
          <LineChartComponent
            branch={branch?.data?.length}
            employee={employee?.data?.length}
            interior={interiorProject}
            construction={projects?.data?.length}
          ></LineChartComponent>
        </div> */}

        <PieChartComponent
          income={income}
          expense={expense}
        ></PieChartComponent>
      </div>
    </div>
  );
};

export default DashboardHome;
