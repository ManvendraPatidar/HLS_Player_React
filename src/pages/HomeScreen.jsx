import React, { useEffect, useState } from "react";
import { BottomBar } from "../components/BottomBar.jsx";
import { MediaPlayer } from "../components/MediaPlayer.jsx";
import VideoPlayer from "../components/VideoPlayer.jsx";
import { useParams } from "react-router-dom";

export const HomeScreen = () => {
  const { url } = useParams();
  console.log("((((",url);
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    const temp = url.endsWith(".m3u8");
    setIsVideo(temp);
  }, []);

  return (
    <div
      className=" h-screen w-screen flex flex-1 overflow-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      {isVideo ? (
        <VideoPlayer videoSrc={url} />
      ) : (
        <>
          <MediaPlayer />
          <BottomBar audioSrc = {url} />
        </>
      )}
    </div>
  );

};
