import React from "react";
import Employee from "./_components/Employees";
import Employees from "./_components/Employees";
import TeamHeader from "./_components/TeamHeader";

const Team = () => {
  return (
    <div className="mx-10 lg:mx-52">
      <TeamHeader></TeamHeader>
      <Employees></Employees>
    </div>
  );
};

export default Team;
