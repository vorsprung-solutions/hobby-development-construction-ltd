import React from "react";

const CeoSpeech = () => {
  return (
    <div className="mx-10 lg:mx-52 flex flex-col lg:flex-row justify-between items-center gap-5">
      <img src="/ceo.jpg" alt="" className="p-5  w-[300px] lg:w-[400px]" />
      <div className="">
        <h2 className=" text-2xl font-bold text-first">Message from CEO</h2>
        <hr className=" w-1/3 h-1 my-4 border-0 bg-first" />
        <p className="text-justify">
          Dear Visitors, <br />
          Welcome to SHANTO HOBBY DEVELOPEMENT & CONSTRUCTION LTD's digital
          home. As CEO, I'm thrilled to have you here. Our consultancy firm
          specializes in construction solutions that redefine excellence. Our
          experienced team is dedicated to delivering the highest quality
          results, on time and within budget. Through this website, you'll
          discover our expertise, services, and commitment to sustainable
          practices. We look forward to collaborating with you and transforming
          your construction visions into reality. Thank you for choosing SHANTO
          HOBBY DEVELOPEMENT & CONSTRUCTION for your construction needs.
        </p>
        <br />
        <p>Engr. Shanto Islam</p>
        <p>CEO, SHANTO HOBBY DEVELOPEMENT & CONSTRUCTION LTD</p>
      </div>
    </div>
  );
};

export default CeoSpeech;
