import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Element } from "react-scroll";
import { CiLocationOn } from "react-icons/ci";
import useBranch from "../../Dashboard/ManageOffice/server-actions/useBranch";
import { BsTelephone } from "react-icons/bs";
import PrimaryLoader from "../../../components/shared/Loader/PrimaryLoader";

const Branch = () => {
  const [branch, isLoading, refetch] = useBranch();
  const [isAnimated, setIsAnimated] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoading && isAnimated) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.9 } });
    }
  }, [isLoading, isAnimated]);

  return (
    <Element name="branchElement">
      <motion.div
        initial={ { opacity: 0, y: 20 } }
        animate={ controls }
        className="my-12 px-5 lg:px-48"
      >
        <motion.div
          className="text-center  border-blue-500 border-b-2 my-10"
          initial={ { opacity: 0 } }
          animate={ { opacity: 1 } }
        >
          <h1 className="lg:text-3xl text-xl py-5 font-semibold">
            Our Offices
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center"
          initial={ { opacity: 0 } }
          animate={ { opacity: 1 } }
        >
          <div className="flex flex-col justify-center font-light text-center rounded items-center">
            <img
              src="https://i.ibb.co/4Z5xv15/image-removebg-preview.png"
              alt=""
              width={ 200 }
            />
            <p className="text-xl font-normal text-blue-500 ">Head Office</p>
            <p className="font-light flex flex-col items-center">
              <CiLocationOn className="text-5xl font-bold my-2" /> House No:4,
              Road No:3/A, Sector 15, Block E, Uttara, Dhaka 1230
            </p>
          </div>

          <div style={ { maxHeight: "600px" } } className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 rounded px-2 overflow-y-auto">
            { branch?.data
              ?.filter((b) => b.branchType === "Corporate-Office")
              .map((b) => (
                <motion.div
                  key={ b?._id }
                  className="flex flex-col justify-start  font-light bg-blue-200 p-2 rounded border"
                  initial={ { opacity: 0 } }
                  animate={ { opacity: 1 } }
                >
                  <p className="font-light flex items-center gap-2 ">
                    <CiLocationOn className="text-3xl font-bold my-2 " />{ " " }
                    { b?.address }
                  </p>
                </motion.div>
              )) }
          </div>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Branch;
