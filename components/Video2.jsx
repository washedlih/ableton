import React from "react";

const Video2 = () => {
  return (
    <div className="max-w-[800px]">
      <iframe
        className=""
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/9SbnhgjeyXA?rel=0;&autoplay=1`}
        allow="autoplay"
        allowFullScreen
        title="Embedded youtube"
      ></iframe>
    </div>
  );
};

export default Video2;
