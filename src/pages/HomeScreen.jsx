import React, { useContext, useEffect, useState } from "react";
import { BottomBar } from "../components/BottomBar.jsx";
import { MediaPlayer } from "../components/MediaPlayer.jsx";
import VideoPlayer from "../components/VideoPlayer.jsx";
import { MyContext } from "../App.jsx";

import { checkHLSFileTypeByCodec } from "../services/checkHLSFileType.js";

export const HomeScreen = () => {
  const { setCurrentUrl } = useContext(MyContext);

  let isHLS = fetchDataFromLocalDatabase().includes("m3u8");

  const [isVideo, setIsVideo] = useState(
    fetchDataFromLocalDatabase().endsWith(".m3u8") ||
      fetchDataFromLocalDatabase().endsWith(".mp4")
  );

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const url = fetchDataFromLocalDatabase();

    if (!url) {
      console.log("Go back from here ");
    }

    setCurrentUrl(url);
    isHLS = url.includes("m3u8");

    if (url.includes("m3u8")) {
      checkHLSFileTypeByCodec(url).then((res) => {
        setIsVideo(res);
      });
    } else {
      if (url.endsWith(".mp3")) {
        setIsVideo(false);
      } else {
        setIsVideo(true);
      }
    }
  }, []);



  return (
    <div
      className=" h-screen w-screen flex flex-1 overflow-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      {isVideo ? (
        <VideoPlayer setDuration={setDuration} />
      ) : (
        <MediaPlayer setDuration={setDuration} />
      )}
      <BottomBar duration={duration} setDuration={setDuration} isHLS={isHLS} />
    </div>
  );
};


export const fetchDataFromLocalDatabase = () => {
  const url = JSON.parse(localStorage.getItem("url")) ?? null;
  return url;
};