import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router";

const PhotoDetails = () => {
  const photoInfo = useLoaderData();
  console.log(photoInfo);
  
  return (
    <div className="lg:mx-52 mx-auto p-5">
      <div className="md:flex lg:flex-row-reverse flex-col-reverse justify-between items-center">
        {" "}
        <PhotoProvider>
          <PhotoView src={photoInfo?.data?.imgUrl}>
            <img src={photoInfo?.data?.imgUrl} alt="" className="" />
          </PhotoView>
        </PhotoProvider>
        {/* <div className=" mx-2">
          <p className="text-3xl my-3 font-light">Photo Information</p>
          <hr />{" "}
          <h1 className="text-xl font-medium">{photoInfo?.data?.title}</h1>
          <p>{photoInfo?.data?.description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default PhotoDetails;
