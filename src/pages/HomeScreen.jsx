import React, { useContext, useEffect, useState } from "react";
import { BottomBar } from "../components/BottomBar.jsx";
import { MediaPlayer } from "../components/MediaPlayer.jsx";
import VideoPlayer from "../components/VideoPlayer.jsx";
import { useParams } from "react-router-dom";
import { MyContext } from "../App.jsx";

export const HomeScreen = () => {
  const { isLocalFile, currentRef, currentUrl, setCurrentUrl } =
    useContext(MyContext);

  const fetchDataFromLocalDatabase = () => {
    const url = JSON.parse(localStorage.getItem("url")) ?? null;
    return url;
  };

  // useEffect(() => {
  //   console.log("Current ref got changedddd !!!!", currentRef);
  // }, [currentRef]);

  const [duration, setDuration] = useState(0);

  const url = currentUrl ?? "";

  const [isVideo, setIsVideo] = useState(
    fetchDataFromLocalDatabase().endsWith(".m3u8") ||
      fetchDataFromLocalDatabase().endsWith(".mp4")
  );

  useEffect(() => {
    const url = fetchDataFromLocalDatabase();
    if (url) {
      setCurrentUrl(url);
      const temp = url.endsWith(".m3u8") || url.endsWith(".mp4");
      setIsVideo(temp);
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
      <BottomBar duration={duration} setDuration={setDuration} />
    </div>
  );
};
