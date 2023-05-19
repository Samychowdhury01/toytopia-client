import React from "react";
import Marquee from "react-fast-marquee";
import sponsor1 from "../../../assets/images/Sponsors/Sponsor1.png";
import sponsor2 from "../../../assets/images/Sponsors/Sponsor2.jpeg";
import sponsor3 from "../../../assets/images/Sponsors/Sponsor3.png";
import sponsor4 from "../../../assets/images/Sponsors/Sponsor4.png";
import sponsor5 from "../../../assets/images/Sponsors/Sponsor5.png";
import sponsor6 from "../../../assets/images/Sponsors/Sponsor6.png";

const Sponsors = () => {
  return (
    <div className="my-32 p-5">
      <div className="text-center space-y-5 mb-12">
        <h1 className="text-center text-5xl font-extrabold ">
          Meet Our Sponsors
          <span className="text-[#FFBB00] font-extrabold">.</span>
        </h1>
        <p className="md:w-1/2 mx-auto text-gray-00">
          We are proud to introduce and extend our heartfelt gratitude to our
          esteemed sponsors who have generously supported us in making this
          event possible.
        </p>
      </div>

      <Marquee gradient gradientWidth={50}>
        <div className="h-[200px] bg-black mx-8">
          <img
            src={sponsor1}
            alt="sponsors-image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-[200px] mx-8">
          <img
            src={sponsor2}
            alt="sponsors-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[200px] mx-8">
          <img
            src={sponsor3}
            alt="sponsors-image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-[200px] mx-8">
          <img
            src={sponsor4}
            alt="sponsors-image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-[200px] mx-8">
          <img
            src={sponsor5}
            alt="sponsors-image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-[200px] mx-8">
          <img
            src={sponsor6}
            alt="sponsors-image"
            className="w-full h-full object-contain"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsors;
