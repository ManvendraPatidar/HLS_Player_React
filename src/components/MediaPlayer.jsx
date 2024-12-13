import React from "react";
import Icon from "../common_components/Icon";
import EquizerIcon from "../assets/equalizer_2.svg";

export const MediaPlayer = () => {
  return (
    <div
      className="flex-1 flex items-center justify-center"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <div className="max-w-[350px] h-[100%] flex-1 flex flex-col items-center pt-[40px]">
        <div >
            <img className="h-[250px] w-[250px] bg-[black] rounded-[250px] object-fill" src="https://media.istockphoto.com/id/1443887485/photo/young-adult-black-male-music-singer-passionately-singing-in-a-beautiful-illuminated-studio.jpg?s=612x612&w=0&k=20&c=wQp7zLdNQ72w10SaxpuvWvH8qg5rPb3r6qGeouwLD2E="/>
        </div>
        <div className="w-[100%] mt-[40px]">
          <div className="flex justify-start">
            <Icon iconPath={EquizerIcon} />
            <span className="font-bold text-[#FAB74D] ml-[5px]">
              Walking The Wire
            </span>
          </div>
          <span className="font-medium text-[12px] text-[grey]">
            Jaylon Gouse, 2018
          </span>
          <div className="flex justify-start items-center mt-[5px]">
            <div className="h-[20px] w-[20px] bg-[blue] rounded-[5px]" />
            <span className="font-bold ml-[5px] text-[13px]">MAIN SQUARE</span>
          </div>
        </div>

        {/* underline   */}
        <div className="h-[1px] w-[100%] bg-[#BABABA] my-[30px]" />
        <div className="w-[100%]   overflow-scroll " style={{scrollbarWidth: "none"}}>
          Tere bin jee na paunga Sach much mar hi jaunga Yeh tay hai, yeh tay
          hai Tu naseebon sa mere hathon pe Shuru se likha hai Mera haq hai tu
          aasmano se Mujhe jo ataa hai Tere kadmon pe jahan rakh doon main Kabhi
          jo kahe tu Koi shaq ho toh aazma lena Kisi din mujhe Maujood hai har
          saans mein Tu har dafa, yeh tay hai Tu hai dawa ya dard hai Par hai
          mera, yeh tay hai (x2) Tere bin jee na paunga Sach much mar hi jaunga
          Yeh tay hai, yeh tay hai.
          Tere bin jee na paunga Sach much mar hi jaunga Yeh tay hai, yeh tay
          hai Tu naseebon sa mere hathon pe Shuru se likha hai Mera haq hai tu
          aasmano se Mujhe jo ataa hai Tere kadmon pe jahan rakh doon main Kabhi
          jo kahe tu Koi shaq ho toh aazma lena Kisi din mujhe Maujood hai har
          saans mein Tu har dafa, yeh tay hai Tu hai dawa ya dard hai Par hai
          mera, yeh tay hai (x2) Tere bin jee na paunga Sach much mar hi jaunga
          Yeh tay hai, yeh tay hai.
        </div>
      </div>
    </div>
  );
};
