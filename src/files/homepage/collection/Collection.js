import React from "react";
import love_icon from "../../../images/love-icon.svg";
import { useGlobalContext } from "../context";

const Collection = ({ music }) => {
  const { handleClick } = useGlobalContext();
  const filtered = music.filter((arr) => arr.images !== undefined);
  const collection = filtered.slice(8, 15);
  return (
    <>
      {collection.map((play) => {
        console.log(play)
        const { images, title, subtitle,key,hub } = play;
        return (
          <div className="collection__main" key={key}>
            <img
              src={images.coverart}
              alt="collection"
              className="collection-pic"
            />
            <div className="collection__text">
              <div className="text">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <h4>2.4m likes</h4>
              </div>
              <img
                src={love_icon}
                alt="love-icon"
                className="love-icon"
                onClick={() => handleClick(images, title, subtitle, hub)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Collection;
