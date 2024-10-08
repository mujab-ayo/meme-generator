import React from "react";

const Color = ({onColorChange}) => {
  return (
    <div className="px-10 py-6 flex justify-center items-center gap-8">
      <div
        className="bg-mainColor h-8 w-8"
        onClick={() => onColorChange("#1864ab")}
      ></div>
      <div
        className="bg-lightGray h-8 w-8"
        onClick={() => onColorChange("#e9ecef")}
      ></div>
      <div
        className="bg-darkGray h-8 w-8"
        onClick={() => onColorChange("#343a40")}
      ></div>
      <div
        className="bg-yellow h-8 w-8"
        onClick={() => onColorChange("#e67700")}
      ></div>
    </div>
  );
};

export default Color;
