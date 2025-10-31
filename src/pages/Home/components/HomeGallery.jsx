import React from "react";
import useGallery from "../../Dashboard/ManageGallery/server-actions/useGallery";
import { Link } from "react-router-dom";
import PrimaryLoader from "../../../components/shared/Loader/PrimaryLoader";
import PrimaryButton from "../../../components/button/PrimaryButton";
import Photos from "../../Gallery/components/Photos";

const HomeGallery = () => {
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
      <Photos gallery={gallery?.data?.slice(0, 8)}></Photos>
      <div className="mx-auto flex justify-center">
        <Link to="gallery">
          {gallery?.data?.length > 8 && (
            <PrimaryButton value={"Show More"}></PrimaryButton>
          )}
        </Link>
      </div>
    </div>
  );
};

export default HomeGallery;
