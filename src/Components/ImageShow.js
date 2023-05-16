import React from "react";

const ImageShow = ({ image }) => {
  if (!image || !image.id) {
    // Handle the case where the image is undefined or does not have an id
    return null;
  }

  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description}></img>
    </div>
  );
};

export default ImageShow;
