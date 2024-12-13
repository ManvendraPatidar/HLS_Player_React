import React from "react";
import { BottomBar } from "../components/BottomBar.jsx";
import { MediaPlayer } from "../components/MediaPlayer.jsx";

export const HomeScreen = () => {
  return (
    <div className=" h-screen w-screen flex flex-1 ">
      
      <MediaPlayer/> 
      <BottomBar/>
      
    </div>
  );
};




{/* <div className="w-[100%] h-[70px] bg-[#debd8d]"></div>

<div className=" flex flex-col  flex-1 items-center bg-[#2E2B2C]  ">
  <div className="px-[100px] w-screen flex justify-center mb-[30px] mt-[40px]">
  <span className=" text-[white]  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl " >Test M3U8, DASH streams with Free HTML5 Player</span>
  </div>

  <div className=" h-[50%] w-[70%] " >
    <VideoPlayer
      videoSrc={
       "https://d2ccagweq17i1k.cloudfront.net/Output/1733996982061_Tum%20Hi%20Ho%20-%20Aashiqui%202%20128%20Kbps/1733996982061_Tum%20Hi%20Ho%20-%20Aashiqui%202%20128%20Kbps.m3u8?Expires=1734007220&Key-Pair-Id=AKIA3M7ACXH2FQDUUG47&Signature=iBuHSU~oEq-G0V5dag-0FSD0cyHlYIf2EaNwroYxyAGC7vnEDmTJ3xndkEqkNnh~FGon4g3kP56yOFF-jeewpYepfPZAqL6B3emFk8W1OVDZltCED7ZuTKj5Bq5X03xdNWB-pJNdcSk9-vtdPF58om8ElFWScxb22NtgQHJiQYUFMtCk-6cljAyWpwinHejk6fEpM0zztzN-Lv4sSX3c23z0Cxq5CesQJAlCBg3D3FmmPMJ4Oe6M7HR3GZResTcrPUuDd4Cev~5ATLqEE3b~tuCsb9V7KzvMn1ps~qfe~vSzTufrogb~~Znoy9N7e1~PQ~KkU~ewMw~lOsAYw1QKjw__"
      }
    />

      <InputSection />
  </div>
</div> */}