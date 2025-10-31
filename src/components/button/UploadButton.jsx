import { BiPlusMedical } from "react-icons/bi";
import { GrFormAdd } from "react-icons/gr";
import { Link } from "react-router-dom";

const UploadButton = ({ value, linkTo }) => {
  return (
    <Link to={linkTo}>
      <button
        className="flex items-center   text-[white] font bold truncate sticky top-0 bg-[blue] py-3 px-4 rounded-full  hover:truncate-none w-12 hover:w-44"
        style={{
          transition: "all 0.7s ease-out",
          position: "sticky",
          top: "20px",
        }}
      >
        <BiPlusMedical className="block" />
        <p className=" md:inline absolute left-12">{value}</p>
      </button>
      {/* <button className="my-6 relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 text-white py-2 rounded-full flex items-center px-4 gap-3 transition-transform duration-3000 hover:transform hover:w-44 group">
        <GrFormAdd className="text-2xl text-white" />
        <span className="opacity-0 absolute left-10 group-hover:opacity-100">
          {value}
        </span>
      </button> */}
    </Link>
  );
};

export default UploadButton;
