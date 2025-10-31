import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
const SinglePhoto = ({
  handleImageHover,
  setHoveredImage,
  photo,
  hoveredImage,
  handleButtonClick,
  showFullScreen,
  closeFullScreen,
}) => {
  return (
    <div
      className="relative group"
      onMouseEnter={() => handleImageHover(photo)}
      onMouseLeave={() => setHoveredImage(null)}
    >
      <img
        className="w-full h-[200px] rounded"
        src={photo?.imgUrl}
        alt={`photo ${photo.index}`}
      />
      {hoveredImage === photo && (
        <div className="absolute inset-0 rounded flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100  transition-opacity">
          <p className="text-white font-medium m-2">{photo?.title}</p>
          <Link
            to={`gallery/${photo._id}`}
            // onClick={()=>handleButtonClick()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            View
          </Link>
        </div>
      )}
      {/* {showFullScreen && (
        <PhotoProvider>
          <PhotoView src={hoveredImage?.imgUrl}>
            <img src={hoveredImage?.imgUrl} alt="" />
          </PhotoView>
        </PhotoProvider>
      )} */}
    </div>
  );
};

export default SinglePhoto;
