import React, { useState, useEffect } from "react";
import Box from "./Box";
import { meme } from "./data";

const Form = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState("/trolling-face.png");
  const [index, setIndex] = useState(0);

  const changeImage = (e) => {
    e.preventDefault();
    setImage(meme[index]);
    setIndex((prevIndex) => {
      const newIndex = prevIndex >= meme.length - 1 ? 0 : prevIndex + 1;

      return newIndex;
    });
  };


  return (
    <>
      <form className="px-10">
        <div className="my-4 flex justify-between gap-2">
          <div className="flex flex-col basis-1/2 gap-2">
            <label
              htmlFor="top-text"
              className="font-semibold text-darkGray text-3xl"
            >
              Top text
            </label>
            <input
              type="text"
              id="top-text"
              placeholder="shut up"
              className="border-2 border-solid rounded-md p-3 w-4/5 placeholder-midGray text-2xl"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />
          </div>
          <div className="flex flex-col basis-1/2 gap-2">
            <label
              htmlFor="bottom-text"
              className="font-semibold text-darkGray text-3xl"
            >
              Bottom text
            </label>
            <input
              type="text"
              id="bottom-text"
              placeholder="And take my money"
              className="border-2 border-solid rounded-md p-3 w-4/5 placeholder-midGray text-2xl"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />
          </div>
        </div>
        <button
          className="w-full bg-mainColor p-4 text-lightGray font-semibold text-2xl rounded-lg"
          onClick={changeImage}
        >
          Generate new meme image
        </button>
      </form>
      <Box topText={topText} bottomText={bottomText} image={image} />
    </>
  );
};

export default Form;
