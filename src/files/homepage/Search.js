import React from "react";
import { useGlobalContext } from "./context";
const Search = () => {
  const { search} = useGlobalContext();
  return (
    <>
      {search.map((data, index) => {
        return (
          <a
            href={data.track.url}
            key={index}
            className="search_link"
            target="_blank"
            rel="noreferrer"
          >
            <div class="search__result1">
              <img
                src={data.track.images.coverart}
                alt={data.track.title}
                className="search_img"
              />
              <p class="search__title-name">${data.track.title}</p>
              <p class="search__title-album">${data.track.subtitle}</p>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default Search;
