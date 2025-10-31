import React from "react";
import img from "../../../assets/images/ceo1.jpg";
import useEmployee from "../../Dashboard/ManageEmployee/server-actions/useEmployee";
import PrimaryLoader from "../../../components/shared/Loader/PrimaryLoader";
import { AnimationOnScroll } from "react-animation-on-scroll";
import './MeetOurTeam.css'

const MeetOurTeam = () => {
  const [employee, isLoading, refetch] = useEmployee();
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  return (
    <div className="px-8  lg:px-52 py-6 lg:py-16 bg-white">
      <div className="text-center  border-blue-500 border-b-2  my-10">
        <h1 className="lg:text-3xl text-xl py-5 font-semibold">
          Meet Our Dynamic Team
        </h1>
      </div>
      <div className=" flex items-center justify-center flex-wrap md:flex-nowrap">
        <div className=" flex-none">
          <div className="">
            <img
              src={ img }
              className=" rounded-full mx-auto"
              style={ { height: "300px", width: "300px" } }
              alt=""
            />
          </div>
          <div>
            <h3 className=" text-xl text-black text-center mt-2 font-semibold">
              Engr. Shanto Islam
            </h3>
            <p className=" text-base text-black text-center font-normal">
              CEO <br /> Shanto Hobby Development Construction Ltd.
            </p>
            <p className=" text-sm text-black text-center font-normal ">
              <span className=" font-bold">Contact: </span>+880177200200
            </p>
          </div>
        </div>
        <div className=" flex-none">
          <hr className=" border-0 border-l-2 mx-10 border-first h-0 md:h-[400px] w-[200px] md:w-0 " />
        </div>
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <div className=" grow grid grid-cols-1 md:grid-cols-3 gap-2 h-60 mt-6 md:h-96 overflow-y-auto" style={ { maxHeight: "500px" } }>
            { employee?.data?.map((e) => (
              <div key={ e._id }>
                <div>
                  <img
                    src={ e?.imgUrl }
                    className=" rounded-full mx-auto"
                    style={ { height: "150px", width: "150px" } }
                    alt=""
                  />
                </div>
                <div>
                  <h3 className=" text-lg text-black text-center mt-2 font-semibold">
                    { e?.name }
                  </h3>
                  <p className=" text-sm text-black text-center font-normal">
                    { e?.designation }, SHDCL
                  </p>
                  <p className=" text-sm text-black text-center font-normal ">
                    <span className=" font-bold">Contact: </span>
                    { e?.phone }
                  </p>
                </div>
              </div>
            )) }
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default MeetOurTeam;
