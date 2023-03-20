import React from "react";
import "./dogImage.css";

const DogImage = (props) => {
  return (
    <div className="dog_image_container">
      <img src={props.imgUrl} />
    </div>
  );
};

export default DogImage;
