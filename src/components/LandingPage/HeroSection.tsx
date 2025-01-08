"use client";

import React from "react";
import Image from "next/image";
import Button from "@/shared/ButtonNft";
import "../../styles/landingPage.css";

const HeroSection: React.FC = () => {
  return (
    <section
        className="relative bg-cover bg-center h-screen"
    //   className="relative bg-cover bg-bottom h-[80vh]"
      style={{ backgroundImage: `url(/assets/images/heroNft2.png)` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white z-10 ml-10 mr-10 mt-12">
        <h3 className="text-5xl font-bold mb-2">
          Discover,collect and create your own
        </h3>
        <h3 className="text-5xl font-bold mb-6">digital masterpiece.</h3>

        {/* small text */}
        <p className=" text-base mb-8 tracking-wide font-light">
          Best marketplace for crypto collectibles
        </p>

        {/* Call to Action Buttons */}
        <div className="flex space-x-4">
          <Button
            text="Creat"
            bgColor="bg-button"
            textColor="text-white"
            onClick={() => alert("Button clicked!")}
            width="152px"
            height="50px"
          />
          <Button
            text="Explor"
            bgColor="bg-transparent"
            textColor="text-[#33BBC5]"
            imgIcon="/assets/icons/explorIcon.svg"
            iconPosition="left"
            onClick={() => alert("Button clicked!")}
            width="152px"
            height="50px"
            border="2px solid #33BBC5"
          />
        </div>

        {/* Images below the Hero Section */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12">
          <div className="img1">
            <Image
              src="/assets/images/nftcarousel1.svg"
              alt="carousel1"
              width={300}
              height={300}
              className="flex-shrink-0"
            />
            {/* glass border text */}
            <div className="textBottom flex gap-2">
              <span className="text-sm font-medium">Ekos Genesis</span>
              <div className="imageText">
                <Image
                  src="/assets/icons/verifyIcon.svg"
                  alt="carousel1"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="img2">
            <Image
              src="/assets/images/nftcarousel2.svg"
              alt="carousel2"
              width={300}
              height={300}
              className="flex-shrink-0"
            />
            {/* glass border text */}
            <div className="textBottom flex gap-2">
              <span className="text-sm font-medium">Di Animals</span>
              <div className="imageText">
                <Image
                  src="/assets/icons/verifyIcon.svg"
                  alt="carousel1"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="img3">
            <Image
              src="/assets/images/nftcarousel3.svg"
              alt="carousel3"
              width={300}
              height={300}
              className="flex-shrink-0"
            />
            {/* glass border text */}
            <div className="textBottom flex gap-2">
              <span className="text-sm font-medium">Kursed society</span>
              <div className="imageText">
                <Image
                  src="/assets/icons/verifyIcon.svg"
                  alt="carousel1"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="img4">
            <Image
              src="/assets/images/nftcarousel4.svg"
              alt="carousel4"
              width={300}
              height={300}
              className="flex-shrink-0"
            />
            {/* glass border text */}
            <div className="textBottom flex gap-2">
              <span className="text-sm font-medium">San origin</span>
              <div className="imageText">
                <Image
                  src="/assets/icons/verifyIcon.svg"
                  alt="carousel1"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
