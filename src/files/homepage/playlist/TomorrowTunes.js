import React from "react";
import PlayLists from "./PlayLists";
import shoe_and_radio from "../../../images/shoe_and_radio.svg";
import play_icon from "../../../images/play-icon.svg";
import music_icon from "../../../images/music-icon.svg";
import like_button from "../../../images/like__button.svg";
import { useGlobalContext } from "../context";

function TomorrowTunes() {
  const {music} = useGlobalContext()
  return (
    <>
      <div className="tomorrow-tunes__section">
        <div className="tomorrow-tunes__text">
          <img
            src={shoe_and_radio}
            alt="shoe_and_radio"
            className="shoe_and_radio"
          />
          <div className="tunes__text">
            <h3>Tomorrow's tunes</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              autem dolorum expedita quam deserunt. Necessitatibus quas totam
              nulla
            </p>
            <small className="tunes__count">15 songs ~ 1hr+</small>
            <div className="active__btn">
              <button className="btn__play">
                <img src={play_icon} alt="play-icon" className="play-icon" />
                Play all
              </button>
              <button className="btn__collection">
                <img src={music_icon} alt="music-icon" className="music-icon" />
                Add to collection
              </button>
              <button className="btn__like">
                <img src={like_button} alt="like__button" />
              </button>
            </div>
          </div>
        </div>
        <PlayLists music={music} />
      </div>
    </>
  );
}

export default TomorrowTunes;
