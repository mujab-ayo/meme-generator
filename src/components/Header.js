import React from "react";

const Header = () => {
  return (
    <header className="flex bg-mainColor p-10 text-lightGray">
      <img src="troll.png" className="h-12 w-12" alt="" />
      <h2 className="text-4xl ml-4 font-semibold">Meme Generator</h2>
      <h4 className="ml-auto text-2xl">react project</h4>
    </header>
  );
};

export default Header;
