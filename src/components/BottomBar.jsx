import React, { useEffect, useRef, useState } from "react";
import Icon from "../common_components/Icon";
import EquizerIcon from "../assets/equalizer.svg";
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";
import FastForward from "../assets/fast_forward.svg";
import CloseIcon from "../assets/close.svg";
import Hls from "hls.js";
import MusixGIF from "../assets/music_bar.gif";
import ProgressBar from "./ProgressBar"; // Import ProgressBar Component


export const BottomBar = ({ audioSrc }) => {

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
    
  const audioRef = useRef(null);

  useEffect(() => {
    
    const isHLS = audioSrc.includes("m3u8");


    if(isHLS)
    {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(audioSrc);
        hls.attachMedia(audioRef.current);
        console.log("HLS supported");
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("Manifest loaded");
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Playback failed:", error);
              setIsPlaying(false);
            });
        });
  
        return () => hls.destroy();
      } else if (audioRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        // For Safari browsers
        audioRef.current.src = audioSrc;
        audioRef.current.addEventListener("loadedmetadata", () => {
          console.log("Loaded meta data !!!!!!!")
          setDuration(audioRef.current.duration);
          audioRef.current.play();
        });
      }
    }else{
      if (audioRef.current) {
        audioRef.current.src = audioSrc; // Dynamically set the audio src
      }
    }

  }, [audioSrc]);

  const playPauseHandle = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && !audioRef.current.paused) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  // Seek media by 10 seconds
  const seekMedia_10sec = (time, isForward) => {

    if (audioRef.current) {
      if (isForward) {
        audioRef.current.currentTime += time; // Adjust currentTime by time in seconds
        setCurrentTime(audioRef.current.currentTime);
   
      } else {
        audioRef.current.currentTime -= time; // Adjust currentTime by time in seconds
        setCurrentTime(audioRef.current.currentTime);
      
      }
    }
  };

  // Seek media based on range input
  const seekMedia = (event) => {
    console.log("triggerd seekssss");
    const newTime = event.target.value;
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="h-[74px] w-screen bg-black fixed bottom-0 flex flex-col">
      {/* Progress Bar */}
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={seekMedia}
      />

      <div className="w-screen h-[70px] flex items-center pr-[20px] sm:pr-[100px] pl-[20px] justify-between">
        <div className="flex">
           

          {  
             !isPlaying ?
             <Icon iconPath={EquizerIcon} size={30} /> :
            <Icon iconPath={MusixGIF} size={30}/>
          } 

         
         
          <span className="text-[white] ml-[15px]">Problem - Dino James</span>
        </div>

        <div className="flex justify-evenly w-[180px]">
          {/* Previous and Next Song Icons can be added here */}
          <Icon
            iconPath={FastForward}
            style={{ transform: "scaleX(-1)" }}
            ontap={() => {
              seekMedia_10sec(10, false);
            }}
          />
          <div
            onClick={playPauseHandle}
            className="h-[45px] w-[45px] bg-[white] rounded-[40px] flex justify-center items-center"
          >
            <Icon iconPath={isPlaying ? PauseIcon : PlayIcon} size={30} />
          </div>
          <Icon
            iconPath={FastForward}
            ontap={() => {
              seekMedia_10sec(10, true);
            }}
          />
          {/* <Icon iconPath={CloseIcon} /> */}
        </div>
      </div>

      <audio
        ref={audioRef}
        // src="https://files.topmediai.com/aimusic/api/6cb43343-a1ec-4479-aa4b-411c3db4db24-audio.mp3"
        hidden
        autoPlay
        loop
        onLoadedMetadata={() => {
          setDuration(audioRef.current.duration);
        }}
      />
    </div>
  );
};

export default BottomBar;
