import React from "react";
import like_transparent from "../../../images/like__button-transparent.svg";
import more_vert from "../../../images/more_vert.svg";
import { useGlobalContext } from "../context";

function PlayList({ images, title, subtitle, hub }) {
  const { handleClick } = useGlobalContext();
  return (
    <div
      className="playlist__music-tab"
      onClick={() => handleClick(images, title, subtitle, hub)}
    >
      <div className="playlist__1">
        <img src={images.coverart} alt={title} className="playlist__img" />
        <img
          src={like_transparent}
          alt="like__button-transparent"
          className="playlist__like"
        />
      </div>
      <p className="playlist__2">
        {title} ~ {subtitle}
      </p>
      <div className="playlist__3">Single</div>
      <div className="playlist__4">3:17</div>
      <div className="playlist__5">
        <img src={more_vert} alt="more_vert" />
      </div>
    </div>
  );
}

export default PlayList;
