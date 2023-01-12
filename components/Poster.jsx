import React from "react";

const Poster = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center ">
      <div className="mb-[6vw] max-w-[800px] px-10">
        <h2 className="font-semibold text-[1.75rem] leading-[1.4] mb-[25px]">
          We believe it takes focus to create truly outstanding instruments. We only work on a few
          products and we strive to make them great.
        </h2>
        <p className="font-thin text-lg">
          Rather than having a one-size-fits-all process, we try to give our people what they need
          to work their magic and grow. We’ve learned that achieving the best results comes from
          building teams that are richly diverse, and thus able to explore problems from a wider set
          of perspectives. We don’t always agree with each other, but opinion and debate are valued
          and openly encouraged.
        </p>
      </div>
      <div className="mx-[8vw] 2xl:mx-0">
      <img src="/poster.jpg" width={1300} height={0} alt="/" />
      </div>
      <div className="my-[6vw] 2xl:my-[133px] max-w-[800px] px-10">
        <h2 className="font-semibold text-[1.75rem] leading-[1.4] mb-[25px]">
          We’re passionate about what we do, but we’re equally passionate about improving who we
          are.
        </h2>
        <p className="font-thin text-lg mb-[20px]">
          We work hard to foster an environment where people can grow both personally and
          professionally, and we strive to create a wealth of opportunities to learn from and with
          each other.
        </p>
        <p className="font-thin text-lg">
          Alongside an internal training program, employees are actively supported in acquiring new
          knowledge and skills, and coached on applying these in their daily work. In addition,
          staff-organized development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </div>
    </div>
  );
};

export default Poster;
