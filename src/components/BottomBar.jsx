import React from "react";
import Icon from "../common_components/Icon";
import EquizerIcon from "../assets/equalizer.svg"
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";
import NextSongIcon from "../assets/skip_next.svg";
import PreviousSongIcon from "../assets/skip_previous.svg";
import CloseIcon from "../assets/close.svg";



export const BottomBar = () => {
  return (
    <div className="h-[70px]  w-screen bg-black absolute bottom-0  flex items-center pr-[20px] sm:pr-[100px] pl-[20px] justify-between">
      <div className="flex">
        <Icon iconPath={EquizerIcon} />
        <span className="text-[white] ml-[5px]">Problem - Dino James</span> 
      </div>

      <div className="flex justify-evenly w-[180px]">
         <Icon iconPath={PreviousSongIcon} />
         <div className="h-[45px] w-[45px] bg-[white] rounded-[40px] flex justify-center items-center">
         <Icon iconPath={PlayIcon} size={30}/></div>
         <Icon iconPath={NextSongIcon}/>
         <Icon iconPath={CloseIcon}/>


        {/* <span className="text-[white] ml-[5px]">Problem - Dino James</span>  */}
      </div>
    </div>
  );
};
