import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ videoSrc }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(videoRef.current);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                console.log("Manifest loaded");
                videoRef.current.play();
            });

            return () => hls.destroy();
        } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
            // For Safari browsers
            videoRef.current.src = videoSrc;
            videoRef.current.addEventListener("loadedmetadata", () => {
                videoRef.current.play();
            });
        }
    }, [videoSrc]);

    return <div className="h-screen fixed w-screen flex flex-col justify-center items-center bg-[rgb(27,27,27)] px-4">
    <span className="text-white mb-4 text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
      Test M3U8, DASH streams with Free HTML5 Player
    </span>
    <div
      className="
        w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]
        aspect-[16/9]
      "
    >
      <video
        className="w-full h-full object-contain"
        ref={videoRef}
        controls
      />
    </div>
  </div>
  
  
  
};

export default VideoPlayer;
