import React from "react";
import Image from "next/image";

const SearchBar: React.FC = () => {
  return (
    <div className="relative flex items-center w-[40%] bg-transparent border-[.5px] border-white rounded-lg overflow-hidden">
      {/* Search Icon */}
      <div className="absolute left-2 flex items-center justify-center">
        <Image
          src="/assets/icons/searchIcon.svg"
          alt="Search Icon"
          width={20}
          height={20}
        />
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-10 py-2 text-white bg-transparent border-none outline-none placeholder-white focus:ring-0"
      />

      {/* Filter Icon */}
      <div className="absolute right-2 flex items-center justify-center">
        <Image
          src="/assets/icons/filterIcon.svg"
          alt="Filter Icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default SearchBar;
