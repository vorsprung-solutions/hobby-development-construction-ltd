import React, { useState } from "react";
import SinglePhoto from "./SinglePhoto";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Photo from "./Photo";

const Photos = ({ gallery }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [showFullScreen, setShowFullScreen] = useState(false);

  const handleImageHover = (image) => {
    setHoveredImage(image);
  };

  const handleButtonClick = () => {
    setShowFullScreen(true);
  };

  const closeFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {gallery?.map((photo) => (
          <Photo
            photo={photo}
            hoveredImage={hoveredImage}
            key={photo._id}
            setHoveredImage={setHoveredImage}
            handleImageHover={handleImageHover}
          ></Photo>
          // <SinglePhoto
          //   key={photo._id}
          //   photo={photo}
          //   handleImageHover={handleImageHover}
          //   handleButtonClick={handleButtonClick}
          //   closeFullScreen={closeFullScreen}
          //   setShowFullScreen={setShowFullScreen}
          //   setHoveredImage={setHoveredImage}
          //   hoveredImage={hoveredImage}
          //   showFullScreen={showFullScreen}
          // ></SinglePhoto>
        ))}
      </div>
    </div>
  );
};

export default Photos;
