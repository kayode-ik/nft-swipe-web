"use client";

import React from "react";
import HeroSection from "../components/LandingPage/HeroSection";
import Navbar from "@/components/LandingPage/Navbar";

const HomePage = () => {
  return (
    <div className="landing-container">
      {/* Navigation */}
      <Navbar />
      <HeroSection />
      {/* Add your landing page content here */}
    </div>
  );
};

export default HomePage;
