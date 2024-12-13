import React from "react";
import closeIcon from "../assets/close.svg";
const Icon = ({ iconPath, size = 24 }) => {
//   Construct the path to the icon
//   const iconPath = `/icons/${iconName}.svg`;
  
console.log("---->",iconPath);

  return (
    <img
      src= {iconPath}
      // alt={"Hello this icon"}
      width= {size}
      height={size}
      className="block "
    />
  );
};

export default Icon;