import React from "react";
import PlayList from "./PlayList";

const PlayLists = ({ music }) => {
    const filtered = music.filter((arr) => arr.images !== undefined)
    return <div className="playlist__music">
        {filtered.map((play) => {
          return <PlayList key={play.key} {...play}></PlayList>;
      })}
  </div>;
};

export default PlayLists;
