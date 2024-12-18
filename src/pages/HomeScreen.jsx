import React, { useContext, useEffect, useState } from "react";
import { BottomBar } from "../components/BottomBar.jsx";
import { MediaPlayer } from "../components/MediaPlayer.jsx";
import VideoPlayer from "../components/VideoPlayer.jsx";
import { useParams } from "react-router-dom";
import { MyContext } from "../App.jsx";
import { checkIsHSL } from "../services/checkIsHLS.js";
import { checkHLSFileTypeByCodec } from "../services/checkHLSFileType.js";
import { LoginScreen } from "./LoginScreen.jsx";

export const HomeScreen = () => {
  const { isLocalFile, currentRef, currentUrl, setCurrentUrl } =
    useContext(MyContext);

  const fetchDataFromLocalDatabase = () => {
    const url = JSON.parse(localStorage.getItem("url")) ?? null;
    return url;
  };

  let isHLS = fetchDataFromLocalDatabase().includes("m3u8");

  const [isVideo, setIsVideo] = useState(
    fetchDataFromLocalDatabase().endsWith(".m3u8") ||
      fetchDataFromLocalDatabase().endsWith(".mp4")
  );

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const url = fetchDataFromLocalDatabase();
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
