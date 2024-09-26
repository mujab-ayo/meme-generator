import React from "react";

const Box = ({ topText, bottomText, image }) => {
  {console.log(image)}
  return (
    <div className="relative p-10 w-full h-full rounded-md">
      <div className="p-6 flex flex-col items-center  h-full">
        <span className=" text-6xl mb-auto text-mid font-bold">{topText}</span>
        <span className=" text-6xl mt-auto text-mid font-bold">
          {bottomText}
        </span>
      </div>
      <img
        src={image}
        className="absolute p-10 top-0 left-0 w-full h-full object-cover rounded-md -z-10"
        alt=""
      />
    </div>
  );
};

export default Box;
