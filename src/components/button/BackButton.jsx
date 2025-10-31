import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const BackButton = ({value, linkTo}) => {
    return (
      <Link to={linkTo}>
        <button className="my-6 bg-gradient-to-r from-blue-800 to-blue-400 text-white py-2 rounded-lg flex justify-center items-center gap-2 px-4" ><BiArrowBack className="text-2xl "/> {value}</button>
      </Link>
    );
  };
  
  export default BackButton;
  