import React from "react";

export const InputTextFeild = ({tittle , placeholder , value , setValue}) => {

  return (
    <div className=" my-[10px]">
      <span className="font-[600] text-[#D21156]">{tittle}</span>
      <input
        type="text"
        value={value}
        onChange={(x)=>{setValue(x.target.value)}}
        className=" mt-[8px] bg-white  text-[black] text-sm rounded-[4px]  block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};
