"use client"

import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(/assets/images/heroNft2.png)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-xl mb-8">Join us and explore the world of NFTs</p>
        
        {/* Call to Action Buttons */}
        <div className="flex space-x-4">
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
        
        {/* Images below the Hero Section */}
        <div className="mt-8">
          <Image
            src="/path/to/your/image.png" 
            alt="Some image"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
