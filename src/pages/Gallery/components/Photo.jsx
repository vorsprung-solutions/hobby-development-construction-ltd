import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Photo = ({ setHoveredImage, handleImageHover, photo, hoveredImage }) => {
  return (
    <div
      className="relative group"
      onMouseEnter={() => handleImageHover(photo)}
      onMouseLeave={() => setHoveredImage(null)}
    >
      <PhotoProvider>
        <PhotoView src={photo?.imgUrl}>
          <img
            className="w-full h-[270px] rounded "
            src={photo?.imgUrl}
            alt={`photo ${photo?.index}`}
          />
        </PhotoView>
      </PhotoProvider>

      {hoveredImage === photo && (
        <div className="absolute inset-0 rounded flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100  transition-opacity"></div>
      )}
    </div>
  );
};

export default Photo;
