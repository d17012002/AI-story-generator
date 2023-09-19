import React, { useState } from "react";

const Navbar = ({ onEduchampClick, onDashboardClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold" onClick={() => onEduchampClick()} >
           <button> Educhamp </button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none focus:bg-blue-600 p-2"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden lg:flex space-x-4" onClick={() => onDashboardClick()}>
            <a href="#" className="text-white">
              Dashboard
            </a>
            <div className=" grid justify-items-end h-[100%]">
              <img
                className=" w-[1.5rem] sm:w-[1.5rem] rounded-full"
                src="https://i.pinimg.com/originals/e2/ff/74/e2ff7495b48676fb50c374f9f4db42bd.jpg"
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-4" onClick={() => onDashboardClick()}>
            <a href="#" className="block text-white py-2">
              Dashboard
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
