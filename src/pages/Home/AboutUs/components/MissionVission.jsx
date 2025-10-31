import React from 'react';
import img1 from "../../../../assets/images/Mission & Vision/mission.png";
import img2 from "../../../../assets/images/Mission & Vision/vision.png";
import img3 from "../../../../assets/images/Mission & Vision/values.png";
const MissionVission = () => {
    return (
      <div>
        <div className="flex items-center justify-around lg:my-16 flex-wrap px-8  lg:px-52">
          {/* <div className=" lg:flex flex-col justify-center items-center">
            <img src={img2} alt="" className=" lg:h-60" />
            <h2 className=" text-2xl font-bold text-[#00895F]">Our Mission</h2>
            <hr className=" w-1/3 h-1 my-4 border-0 bg-[#00895F]" />
            <p className=" w-80 " style={{ textAlign: "justify" }}>
              To deliver innovative, eco-friendly construction solutions that
              exceed expectations, enhance communities, and inspire sustainable
              living.
            </p>
          </div> */}
          <div className=" flex flex-col justify-center items-center">
            <img src={img2} alt="" className=" lg:h-60" />
            <h2 className=" text-2xl font-bold text-[#00895F]">Our Mission</h2>
            <hr className=" w-1/3 h-1 my-4 border-0 bg-[#00895F]" />
            <p className=" w-80 " style={{ textAlign: "justify" }}>
              To deliver innovative, eco-friendly construction solutions that
              exceed expectations, enhance communities, and inspire sustainable
              living.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <img src={img1} alt="" className=" lg:h-48" />
            <h2 className=" text-2xl font-bold text-[#C3391F]">Our Vision</h2>
            <hr className=" w-1/3 h-1 my-4 border-0 bg-[#C3391F]" />
            <p className=" w-80 " style={{ textAlign: "justify" }}>
              Building Tomorrow, Today – Creating Sustainable Spaces for a
              Better World.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <img src={img3} alt="" className=" lg:h-60" />
            <h2 className=" text-2xl font-bold text-[#0792B7]">Our Values</h2>
            <hr className=" w-1/3 h-1 my-4 border-0 bg-[#0792B7]" />
            <p className=" w-80 " style={{ textAlign: "justify" }}>
              {" "}
              Include integrity, safety, quality, client focus, innovation,
              teamwork, community involvement, environmental responsibility,
              professionalism, and a commitment to continuous improvement.
            </p>
          </div>
        </div>{" "}
      </div>
    );
};

export default MissionVission;