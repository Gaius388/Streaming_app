import React from "react";
import NewRelease from "./NewRelease";

const NewReleases = ({ music }) => {
  const filtered = music.filter((arr) => arr.images !== undefined);
  return (
    <>
      <div className="releases">
        <h4>New releases</h4>
        <div className="new__song">
          {filtered.map((play) => {
            return <NewRelease key={music.key} {...play} ></NewRelease>;
          })}
        </div>
      </div>
    </>
  );
};

export default NewReleases;
