import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineRight,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-[8vw] 2xl:mt-[133px] px-[6vw] 2xl:px-[133px]">
      <h1 className="text-[50px] pb-[4vw] 2xl:pb-[66px] font-bold">Ableton</h1>
      <div className="grid grid-cols-12 lg:pb-[2em]">
        <div className="lg:col-span-4 col-span-6">
          <ul className="text-base md:text-xl">
            <li>
              <Link className="pb-1" href="/">
                Register Live or Push
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
            <li>
              <Link className="pb-1" href="/">
                About Ableton
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
            <li>
              <Link className="pb-1" href="/">
                Jobs
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
            <li className="flex">
              <AiFillFacebook size={30} className="cursor-pointer text-blue-600" />
              <AiFillTwitterSquare size={30} className="cursor-pointer text-blue-400" />
              <AiFillYoutube size={30} className="cursor-pointer text-red-500" />
              <AiFillInstagram size={30} className="cursor-pointer text-pink-500" />
            </li>
          </ul>
        </div>
        <div className="lg:col-span-4 col-span-6">
          <ul className="text-base md:text-xl">
            <li className="pb-2 font-bold">Education</li>
            <li>
              <Link className="pb-1" href="/">
                Offers for students and teachers
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
            <li>
              <Link className="pb-1" href="/">
                Ableton for the Classroom
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
            <li>
              <Link href="/">
                Ableton for Colleges and Universities
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-4 order-first lg:order-last mb-[25px] lg:mb-0">
          <p className="text-xl font-bold ">Sign up to our newsletter</p>
          <p className="py-2">
            Enter your email address to stay up to date with the latest offers, tutorials,
            downloads, surveys and more.
          </p>
          <div className="flex max-w-[400px] lg:max-w-none w-full">
            <input
              className="w-full px-3 bg-gray-100 text-black text-lg min-h-[40px]"
              type="email"
              placeholder="Enter Email"
            />
            <button className=" w-[150px] font-bold text-lg text-white bg-[#0000ff] min-h-[40px]">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-[25px] pb-[2em]">
        <div className="lg:col-span-4 col-span-6">
          <ul className="text-base md:text-xl">
            <li className="pb-2 font-bold">Community</li>
            <li className="pb-1">
              <Link href="/">
                Find Ableton User Groups
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
            <li className="py-1">
              <Link href="/">
                Find Certified Training
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
            <li>
              <Link href="/">
                Become a Certified Trainer
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-4 col-span-6">
          <ul className="text-base md:text-xl">
            <li className="pb-2 font-bold">Distributors</li>
            <li className="pb-1">
              <Link href="/">
                Find Distributors
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
            <li className="pb-1">
              <Link href="/">
                Try Push in-store
                <AiOutlineRight className="ml-1 inline" size={10} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-4 col-span-12 mt-[25px] lg:mt-0">
          <p className="text-xl font-bold pb-2">Language and Location</p>
          <div className="max-w-[400px] lg:max-w-none w-full space-x-1 flex">
            <select className="bg-gray-100 px-3 min-h-[40px] w-2/5" name="" id="">
              <option value="">English</option>
            </select>
            <select className="bg-gray-100 px-3 min-h-[40px] w-3/5" name="" id="">
              <option value="">United States</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between text-sm lg:pb-[2em]">
        <div className="flex flex-col lg:items-center justify-center lg:flex-row">
          <Link href="/" className="mr-[1em] mb-[.5em] lg:mb-0">
            Contact Us
          </Link>
          <Link href="/" className="mr-[1em] mb-[.5em] lg:mb-0">
            Press Resources
          </Link>
          <Link href="/" className="mr-[1em] mb-[.5em] lg:mb-0">
            Legal Info
          </Link>
          <Link href="/" className="mr-[1em] mb-[.5em] lg:mb-0">
            Privacy Policy
          </Link>
          <Link href="/" className="mr-[1em] mb-[.5em] lg:mb-0">
            Cookie Settings
          </Link>
          <Link href="/" className="mr-[1em] lg:mb-0">
            Imprint
          </Link>
        </div>
        <div className="flex items-center lg:justify-center my-[1em] lg:my-0">
          <p className="lg:mr-[1em] ml-[1em] lg:ml-0 order-last lg:order-first">Made in Berlin</p>
          <img src="/ableton.png" width={50} height={0} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
