import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";
// import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const url = "http://localhost:4000";
  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsDasta] = useState([]);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    await songsData.map((song) => {
      if (id === song._id) {
        setTrack(song);
      }
    });
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    songsData.map(async (item, index) => {
      if (track._id === item._id && index > 0) {
        await setTrack(songsData[index - 1]);
      } else {
        await setTrack(songsData[index]);
      }
      await audioRef.current.play();
      setPlayStatus(true);
    });
  };

  const next = async () => {
    songsData.map(async (item, index) => {
      if (track._id === item._id && index < songsData.length - 1) {
        await setTrack(songsData[index + 1]);
      } else {
        await setTrack(songsData[index]);
      }
      await audioRef.current.play();
      setPlayStatus(true);
    });
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  const getSongsData = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      setSongsData(response.data.songs);
      setTrack(response.data.songs[0]);
    } catch (error) {}
  };
  const getAlbumsData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      setAlbumsDasta(response.data.albums);
    } catch (error) {}
  };

  const autoJumpToNextSong = async () => {
    for (let index = 0; index < songsData.length; index++) {
      if (track._id === songsData[index]._id) {
        if (index < songsData.length - 1) {
          await setTrack(songsData[index + 1]);
        } else {
          await setTrack(songsData[0]); // Replay the list from the beginning
        }
        audioRef.current.oncanplay = async () => {
          await audioRef.current.play();
          setPlayStatus(true);
        };
        break;
      }
    }
  };
  
  useEffect(() => {
    getSongsData();
    getAlbumsData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        if (audioRef.current.duration) {
          seekBar.current.style.width =
            Math.floor(
              (audioRef.current.currentTime / audioRef.current.duration) * 100
            ) + "%";
          const currentSeconds = Math.floor(audioRef.current.currentTime % 60);
          const currentMinutes = Math.floor(audioRef.current.currentTime / 60);
          const totalSeconds = Math.floor(audioRef.current.duration % 60);
          const totalMinutes = Math.floor(audioRef.current.duration / 60);

          setTime({
            currentTime: {
              second: String(currentSeconds).padStart(2, "0"),
              minute: String(currentMinutes).padStart(2, "0"),
            },
            totalTime: {
              second: String(totalSeconds).padStart(2, "0"),
              minute: String(totalMinutes).padStart(2, "0"),
            },
          });
        }
      };
    }, 1000);
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
    autoJumpToNextSong,
    songsData,
    albumsData,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
