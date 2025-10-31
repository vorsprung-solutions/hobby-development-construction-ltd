import React, { useEffect, useState } from "react";
import Drawer from "../../features/dashboard/customDashboardComponents/Drawer";
import { Outlet } from "react-router-dom";
import { PiBuildingsLight } from "react-icons/pi";
import { FaUserCog, FaUsers } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiStairsGoal } from "react-icons/gi";
import { MdQueryStats } from "react-icons/md";
import DrawerV2 from "../../features/dashboard/customDashboardComponents/DrawerV2";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import Swal from "sweetalert2";
import TopRightDrawerComponent from "../../features/dashboard/customDashboardComponents/TopRightDrawerComponent";
import { LuLayoutDashboard } from "react-icons/lu";

const DashboardCustomLayout = () => {
  // define the active state for active link with default value, like in this case it is Dashboard
  const [active, setActive] = useState("Dashboard");

  // define the routes of your dashboard with appropriate path & path name should not start with '/', by default it will be added.
  const routes = [
    {
      path: "dashboard",
      title: "Dashboard",
      icon: <LuLayoutDashboard className=" w-6 h-6" />,
    },
    {
      path: "dashboard/manage-projects",
      title: "Manage Projects",
      icon: <PiBuildingsLight className=" w-6 h-6" />,
    },
    {
      path: "dashboard/manage-employee",
      title: "Manage Employee",
      icon: <FaUsers className=" w-6 h-6" />,
    },
    {
      path: "dashboard/manage-gallery",
      title: "Manage Gallery",
      icon: <TfiGallery className=" w-6 h-6" />,
    },
    {
      path: "dashboard/manage-branch",
      title: "Manage Branch",
      icon: <BsPersonWorkspace className=" w-6 h-6" />,
    },
    {
      path: "dashboard/manage-jobs",
      title: "Manage Jobs",
      icon: <GiStairsGoal className=" w-6 h-6" />,
    },
    {
      path: "dashboard/client-query",
      title: "Client Query",
      icon: <MdQueryStats className=" w-6 h-6" />,
    },
    {
      path: "dashboard/manage-user",
      title: "User Administration",
      icon: <FaUserCog  className=" w-6 h-6" />
    }
  ];
  const topRoutes = [
    // {
    //   name: 'Profile',
    //   href: '/dashboard/profile',
    //   icon: <CgProfile color='gray' />,
    // },
    // {
    //   name: 'Change Password',
    //   href: '/dashboard/profile/change-password',
    //   icon: <RiLockPasswordLine color='gray' />,
    // },
  ]

  const handleLogout = () => {
    Swal.fire({
      title: "Are you want logout?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("accessToken_SHDCL");
        localStorage.removeItem("SHDCL_User");
        location.reload();
      }
    });

    // navigate("/", { replace: true });
  };
  return (
    <div className=" block md:flex">
      <div className=" w-full md:w-72 flex-none">
        {/* Drawer content or sidebar for medium & small screen */ }
        <Drawer
          routes={ routes }
          active={ active }
          setActive={ setActive }
          // Send the image source for the logo
          src="https://i.ibb.co/vvNLbDw/facebook-1679911914489-7046061262592027442-removebg-preview-1.png"
        />
      </div>
      <div className="grow min-h-screen relative">
        <div className=" flex justify-end fixed bg-white drop-shadow w-full top-0 right-0 py-4 pe-4 z-40">
          <TopRightDrawerComponent
            topRoutes={ topRoutes }
            handleLogout={ handleLogout }
          />
        </div>
        <div className=" mt-10 md:mt-28">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomLayout;
