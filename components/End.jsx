import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

const End = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center border-b-2 border-black/10">
      <div className="my-[6vw] 2xl:my-[133px] max-w-[800px] px-10">
        <h2 className="font-semibold mb-[25px] text-[1.75rem] leading-[1.4]">
          We want our employees to love it here. Since we’re looking for exceptional talent from
          around the world, we will do everything we can to make your transition as easy as
          possible.
        </h2>
        <p className="font-thin text-lg">
          If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even
          provide you with free German or English lessons. Plus, working in Germany means you can
          expect comprehensive health insurance for you and your family, as well as generous
          maternity and paternity leave. Office hours are flexible, but it’s not all work; we have
          several company and team outings throughout the year as well as a variety of fun, informal
          small-group activities.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row mb-[6vw] 2xl:mb-[133px] justify-center mx-[8vw] 2xl:mx-[133px] max-w-[1300px]">
        <div>
          <Image
            className="h-[50vw] object-fill max-h-[667px]"
            src="/photo-8.jpg"
            width={1500}
            height={0}
            alt="/"
          />
        </div>
        <div className="bg-[#b1c5ff] w-full flex flex-col justify-center p-[8vw] 2xl:p-[100px]">
          <h2 className="font-semibold text-2xl mb-[25px] leading-relaxed">
            We’re really proud of the work we’ve done so far. But there’s so much more to come. If
            you’d like to be a part of it, please join us.
          </h2>
          <h2 className="font-semibold text-2xl text-[#0000ff]">
            <Link href="/">
              See latest jobs <AiOutlineRight className="inline font-bold" size={15} />
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default End;
