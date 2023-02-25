import React from "react";
import "./DisplayPage.css";
import man_sing from "../../../images/man-sing.svg";
import goldenage from "../../../images/goldenage.svg";
import regaee from "../../../images/regaee.svg";
import tomorrowTune from "../../../images/tomorrowTune.svg";
import ellipse_1 from "../../../images/Ellipse 2.svg";
import ellipse_2 from "../../../images/Ellipse 3.svg";
import ellipse_3 from "../../../images/Ellipse 4.svg";
import ellipse_4 from "../../../images/Ellipse 5.svg";
import ellipse_5 from "../../../images/Ellipse 6.svg";
import man_love from "../../../images/r_and_b.svg";
import NewReleases from "./NewReleases";
import PopularReleases from "./PopularReleases";

import { useGlobalContext } from "../context";
import TomorrowTunes from "../playlist/TomorrowTunes";

const DisplayPage = () => {
  const { album, setAlbum, music } = useGlobalContext();

  if (album) {
    return <TomorrowTunes />;
  }

  return (
    <>
      <div className="display__section">
        <div className="display__section_1">
          <div className="left__section">
            <div className="text__content">
              <small>Currated playlist</small>
              <div className="mid__text">
                <h2>R & B Hits</h2>
                <p>
                  All mine, Lie again, Petty call me everyday, Out of time, No
                  love, Bad habit and so much more.
                </p>
              </div>
              <div className="lower__text">
                <div className="lower__text1">
                  <img src={ellipse_1} alt="ellipse1" />
                  <img src={ellipse_2} alt="ellipse1" />
                  <img src={ellipse_3} alt="ellipse1" />
                  <img src={ellipse_4} alt="ellipse1" />
                  <img src={ellipse_5} alt="ellipse1" />
                </div>
                <img src={man_love} alt="man_love" className="lower__text2" />
                <p>33 likes</p>
              </div>
            </div>
            <div className="image__man">
              <img src={man_sing} alt="man-sing" className="man__sing" />
            </div>
          </div>
          <div>
            <h4 className="top__chart">Top charts</h4>
            <div className="top__song">
              <div className="top__song1">
                <div className="top__song1b">
                  <img src={goldenage} alt="goldenage" />
                  <div className="top-song__text">
                    <h4
                      className="tomorrow__text-click"
                      onClick={() => setAlbum(true)}
                    >
                      Golden age of 80s
                    </h4>
                    <p>Sean Swadder</p>
                    <small>2:34:45</small>
                  </div>
                </div>
                <div className="love">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon__love"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z"
                      stroke="#FACD66"
                      strokeWidth="0.5625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="top__song1">
                <div className="top__song1b">
                  <img src={regaee} alt="regaee" />
                  <div className="top-song__text">
                    <h4
                      className="tomorrow__text-click"
                      onClick={() => setAlbum(true)}
                    >
                      Reggae "n" blues
                    </h4>
                    <p>Dj YK mule</p>
                    <small>1:02:42</small>
                  </div>
                </div>
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon__love"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z"
                      stroke="#FACD66"
                      strokeWidth="0.5625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="top__song1">
                <div className="top__song1b">
                  <img src={tomorrowTune} alt="tomorrowTune" />
                  <div className="top-song__text">
                    <h4
                      className="tomorrow__text-click"
                      onClick={() => setAlbum(true)}
                    >
                      Tomorrow's tune
                    </h4>
                    <p>Obi datti</p>
                    <small>2:01:25</small>
                  </div>
                </div>
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon__love"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z"
                      stroke="#FACD66"
                      strokeWidth="0.5625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewReleases music={music} />
        <PopularReleases music={music} />
      </div>
    </>
  );
};

export default DisplayPage;
