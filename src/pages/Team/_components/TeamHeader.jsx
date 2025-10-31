import React from "react";

const TeamHeader = () => {
  return (
    <div>
      <div className="text-center  border-blue-500 border-b-2  my-10">
        <h1 className="lg:text-2xl text-xl lg:py-5 font-semibold">
          Meet Our Dynamic Team
        </h1>
      </div>
      <div className=" shadow-xl block lg:flex items-center justify-center gap-10 border p-5">
        <div className="">
          <img
            src="/ceo.jpg"
            className=" rounded-full mx-auto"
            style={{ height: "200px", width: "200px" }}
            alt=""
          />
        </div>
        <div className="text-center lg:text-left">
          <h3 className=" text-xl text-blue-600  mt-2 font-semibold">
            Engr. Shanto Islam
          </h3>
          <p className="my-2 text-base text-black  font-normal">
            CEO,{" "}
            <span className="text-orange-600">
              Shanto Hobby Development Construction Ltd.
            </span>
          </p>
          <p className=" text-sm text-black  font-normal ">
            <span className=" font-bold">Contact: </span>+880177200200
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
