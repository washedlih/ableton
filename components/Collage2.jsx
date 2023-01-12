import React from "react";
import Image from "next/image";

const Collage2 = () => {
  return (
    <div className="mb-[6vw] w-full max-h-[1200px] flex items-center ">
      <div className="h-[75vw] bg-[#b6ffc0] w-[58vw] max-h-[1200px] max-w-[930px]"></div>
      <div className="flex flex-row items-center justify-center w-full max-w-[1600px] absolute">
        <div className="flex w-full gap-x-[7vw] items-center justify-center ">
          <div
            className="flex flex-col
        gap-y-[7vw] ml-[7vw] "
          >
            <div>
              <Image src="/photo-3.jpg" width={550} height={0} alt="/" />
            </div>
            <div>
              <Image src="/photo-4.jpg" width={550} height={0} alt="/" />
            </div>
          </div>
          <div className="mr-[7vw]">
            <Image src="/photo-5.jpg" width={650} height={0} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage2;
