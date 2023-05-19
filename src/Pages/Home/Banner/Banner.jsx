import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/images/banner/banner-img.jpg";
const Banner = () => {
  return (
    <div className="md:h-[680px] bg-black text-white flex flex-col-reverse md:flex-row items-center gap-5 p-10">
      <div className="md:w-1/2 md:ml-16 space-y-5">
        <h1 className="text-5xl font-bold">
          Discover Magical Adventures
          <span className="text-[#FFBB00] font-extrabold">.</span>
        </h1>
        <p className="text-[#B3B3B3]">
          Step into a world of wonder and imagination with our enchanting
          collection of toys that will spark the imagination of children and
          transport them to extraordinary worlds.
        </p>
        
          <Link to='/toys' className="btn btn-warning normal-case">Discover All Toys</Link>
        
      </div>
      <div className="md:w-1/2">
        <div className="w-full h-full">
          <img src={bannerImg} alt="banner-image" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

