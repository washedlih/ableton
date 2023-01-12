import React from "react";
import YouTube from "react-youtube";

const Video = ({ height, width }) => {
  const opts = {
    height: "400",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="">
      <YouTube className="w-full h-full" videoId="9SbnhgjeyXA" opts={opts} autoplay="1" />
    </div>
  );
};

export default Video;
