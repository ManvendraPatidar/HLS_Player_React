import React, { useContext, useEffect, useRef } from "react";
import Hls from "hls.js";
import { MyContext } from "../App";

const VideoPlayer = ({ setDuration }) => {
  const { currentRef, currentUrl } = useContext(MyContext);

  return (
    <div
      className="h-screen fixed w-screen flex flex-col justify-center items-center bg-[black] px-4"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <div className="w-[100%] aspect-[16/9]">
        <video
          className="w-full h-full object-contain"
          autoPlay
          loop
          ref={currentRef}
          onLoadedMetadata={() => {
            if (currentRef) {
              setDuration(currentRef.current.duration);
            }
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
