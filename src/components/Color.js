import React from "react";

const Color = (handleColor) => {
  return (
    <div className="px-10 py-6 flex justify-center items-center gap-8">
      <div
        className="bg-mainColor h-8 w-8"
        onClick={() => handleColor(mainColor)}
      ></div>
      <div
        className="bg-lightGray h-8 w-8"
        onClick={() => handleColor(lightGray)}
      ></div>
      <div
        className="bg-darkGray h-8 w-8"
        onClick={() => handleColor(darkGray)}
      ></div>
      <div
        className="bg-yellow h-8 w-8"
        onClick={() => handleColor(yellow)}
      ></div>
    </div>
  );
};

export default Color;
