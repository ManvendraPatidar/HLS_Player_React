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

    return <video className="w-[100%]" ref={videoRef} controls  />;
};

export default VideoPlayer;
