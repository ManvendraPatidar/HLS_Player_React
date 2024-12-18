import React, { useContext, useEffect, useRef, useState } from "react";
import Icon from "../common_components/Icon";
import EquizerIcon from "../assets/equalizer.svg";
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";
import FastForward from "../assets/fast_forward.svg";
import CloseIcon from "../assets/close.svg";
import Hls from "hls.js";
import MusixGIF from "../assets/music_bar.gif";
import ProgressBar from "./ProgressBar"; // Import ProgressBar Component
import { MyContext } from "../App";
import SettingComponent from "./SettingComponent";

export const BottomBar = ({ duration, setDuration, isHLS }) => {
  const { currentRef, currentUrl } = useContext(MyContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentRef.current && !currentRef.current.paused) {
        setCurrentTime(currentRef.current.currentTime);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isHLS) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(currentUrl);
        hls.attachMedia(currentRef.current);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          currentRef.current
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
      } else if (
        currentRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        // For Safari browsers
        currentRef.current.src = currentUrl;
        currentRef.current.addEventListener("loadedmetadata", () => {
          setDuration(currentRef.current.duration);

          currentRef.current.play();
          setIsPlaying(true);
        });
      }
    } else {
      if (currentRef.current) {
        currentRef.current.src = currentUrl; // Dynamically set the audio src
        currentRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((e) => {
            setIsPlaying(false);
          });
      }
    }
  }, [currentUrl]);

  const playPauseHandle = () => {
    if (currentRef.current) {
      if (currentRef.current.paused) {
        currentRef.current.play();
        setIsPlaying(true);
      } else {
        currentRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Seek media by 10 seconds
  const seekMedia_10sec = (time, isForward) => {
    if (currentRef.current) {
      if (isForward) {
        currentRef.current.currentTime += time; // Adjust currentTime by time in seconds
        setCurrentTime(currentRef.current.currentTime);
      } else {
        currentRef.current.currentTime -= time; // Adjust currentTime by time in seconds
        setCurrentTime(currentRef.current.currentTime);
      }
    }
  };

  // Seek media based on range input
  const seekMedia = (event) => {
    console.log("triggerd seekssss");
    const newTime = event.target.value;
    setCurrentTime(newTime);
    if (currentRef.current) {
      currentRef.current.currentTime = newTime;
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
          {!isPlaying ? (
            <Icon iconPath={EquizerIcon} size={30} />
          ) : (
            <Icon iconPath={MusixGIF} size={30} />
          )}

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
          <SettingComponent />
          {/* <Icon iconPath={CloseIcon} /> */}
        </div>
      </div>
    </div>
  );
};

export default BottomBar;

// async function getResolutionsFromM3U8(url) {
//   console.log("URL,", url);
//   try {
//     // Fetch the m3u8 file content
//     const response = await fetch(url);
//     const data = await response.text();

//     // Match all lines containing RESOLUTION=<width>x<height>
//     const resolutions = [
//       ...new Set(
//         data.match(/RESOLUTION=([\d+x]+)/g)?.map((res) => res.split("=")[1])
//       ),
//     ];

//     // Log or return the resolutions
//     console.log("Resolutions ...", resolutions);
//     return resolutions;
//   } catch (error) {
//     console.error("Error fetching the M3U8 file:", error);
//   }
// }
