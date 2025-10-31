import { Link } from "react-router-dom";
import ActiveLink from "../../../utils/ActiveLink";
import { FaBars, FaUsers } from "react-icons/fa";
import { PiBuildingsLight } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiStairsGoal } from "react-icons/gi";


const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
      
      </div>
      <div className="drawer-side">
        {/* <label htmlFor="my-drawer-2" className="drawer-overlay">
          {" "}
          <FaBars />
        </label> */}
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
          <div className="w-full">
            <Link to="/">
              {" "}
              <img
                className="w-2/3 mx-auto my-4 "
                src="https://i.ibb.co/vvNLbDw/facebook-1679911914489-7046061262592027442-removebg-preview-1.png"
                alt=""
              />
            </Link>
          </div>
          <hr className="border-b-2 mb-8 border-blue-800 rounded-lg" />
          {/* Sidebar content here */}
          <li>
            <ActiveLink exact to="/dashboard/">
              Dashboard
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="manage-projects" className="flex"><div className="flex gap-2 justify-center items-center"><PiBuildingsLight className="text-xl" /> Manage Projects</div></ActiveLink>
          </li>
          <li>
            <ActiveLink to="manage-employee" className="flex"><div className="flex gap-2 justify-center items-center"><FaUsers className="text-xl" /> Manage Employee</div></ActiveLink>
          </li>
          <li>
            <ActiveLink to="manage-gallery" className="flex"><div className="flex gap-2 justify-center items-center"><TfiGallery className="text-xl" /> Manage Gallery</div></ActiveLink>
          </li>
          <li>
            <ActiveLink to="manage-branch" className="flex"><div className="flex gap-2 justify-center items-center"><BsPersonWorkspace className="text-xl" /> Manage Branch</div></ActiveLink>
          </li>
          <li>
            <ActiveLink to="manage-jobs" className="flex"><div className="flex gap-2 justify-center items-center"><GiStairsGoal className="text-xl" /> Manage Jobs</div></ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
