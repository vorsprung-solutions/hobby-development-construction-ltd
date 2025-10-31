import React from "react";
import { base_url } from "../../config";
import GalleryHeader from "./components/GalleryHeader";
import Photos from "./components/Photos";
import useGallery from "../Dashboard/ManageGallery/server-actions/useGallery";
import PrimaryLoader from "../../components/shared/Loader/PrimaryLoader";
import PrimaryButton from "../../components/button/PrimaryButton";

const Gallery = () => {
  const [gallery, isLoading, refetch] = useGallery();
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }

  return (
    <div className="lg:mx-48 mx-5 my-5">
      <div className="text-center  border-blue-500 border-b-2  my-10">
        <h1 className="lg:text-3xl text-xl py-5 font-semibold">Gallery</h1>
      </div>
      {/* <GalleryHeader gallery={gallery}></GalleryHeader> */}
      <Photos gallery={gallery?.data}></Photos>
      {/* <div className="mx-auto flex justify-center">
        <PrimaryButton value={"Show More"}></PrimaryButton>
      </div> */}
    </div>
  );
};

export default Gallery;
