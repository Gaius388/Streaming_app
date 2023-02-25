import React from "react";
import { useGlobalContext } from "../context";

const PopularRelease = ({ images, title, subtitle, hub }) => {
  const { handleClick } = useGlobalContext();
  return (
    <>
      <div
        className="popular__song1"
        onClick={() => handleClick(images, title, subtitle, hub)}
      >
        <div>
          <img src={images?.coverart} alt={title} className="play__test" />
        </div>
        <p className="song__title">${title}</p>
        <p className="singer">${subtitle}</p>
      </div>
    </>
  );
};

export default PopularRelease;
