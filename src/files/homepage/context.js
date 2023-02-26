import React, { useContext, useState, useEffect, useRef } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false);
  const [music, setMusic] = useState([]);
  const [album, setAlbum] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [songUrl, setSongUrl] = useState(
    "https://audio-ssl.itunes.apple.com/itunes-assets/A…b03d6531/mzaf_2301334515189359429.plus.aac.ep.m4a"
  );
  const [songImage, setSongImage] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [artiste, setArtiste] = useState("");
  const [index, setIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(false);
  const [search, setSearch] = useState([]);
  const [songSearch, setSongSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const songCall = useRef(new Audio(songUrl));

  const intervalRef = useRef();

  useEffect(() => {
    songCall.current.pause();
    if (playing) {
      //   setLoading(false);
      startTimer();
      songCall.current = new Audio(songUrl);
      songCall.current.play();
    } else {
      clearInterval(intervalRef.current);
      songCall.current.pause();
    }
  }, [songUrl]);

  useEffect(() => {
    if (playing) {
      songCall.current.pause();
      setArtiste(music[index].subtitle);
      setSongTitle(music[index].title);
      if (music[index].title.length >= 20) {
        setSongTitle(`${music[index].title.substring(0, 20)}...`);
      }
      setSongImage(music[index].images.coverart);
      setSongUrl(music[index].hub.actions[1].uri);
      songCall.current = new Audio(songUrl);
      setPlaying(true);
    }
  }, [index]);

  const handleClick = (images, title, subtitle, hub) => {
    songCall.current.pause();
    setArtiste(subtitle);
    setSongTitle(title);
    if (title.length >= 20) {
      setSongTitle(`${title.substring(0, 20)}...`);
    }
    setSongImage(images.coverart);
    setSongUrl(hub.actions[1].uri);
    songCall.current = new Audio(songUrl);
    setPlaying(true);
    setPlay(true);
  };

  const replayControl = () => {
    if (songCall.current.ended) {
      setPlay(false);
      setPlaying(true);
      setIndex(index - 1);
      setPlay(true);
    }
  };
  useEffect(() => {
    play ? songCall.current.play() : songCall.current.pause();
  }, [play]);
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (songCall.current.ended) {
        nextTrack();
      }
    }, [1000]);
  };
  const nextTrack = () => {
    setPlaying(true);
    index === music.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const previousTrack = () => {
    setPlaying(true);
    index === 0 ? setIndex(music.length - 1) : setIndex(index - 1);
  };
  const playPauseControl = () => {
    play ? setPlay(false) : setPlay(true);
  };
  const shuffleControl = () => {
    const count = music.length;
    const shuffle = Math.floor(Math.random() * count);
    setIndex(shuffle);
    setPlaying(true);
    setPlay(true);
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9ee8477928msh123a659c3e0e11cp1ad15ejsn9a07e4d818a9",
      "X-RapidAPI-Host": "shazam-song-recognizer.p.rapidapi.com",
    },
  };
  const url =
    "https://shazam-song-recognizer.p.rapidapi.com/top_country_tracks?country_code=NG&limit=20&start_from=0";

  const fetchMusic = async () => {
    try {
      const response = await fetch(url, options);
      const music = await response.json();
      const { tracks } = music.result;
      const newTrack = tracks.filter((arr) => arr.images !== undefined);
      setMusic(newTrack);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMusic();
  }, []);

  const handleSubmit = (e) => {
    setSongSearch("");
    e.preventDefault();
    if (songSearch) {
      setLoading(true);
      fetchMusic2();
    }
    setSongSearch("");
  };

  const url2 = `https://shazam-song-recognizer.p.rapidapi.com/search_track?query=${songSearch}&limit=10&start_from=0&lang=-`;

  const fetchMusic2 = async () => {
    try {
      const response = await fetch(url2, options);
      const music = await response.json();
      const { hits } = music.result;
      setSearch(hits);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMusic2();
  }, []);

  return (
    <AppContext.Provider
      value={{
        music,
        setMusic,
        album,
        setAlbum,
        playing,
        songUrl,
        songImage,
        songTitle,
        artiste,
        index,
        nextTrack,
        previousTrack,
        setSongTitle,
        setSongImage,
        setArtiste,
        duration,
        setDuration,
        playPauseControl,
        play,
        songCall,
        currentTime,
        setCurrentTime,
        handleClick,
        search,
        songSearch,
        setSongSearch,
        handleSubmit,
        loading,
        setLoading,
        shuffleControl,
        replayControl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
