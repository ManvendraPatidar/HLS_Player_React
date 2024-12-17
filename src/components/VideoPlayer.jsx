import React, { useContext, useEffect, useRef } from "react";
import Hls from "hls.js";
import { MyContext } from "../App";

const VideoPlayer = ({ setDuration }) => {

  const { currentRef,currentUrl} = useContext(MyContext);
     


    // useEffect(() => {
    //     if (Hls.isSupported()) {
    //       console.log("HSL SUPORTED");
            
    //         const hls = new Hls();
    //         hls.loadSource(currentUrl);
    //         hls.attachMedia(currentRef.current);

    //         hls.on(Hls.Events.MANIFEST_PARSED, () => {
    //             console.log("Manifest loaded");
    //             currentRef.current.play();
    //         });

    //         return () => hls.destroy();
    //     } else if (currentRef.current.canPlayType("application/vnd.apple.mpegurl")) {
    //         // For Safari browsers
    //       console.log("HSL SUPORTED ELSE IFF");

    //         currentRef.current.src = currentUrl;
    //         currentRef.current.addEventListener("loadedmetadata", () => {
    //             currentRef.current.play();
    //         });
    //     }else{
    //       console.log("yaha else mai aa rha ")
    //     }
    // }, [currentUrl]);

    return <div className="h-screen fixed w-screen flex flex-col justify-center items-center bg-[black] px-4"
    style={{ height: "calc(100vh - 70px)" }}
    >
    {/* <span className="text-white mb-4 text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
      Test M3U8, DASH streams with Free HTML5 Player
    </span> */}
    <div
      className="w-[100%] aspect-[16/9]"
    >
      <video
        className="w-full h-full object-contain"
        ref={currentRef}
        // controls
        onLoadedMetadata={()=>{
          if (currentRef) {
            setDuration(currentRef.current.duration);
          }
        }}
      />
    </div>
  </div>
  
  
  
};

export default VideoPlayer;
