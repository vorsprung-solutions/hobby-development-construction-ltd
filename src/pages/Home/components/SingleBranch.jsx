import React from "react";

const SingleBranch = () => {
  return (
    <div className="card card-compact  bg-base-100 shadow-2xl ">
      <figure>
        <img className="w-full h-[300px]" src={br?.photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>{br?.address}</p>
      </div>
    </div>
  );
};

export default SingleBranch;
