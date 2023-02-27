import React from "react";
import Collection from "./Collection";
import { useGlobalContext } from "../context";
function Collections() {
  const { music } = useGlobalContext();

  return (
    <>
      <div className="collections__section">
        <div className="collections__section-text">
          <div className="collection__top-text">
            <span className="my__collection">My Collection</span>
            <span className="my__likes">Likes</span>
          </div>
          <div className="collections__tab">
            <Collection music={music} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Collections;
