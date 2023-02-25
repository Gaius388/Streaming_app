import React from 'react'
import PopularRelease from './PopularRelease';


function PopularReleases({ music }) {
  const filtered = music.filter((arr) => arr.images !== undefined)
  return (
    <div className="popular">
      <h4>Popular in your area</h4>
      <div className="popular__song">
        {filtered.map((play,index) => {
          return <PopularRelease key={play.key} {...play}></PopularRelease>
        })}
      </div>
    </div>
  );
}

export default PopularReleases