import React, { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className="flex flex-row w-full">
        {/* Logo */}
        <h1 className="font-bold pl-5 md:pl-10 pt-5 flex-1 text-left md:text-left">
          PURESPACE
        </h1>

        <div className="flex-1 flex justify-center items-center w-full">
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row justify-between p-5 w-full bg-gray-200 rounded-3xl mt-3">
            <p>Home</p>
            <p>Catalogue</p>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>

          {/* Dropdown for small screens */}
          <div className="flex md:hidden relative w-full">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="p-3 md:p-5 w-full bg-gray-200 rounded-3xl mt-3 text-center"
            >
              Menu
            </button>
            {showDropdown && (
              <div className="absolute top-full mt-2 w-full bg-gray-200 rounded-3xl p-3">
                <p className="p-2">Home</p>
                <p className="p-2">Catalogue</p>
                <p className="p-2">About Us</p>
                <p className="p-2">FAQ</p>
                <p className="p-2">Contact</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side (HOME) */}
        <div className="flex flex-1 justify-end md:justify-end w-full">
          <h1 className="font-bold pr-10 pt-5 w-full text-right md:text-right">
            HOME
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
