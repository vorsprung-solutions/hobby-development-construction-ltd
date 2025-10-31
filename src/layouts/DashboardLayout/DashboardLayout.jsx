import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Sidebar from "../../features/dashboard/components/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Toaster></Toaster>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col lg:p-5 rounded-smbg-gray-50">
          <Outlet></Outlet>
        </div>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default DashboardLayout;
