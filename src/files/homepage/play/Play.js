import React, { useState, useEffect } from "react";
import { TbArrowsShuffle, TbRepeat } from "react-icons/tb";
import { FaBackward, FaForward, FaVolumeUp } from "react-icons/fa";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { useGlobalContext } from "../context";

function Play() {
  const [volume, setVolume] = useState(100);
  const {
    playing,
    songImage,
    songTitle,
    artiste,
    duration,
    setDuration,
    nextTrack,
    previousTrack,
    playPauseControl,
    play,
    songCall,
    currentTime,
    setCurrentTime,
    shuffleControl,
    replayControl,
  } = useGlobalContext();

  useEffect(() => {
    if (playing) {
      songCall.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (play) {
      setInterval(() => {
        const currentTime = Math.floor(songCall.current.currentTime);
        const duration = Math.floor(songCall.current.duration);
        setCurrentTime(currentTime);
        setDuration(duration);
      }, [100]);
    }
    if (currentTime === duration) {
      setCurrentTime(0);
      setDuration(0);
    }
  }, [playing, play]);
  return (
    <>
      <div className="play__section">
        <div className="play__section-img">
          <img src={songImage} alt={songTitle} />
          <div>
            <h5>{songTitle}</h5>
            <p>{artiste}</p>
          </div>
        </div>
        <div className="play__section-active">
          <div className="play__section-active1">
            <TbArrowsShuffle
              className="controls res"
              onClick={shuffleControl}
            />
            <FaBackward className="controls res" onClick={previousTrack} />
            <BsFillPlayCircleFill
              className={` ${
                play ? "hidden" : "controls yellow__active play_btn"
              }`}
              onClick={() => playPauseControl()}
            />
            <BsFillPauseCircleFill
              className={`${
                play ? "controls yellow__active play_btn" : "hidden"
              }`}
              onClick={() => playPauseControl()}
            />
            <FaForward className="controls" onClick={nextTrack} />
            <TbRepeat className="controls res" onClick={replayControl}/>
          </div>
          <input
            type="range"
            min="1"
            max={duration}
            value={currentTime}
            step="1"
            className="play__section-progress res"
          />
        </div>
        <div className="play__section-volume res">
          <FaVolumeUp />
          <input
            type="range"
            min="1"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="volume__progress"
          />
        </div>
      </div>
    </>
  );
}

export default Play;
