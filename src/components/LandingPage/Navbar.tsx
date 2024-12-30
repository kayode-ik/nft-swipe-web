"use client";

import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 px-6 py-4 flex items-center justify-between z-20">
      <div className="flex items-center space-x-6">
        <a href="/" className="text-white text-2xl font-bold">
          <Image
            src="/assets/icons/nftLogo.svg"
            alt="Logo"
            width={45}
            height={45}
          />
        </a>
        <a
          href="#rewards"
          className="text-white flex items-center space-x-2 hover:text-secondary"
        >
          <span>Rewards</span>
        </a>
        <a
          href="#airdrops"
          className="text-white flex items-center space-x-2 hover:text-secondary"
        >
          <span>Airdrops</span>
        </a>
        <a
          href="#collections"
          className="text-white flex items-center space-x-2 hover:text-secondary"
        >
          <span>Collections</span>
        </a>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Icons */}
      <div className="flex items-center space-x-10">
        <Image
          src="/assets/icons/cartIcon.svg"
          alt="Cart"
          width={40}
          height={40}
          className="text-white hover:text-secondary cursor-pointer"
        />
        <Image
          src="/assets/icons/walletIcon.svg"
          alt="Wallet"
          width={40}
          height={40}
          className="text-white hover:text-secondary cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
