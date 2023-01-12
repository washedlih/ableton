import React from "react";
const Header = () => {
  return (
    <div className="h-full mx-[8vw] lg:mx-[133px]">
      <div className="w-full pb-[6vw] flex justify-center items-center">
        <div className="absolute text-7xl md:text-9xl text-[#fd5948] font-bold z-1">
          <h1>Ableton</h1>
        </div>
        <img
          className="mx-auto h-screen object-cover"
          width="3000"
          height="0"
          src="/main.jpg"
          alt="/"
          priority
        />
      </div>
      <div className="flex flex-col mx-auto mb-[6vw] max-w-[800px]">
        <h2 className="font-semibold mb-[25px] text-[1.75rem] leading-[1.4]">
          We make <span className="text-[#0000ff]">Live</span>,{" "}
          <span className="text-[#0000ff]">Push</span> and{" "}
          <span className="text-[#0000ff]">Link</span> — unique software and hardware for music
          creation and performance. With these products, our community of users creates amazing
          things.
        </h2>
        <p className="font-thin text-lg">
          Ableton was founded in 1999 and released the first version of Live in 2001. Our products
          are used by a community of dedicated musicians, sound designers, and artists from across
          the world.
        </p>
      </div>
    </div>
  );
};

export default Header;
