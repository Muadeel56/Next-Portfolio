import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto  h-screen flex flex-col items-center justify-center gap-4">
      <div className="mt-36 ">
        <Image
          src={assets.profile_img}
          alt="logo"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo ">
        Hi, I'm Muhammad Adeel{" "}
        <Image src={assets.hand_icon} alt="logo" className="w-8" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full Stack Web Developer based in Chakwal.
      </h1>
      <p className="max-2xl mx-auto font-Ovo">
        I am a Full Stack Developer from Chakwal, Pakistan with more than 1 year
        of experience in multiple companies like Location Technologies, Pukhtoon
        Solutions Hub and QTO House.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-2  "
        >
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="logo" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500
         flex items-center gap-2"
        >
          My Resume{" "}
          <Image src={assets.download_icon} alt="logo" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
