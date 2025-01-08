import React from "react";
import { motion } from "framer-motion";



const CategoriesCarousel = () => {
  return (
    <div className="mt-10 overflow-hidden ">
      <h2 className="text-2xl font-medium">Categories</h2>
      <div className="cat-wrapper mt-5 relative overflow-hidden pb-4">
        <motion.div
          className="cat-content flex"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          
         
        >
          {[
            { src: "/assets/images/catnft1.svg", label: "Art" },
            { src: "/assets/images/catnft2.svg", label: "Gaming" },
            { src: "/assets/images/catnft3.svg", label: "Music" },
            { src: "/assets/images/catnft4.svg", label: "Photography" },
            { src: "/assets/images/catnft5.svg", label: "Membership" },
            { src: "/assets/images/catnft6.svg", label: "PFPs" },
          ].map((category, index) => (
            <div
              key={index}
              className="cat-image shadow-lg bg-white rounded-lg flex-shrink-0 mx-2"
              style={{ minWidth: "300px" }}
            >
              <img
                src={category.src}
                alt={`cat${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
              <div className="cat-contentText text-center mt-2">
                <h3 className="text-lg font-medium">{category.label}</h3>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {[
            { src: "/assets/images/catnft1.svg", label: "Art" },
            { src: "/assets/images/catnft2.svg", label: "Gaming" },
            { src: "/assets/images/catnft3.svg", label: "Music" },
            { src: "/assets/images/catnft4.svg", label: "Photography" },
            { src: "/assets/images/catnft5.svg", label: "Membership" },
            { src: "/assets/images/catnft6.svg", label: "PFPs" },
          ].map((category, index) => (
            <div
              key={`duplicate-${index}`}
              className="cat-image shadow-lg bg-white rounded-lg flex-shrink-0 mx-2"
              style={{ minWidth: "300px" }}
            >
              <img
                src={category.src}
                alt={`cat${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
              <div className="cat-contentText text-center mt-2">
                <h3 className="text-lg font-medium">{category.label}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesCarousel;
