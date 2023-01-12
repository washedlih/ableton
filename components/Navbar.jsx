import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";
import Icon from "../public/logo";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
      }
      if (buttonRef.current.contains(e.target)) {
        setNav(!nav);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="w-full py-[20px] px-[20px] xl:px-[40px] border-b-2 border-black/10 bg-white max-w-[1600px] flex justify-between items-center font-bold text-xl lg:text-base">
      <div className="flex justify-center items-center">
        <Link href="/" className="z-50 lg:fill-black mr-[30px] lg:mr-0">
          <Icon className={nav ? "fill-white lg:fill-black" : "fill-black"} width="60" />
        </Link>
        <div
          ref={buttonRef}
          className="lg:hidden cursor-pointer flex justify-center items-center z-50"
        >
          <button className={nav ? "text-white font-normal" : "text-black font-normal"}>
            Menu
          </button>
          {nav ? (
            <AiFillCaretUp className="ml-[6px] text-white" size={12} />
          ) : (
            <AiOutlineCaretDown className="ml-[6px]" size={12} />
          )}
        </div>
        <div
          ref={menuRef}
          className={
            nav
              ? "absolute left-0 top-0 w-full bg-[#0000ff] z-40 duration-500 ease-in-out lg:hidden text-white px-4 pt-[70px]"
              : "absolute left-0 top-[-150%] w-full bg-[#0000ff] z-40 duration-500 ease-in-out lg:hidden text-white px-4"
          }
        >
          <div>
            <ul>
              <li className="mb-5">
                <Link href="/">Live</Link>
              </li>
              <li className="mb-5">
                <Link href="/">Push</Link>
              </li>
              <li className="mb-5">
                <Link href="/">Note</Link>
              </li>
              <li className="mb-5">
                <Link href="/">Link</Link>
              </li>
              <li className="mb-5">
                <Link href="/">Shop</Link>
              </li>
              <li className="mb-5">
                <Link href="/">Packs</Link>
              </li>
              <li className="mb-5">
                <Link href="/">Help</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Try Live for free</Link>
              </li>
              <li className="mb-5 font-normal text-[14px]">
                <Link href="/">Log in or register</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h2>More on Ableton.com:</h2>
              <li>
                <Link href="/" className="font-normal text-[14px]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="font-normal text-[14px]">
                  Ableton for the Classroom
                </Link>
              </li>
              <li>
                <Link href="/" className="font-normal text-[14px]">
                  Ableton for Colleges and Universities
                </Link>
              </li>
              <li>
                <Link href="/" className="font-normal text-[14px]">
                  Certified Training
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#ff764d] font-normal text-[14px]">
                  About Ableton
                </Link>
              </li>
              <li>
                <Link href="/" className="font-normal text-[14px]">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/" className="font-normal text-[14px]">
                  Apprenticeships
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="overflow-auto mt-5 flex font-normal text-[14px] pb-3">
              <li className="mr-3 min-w-[16em]">
                <Link href="/">
                  <h2 className="font-bold">Loop</h2>
                  <p>
                    Watch Talks, Performances and Features from Ableton's Summit for Music Makers
                  </p>
                </Link>
              </li>
              <li className="pr-3 min-w-[15em]">
                <Link href="/">
                  <h2 className="font-bold">Learning Music</h2>
                  <p>Learn the fundamentals of music making right in your browser.</p>
                </Link>
              </li>
              <li className="pr-3 min-w-[15em]">
                <Link href="/">
                  <h2 className="font-bold">Learning Synths</h2>
                  <p>
                    Get started with synthesis using a web-based synth and accompanying lessons.
                  </p>
                </Link>
              </li>
              <li className="min-w-[15em]">
                <Link href="/">
                  <h2 className="font-bold">Making Music</h2>
                  <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="hidden lg:flex justify-center items-center pl-[40px] ">
          <li>
            <Link href="/" className="mr-[20px]">
              Live
            </Link>
          </li>
          <li>
            <Link href="/" className="mx-[20px]">
              Push
            </Link>
          </li>
          <li>
            <Link href="/" className="mx-[20px]">
              Note
            </Link>
          </li>
          <li>
            <Link href="/" className="mx-[20px]">
              Link
            </Link>
          </li>
          <li>
            <Link href="/" className="mx-[20px]">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/" className="mx-[20px]">
              Packs
            </Link>
          </li>
          <li>
            <Link href="/" className="mx-[20px]">
              Help
            </Link>
          </li>
          <li>
            <Link href="/" className="mx-[20px] text-[#ff764d]">
              More +
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="hidden lg:flex">
          <li>
            <Link href="/" className="mx-[10px] text-[#0000ff]">
              Try Live for free{" "}
            </Link>
          </li>
          <li>
            <Link href="/" className="mx-[10px]">
              Log in or register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
