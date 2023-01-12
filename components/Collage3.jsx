import React from "react";
import Image from "next/image";

const Collage3 = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="absolute flex justify-end items-center gap-x-[7vw] 2xl:gap-x-[150px] w-full max-w-[1600px] ">
        <div className="ml-[7vw] 2xl:ml-[133px]">
          <Image src="/photo-6-a.jpg" width={600} height={0} alt="/" />
        </div>
        <div>
          <Image src="/photo-7.jpg" width={700} height={0} alt="/" />
        </div>
      </div>
      <div className="bg-[#d5b3ff] h-[58vw] w-[65vw] max-w-[1067px] max-h-[900px]"></div>
    </div>
  );
};

export default Collage3;
