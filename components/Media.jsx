import React, { useState } from "react";
import Video2 from "./Video2";

const Media = () => {
  const [video, setVideo] = useState(false);
  const handleVideo = () => {
    setVideo(true);
  };
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="mb-[6vw] px-10 max-w-[800px]">
        <h2 className="font-semibold mb-[25px] text-[1.75rem] leading-[1.4]">
          Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow,
          it’s incredibly rewarding.
        </h2>
        <p className="font-thin text-lg">
          We feel the same way about making Ableton products. The driving force behind Ableton is
          our passion for what we make, and the people we make it for.
        </p>
      </div>
      <figure className="mx-[8vw] mb-[6vw] ">
      <img
          className={video ? "hidden" : "cursor-pointer"}
          onClick={handleVideo}
          width={800}
          height={0}
          src="/juanpe.jpg"
          alt="/"
        />
        {video ? <Video2 /> : null}

        <figcaption className="pt-2 pl-4 text-sm">Why Ableton - Juanpe Bolivar</figcaption>
      </figure>
      <div className="mb-[6vw] px-10 max-w-[800px]">
        <h2 className="font-semibold mb-[25px] text-[1.75rem] leading-[1.4]">
          We are more than 350 people from 30 different countries divided between our headquarters
          in Berlin and our offices in Los Angeles and Tokyo.
        </h2>
        <p className="font-thin text-lg">
          Most of us are active musicians, producers, and DJs, and many of us use Live and Push
          every day. We come from a wide range of cultural and professional backgrounds. Some of us
          have PhDs, some are self-taught, and most of us are somewhere in between. What connects us
          is the shared belief that each of us has the skills and knowledge to contribute to
          something big: helping to shape the future of music culture.
        </p>
      </div>
    </div>
  );
};

export default Media;
