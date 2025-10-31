import React from "react";
import Gallery from "../../Gallery/Gallery";
import GalleryTable from "./components/GalleryTable";
import { Link } from "react-router-dom";
import UploadButton from "../../../components/button/UploadButton";

const ManageGallery = () => {
  return (
    <div className="mx-10 py-5">
      <div className="flex justify-between items-center mx-5 mb-5">
        <h1 className="lg:text-2xl text-blue-800 text-center ">
          Manage Gallery
        </h1>
        {/* <Link to='/dashboard/upload-photo' className="bg-blue-800 p-3 rounded-xl text-white">Upload New Photo</Link> */}
        <UploadButton 
          value={"Upload a photo"}
          linkTo={"/dashboard/upload-photo"}
        ></UploadButton>
      </div>
      {/* <Gallery></Gallery> */}
      <GalleryTable></GalleryTable>
    </div>
  );
};

export default ManageGallery;
