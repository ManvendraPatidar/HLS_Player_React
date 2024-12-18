import React from "react";

const Icon = ({ iconPath, size = 24, style, ontap = () => {} }) => {
  return (
    <img
      src={iconPath}
      onClick={ontap}
      width={size}
      height={size}
      className="block "
      style={style}
    />
  );
};

export default Icon;
