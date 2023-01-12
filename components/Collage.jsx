import React from "react";
import Image from "next/image";
const Collage = () => {
  return (
    <div className="mb-[6vw] w-full max-h-[900px] flex items-center flex-row-reverse">
      <div className="flex flex-row gap-x-[7vw] absolute w-full max-w-[1600px] justify-center items-center  ">
        <div className="ml-[7vw]">
          <Image width={750} height={0} src="/photo-1.jpg" alt="/" />
        </div>
        <div className="mr-[7vw]">
          <Image width={600} height={0} src="/photo-2.jpg" alt="/" />
        </div>
      </div>
      <div className="bg-[#FBFFA7] w-[55vw] h-[58vw] max-h-[900px] max-w-[900px]"></div>
    </div>
  );
};

export default Collage;
