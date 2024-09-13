import React, { useRef, useState, useEffect } from "react";
import PlayFill from "../assets/Play_fill.svg";
import Pause from "../assets/Stop.svg";
import PreviousSong from "../assets/Stop_and_play_fill-1.svg";
import NextSong from "../assets/Stop_and_play_fill.svg";

const MusicPlayer = ({ songs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongIndex, isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center h-fit p-4 rounded-3xl bg-gray-800">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <img
            src={songs[currentSongIndex].img}
            alt="song"
            className="w-72 h-72 rounded-2xl"
          />
          <h2 className="text-light mt-5">{songs[currentSongIndex].title}</h2>
          <h3 className="text-light-gray">{songs[currentSongIndex].artist}</h3>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <input
            type="range"
            value={progress}
            onChange={(e) => {
              const newTime =
                (e.target.value / 100) * audioRef.current.duration;
              audioRef.current.currentTime = newTime;
              setProgress(e.target.value);
            }}
            style={{
              background: `linear-gradient(to right, #C93B76 0%, #C93B76 ${progress}%, #5f6470 ${progress}%, #5f6470 100%)`,
            }}
          />
        </div>
        <audio
          ref={audioRef}
          src={songs[currentSongIndex].src}
          onTimeUpdate={(e) => {
            const currentTime = e.target.currentTime;
            const duration = e.target.duration;
            setProgress((currentTime / duration) * 100);
          }}
          onEnded={handleNextSong}
        />
        <div className="flex gap-4 items-center justify-center mt-10">
          <button
            onClick={handlePreviousSong}
            className="hover:bg-light p-1 rounded-full transition-colors ease-in-out duration-100"
          >
            <img src={PreviousSong} alt="previous" className="w-7 h-7" />
          </button>
          <button
            className="flex items-center justify-center bg-pink hover:bg-pink/70 hover:scale-110 h-12 w-12 rounded-full transition ease-in-out duration-100"
            onClick={handlePlayPause}
          >
            <img
              src={isPlaying ? Pause : PlayFill}
              alt="play/pause"
              width={isPlaying ? 20 : 35}
              height={isPlaying ? 20 : 35}
            />
          </button>
          <button
            onClick={handleNextSong}
            className="hover:bg-light p-1 rounded-full transition-colors ease-in-out duration-100"
          >
            <img src={NextSong} alt="next" className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
