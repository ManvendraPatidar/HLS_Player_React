import React, { useState } from "react";
import { InputTextFeild } from "../common_components/InputTextFeild";
import { Navigate, useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
 
   const navigation = useNavigate();
  return (
    <div className="h-screen w-screen bg-[white] flex justify-center items-center">
      <div className="px-[20px] py-[20px] flex-1 flex flex-col   max-w-[400px] bg-[#FBAE42] rounded-[10px]">
        <span className="self-center mb-[10px] font-bold text-[20px]">
          {" "}
          HSL Player
        </span>
        <InputTextFeild
          tittle={"Enter your Name"}
          placeholder={"ex.John Sharma"}
          value={name}
          setValue={setName}
        />
        <InputTextFeild
          tittle={"Enter url"}
          placeholder={"url : https//sample.mp3u8"}
          value={url}
          setValue={setUrl}
        />

        <button
          type="button"
          onClick={()=>{
            console.log("tapped---->",name,url);
            navigation("/home");
            setName("");
            setUrl("")
          }}
          className="mt-[15px] text-white bg-gradient-to-r from-[#D21156] via-red-500 to-[#D21156] hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Stream Now
        </button>
      </div>
    </div>
  );
};
