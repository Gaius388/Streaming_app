import React from "react";
import { useGlobalContext } from "../context";

function NewRelease({ images, title, subtitle,hub }) {
  const { handleClick } = useGlobalContext();
  return (
    <div
      className="new__song1"
      onClick={() => handleClick(images, title, subtitle, hub)}
    >
      <div>
        <img src={images?.coverart} alt={title} className="play__test" />
      </div>
      <p className="song__title">${title}</p>
      <p className="singer">${subtitle}</p>
    </div>
  );
}

export default NewRelease;
