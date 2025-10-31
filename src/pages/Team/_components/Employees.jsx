import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import { motion } from "framer-motion";
import useEmployee from "../../Dashboard/ManageEmployee/server-actions/useEmployee";
import PrimaryLoader from "../../../components/shared/Loader/PrimaryLoader";
const Employees = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.7, duration: 1.5 } },
  };
  const [employee, isLoading, refetch] = useEmployee();
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {employee?.data?.map((member, index) => (
            <Employee key={index} index={index} member={member}></Employee>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Employees;
