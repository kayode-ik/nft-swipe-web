"use client";

import React, { useState } from "react";
import HeroSection from "../components/LandingPage/HeroSection";
import Navbar from "@/components/LandingPage/Navbar";
import Button from "@/shared/ButtonNft";
import CategoriesCarousel from "@/components/LandingPage/CategorySlider";
import Footer from "@/shared/Footer";
import TableNft from "@/shared/TableNft";

const headers = [
  "#",
  "Collection",
  "Floor Price",
  "Id Change",
  "Volume",
  "Sales",
  "Owners",
  "Items",
];

const data = [
  {
    id: 1,
    collection: {
      image: "/assets/images/collectionnft1.svg",
      name: "Bored Ape Yacht Club",
      icon: "/assets/icons/verifyIcon.svg",
    },
    floorPrice: 29,
    idChange: "-0.1%",
    volume: 198.58,
    sales: 6,
    owners: "5.53k",
    items: "10k",
  },
  {
    id: 2,
    collection: {
      image: "/assets/images/collectionnft2.svg",
      name: "Openpen Edition",
      icon: "/assets/icons/verifyIcon.svg",
    },
    floorPrice: 29,
    idChange: "+6.1%",
    volume: 198.58,
    sales: 6,
    owners: "5.53k",
    items: "10k",
  },
  {
    id: 3,
    collection: {
      image: "/assets/images/collectionnft3.svg",
      name: "Azuki",
      icon: "/assets/icons/verifyIcon.svg",
    },
    floorPrice: 29,
    idChange: "0.0%",
    volume: 198.58,
    sales: 6,
    owners: "5.53k",
    items: "10k",
  },
  {
    id: 4,
    collection: {
      image: "/assets/images/collectionnft4.svg",
      name: "Pudgy Penguins",
      icon: "/assets/icons/verifyIcon.svg",
    },
    floorPrice: 29,
    idChange: "-1.6%",
    volume: 198.58,
    sales: 6,
    owners: "5.53k",
    items: "10k",
  },
  {
    id: 5,
    collection: {
      image: "/assets/images/collectionnft5.svg",
      name: "Mutant Ape Yacht Club",
      icon: "/assets/icons/verifyIcon.svg",
    },
    floorPrice: 29,
    idChange: "-0.1%",
    volume: 198.58,
    sales: 6,
    owners: "5.53k",
    items: "10k",
  },
  {
    id: 6,
    collection: {
      image: "/assets/images/collectionnft6.svg",
      name: "Art Blocks",
      icon: "/assets/icons/verifyIcon.svg",
    },
    floorPrice: 29,
    idChange: "+6.1%",
    volume: 198.58,
    sales: 6,
    owners: "5.53k",
    items: "10k",
  },
  {
    id: 7,
    collection: {
      image: "/assets/images/collectionnft7.svg",
      name: "Nouns",
      icon: "/assets/icons/verifyIcon.svg",
    },
    floorPrice: 29,
    idChange: "0.1%",
    volume: 198.58,
    sales: 6,
    owners: "5.53k",
    items: "10k",
  },
];
const HomePage = () => {
  return (
    <div className="landing-container">
      {/* Navigation */}
      <Navbar />
      <HeroSection />
      <div className="body-container ml-10 mr-10">
        {/* Drops ============ */}
        <div className="mt-10">
          <h2 className="text-2xl font-medium">Drops</h2>
          <div className="drop-content mt-4 pl-10 pr-10">
            <div className="dropTop pt-5">
              <div className=" flex text-white gap-2">
                <h3 className=" text-2xl font-semibold tracking-wider">
                  XOCIETY Frontier
                </h3>{" "}
                <img
                  src="/assets/icons/verifyIcon.svg"
                  alt="car1"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
              </div>
              <div className="flex text-white gap-2">
                <h3 className="text-sm font-medium tracking-wide">
                  By XOSIETYofficial
                </h3>{" "}
                <img
                  src="/assets/icons/verifyIcon.svg"
                  alt="car1"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
              </div>
            </div>
            <div className="dropTextCont">
              <h6 className="text-sm font-semibold  text-white ">
                Open edition 0.00269 ETH
              </h6>
              <div className="dropBottom">
                <div className="dropInnerLeft">
                  <Button
                    text="Minting now"
                    bgColor="bg-button"
                    textColor="text-white"
                    onClick={() => alert("Button clicked!")}
                    width="152px"
                    height="50px"
                    className="mintBtn"
                  />
                </div>
                <div className="dropInnerRight">
                  <Button
                    text="view drop"
                    bgColor="bg-button"
                    textColor="text-white"
                    onClick={() => alert("Button clicked!")}
                    width="152px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recommend ============ */}
        <div className="mt-10">
          <h2 className="text-2xl font-medium mb-5 ">Recommend</h2>
          <div className="recommend-wrapper text-white">
            <div className="rec-content">
              <div className="rec-contentLeft">
                <img
                  src="/assets/images/recImg1.svg"
                  alt="rec1"
                  width={50}
                  height={50}
                  className="flex-shrink-0"
                />
                <div className="rec-contentText">
                  <div className="contentTop flex">
                    <span className="text-lg font-semibold">0N1 Force</span>{" "}
                    &nbsp;
                    <img
                      src="/assets/icons/verifyIcon.svg"
                      alt="car1"
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                  </div>
                  <div className="contentBtm">
                    <span className="text-sm font-light">
                      0N1 Force is a non-fungible token (NFT) collection
                      depicting 7,777 otherworldly warriors known as the 0N1
                      (pronounced OH-knee) ...
                    </span>
                  </div>
                </div>
              </div>
              <div className="rec-contentRight">
                <img
                  src="/assets/images/recImg2.svg"
                  alt="rec1"
                  width={300}
                  height={300}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Collections ============ */}
        <div className="mt-10">
          <h2 className="text-2xl font-medium">Collections</h2>
          <Tabs />
          {/* Table */}
          <div className="flex items-center justify-center mb-12">
            <Button
              text="See all collections"
              bgColor="bg-white"
              textColor="text-black"
              onClick={() => alert("Button clicked!")}
              width="180px"
              height="50px"
              className=" border border-gray-400"
            />
          </div>
        </div>
        {/* Categories ============ */}
        <div className="mt-10">
          <CategoriesCarousel />
        </div>
        {/* Top Collectors Buys Today ============ */}
        <div className="mt-10">
          <h2 className="text-2xl font-medium">Top Collectors Buys Today</h2>
          <div className="collector-wrapper mt-5 ">
            <div className="collector-content flex justify-between">
              <div className="collector-image shadow-lg  bg-white rounded-lg">
                <img
                  src="/assets/images/collectornft1.svg"
                  alt="cat1"
                  width={300}
                  height={280}
                  className="flex-shrink-0"
                />
                <div className="collector-contentText">
                  <div className="collector-contentTop flex gap-2">
                    <h3 className="text-lg font-medium">Openpen Edition</h3>
                    <img src="/assets/icons/verifyIcon.svg" alt="verify" />
                  </div>
                  <span className="text-sm font-light">0.03 ETH</span>
                </div>
              </div>
              <div className="cat-collector shadow-lg  bg-white rounded-lg">
                <img
                  src="/assets/images/collectornft2.svg"
                  alt="cat2"
                  width={300}
                  height={280}
                  className="flex-shrink-0"
                />
                <div className="cat-contentText">
                  <div className="collector-contentTop flex gap-2">
                    <h3 className="text-lg font-medium">Nakamigos</h3>
                    <img src="/assets/icons/verifyIcon.svg" alt="verify" />
                  </div>
                  <span className="text-sm font-light">0.03 ETH</span>
                </div>
              </div>
              <div className="cat-collector shadow-lg  bg-white rounded-lg">
                <img
                  src="/assets/images/collectornft3.svg"
                  alt="cat3"
                  width={300}
                  height={280}
                  className="flex-shrink-0"
                />
                <div className="collector-contentText">
                  <div className="collector-contentTop flex gap-2">
                    <h3 className="text-lg font-medium">Rug Radio</h3>
                    <img src="/assets/icons/verifyGreen.svg" alt="verify" />
                  </div>
                  <span className="text-sm font-light">0.03 ETH</span>
                </div>
              </div>
              <div className="collector-image shadow-lg  bg-white rounded-lg">
                <img
                  src="/assets/images/collectornft4.svg"
                  alt="cat4"
                  width={300}
                  height={280}
                  className="flex-shrink-0"
                />
                <div className="collector-contentText">
                  <div className="collector-contentTop flex gap-2">
                    <h3 className="text-lg font-medium">Dorkz</h3>
                    <img src="/assets/icons/verifyIcon.svg" alt="verify" />
                  </div>
                  <span className="text-sm font-light">0.03 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trending Collections ============ */}
        <div className="mt-10">
          <h2 className="text-2xl font-medium">Trending Collections</h2>
          <div className="collector-wrapper mt-5 ">
            <div className="collector-content flex justify-between">
              <div className="collector-image shadow-lg  bg-white rounded-lg">
                <img
                  src="/assets/images/trendingnft1.svg"
                  alt="cat1"
                  width={300}
                  height={280}
                  className="flex-shrink-0"
                />
                <div className="collector-contentText">
                  <div className="collector-contentTop flex gap-2">
                    <h3 className="text-lg font-medium">
                      Diary by Vinnie hager
                    </h3>
                    <img src="/assets/icons/verifyIcon.svg" alt="verify" />
                  </div>
                  <span className="text-sm font-light">0.03 ETH</span>
                </div>
              </div>
              <div className="cat-collector shadow-lg  bg-white rounded-lg">
                <img
                  src="/assets/images/trendingnft2.svg"
                  alt="cat2"
                  width={300}
                  height={280}
                  className="flex-shrink-0"
                />
                <div className="cat-contentText">
                  <div className="collector-contentTop flex gap-2">
                    <h3 className="text-lg font-medium">Quirkies Originals</h3>
                    <img src="/assets/icons/verifyIcon.svg" alt="verify" />
                  </div>
                  <span className="text-sm font-light">0.03 ETH</span>
                </div>
              </div>
              <div className="cat-collector shadow-lg  bg-white rounded-lg">
                <img
                  src="/assets/images/trendingnft3.svg"
                  alt="cat3"
                  width={300}
                  height={280}
                  className="flex-shrink-0"
                />
                <div className="collector-contentText">
                  <div className="collector-contentTop flex gap-2">
                    <h3 className="text-lg font-medium">Ekos Genesis</h3>
                    <img src="/assets/icons/verifyIcon.svg" alt="verify" />
                  </div>
                  <span className="text-sm font-light">0.03 ETH</span>
                </div>
              </div>
              <div className="collector-image shadow-lg  bg-white rounded-lg">
                <img
                  src="/assets/images/trendingnft4.svg"
                  alt="cat4"
                  width={300}
                  height={280}
                  className="flex-shrink-0"
                />
                <div className="collector-contentText">
                  <div className="collector-contentTop flex gap-2">
                    <h3 className="text-lg font-medium">ZTX Genesis Homes</h3>
                    <img src="/assets/icons/verifyIcon.svg" alt="verify" />
                  </div>
                  <span className="text-sm font-light">0.03 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* NFT Loan ============ */}
        <div className="nftloan-wrapper mt-10">
          <div className="nftLoan-heading text-center mb-8">
            <h2 className="text-2xl font-medium p-4 text-[#614BC3]">
              NFT Loan
            </h2>
            <span className="text-[#614BC3]">
              A new way to leverage your assets
            </span>
          </div>
          <div className="nftLoan-body text-center">
            <div className="textF w-[150px] font-light">
              <h6 className="text-sm text-white mb-2 tracking-wider">
                Total borrowed
              </h6>
              <p className="text-sm text-white tracking-wider">61,521.12</p>
            </div>
            <div className="textS w-[150px] font-light">
              <h6 className="text-sm text-white mb-2 tracking-wider">
                Loans num
              </h6>
              <p className="text-sm text-white tracking-wider">16,754</p>
            </div>
            <div className="textT w-[150px] font-light">
              <h6 className="text-sm text-white mb-2 tracking-wider">
                Recent APR
              </h6>
              <p className="text-sm text-white tracking-wider">110.20%</p>
            </div>
            <div className="textFth w-[150px] font-light">
              <h6 className="text-sm text-white mb-2 tracking-wider">
                Accrued interest
              </h6>
              <p className="text-sm text-white tracking-wider">993.45</p>
            </div>
          </div>
        </div>
      </div>

      <div className="nftLoan-footer mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Top");

  const tabs = ["Top", "Opensea", "Blur", "LooksRare"];

  return (
    <div className="p-8">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${
              activeTab === tab
                ? "text-black border-b-2 border-black"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Top" && (
        <div>
          <h1 className="text-xl font-bold mb-4 mt-6">Top Collections</h1>
          <TableNft headers={headers} data={data} />
        </div>
      )}

      {activeTab !== "Top" && (
        <div className="mt-6 text-gray-500 text-center">
          <p>No data available for {activeTab}.</p>
        </div>
      )}
    </div>
  );
};
