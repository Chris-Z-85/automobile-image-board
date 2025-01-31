import { Link, useLocation } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { FaHome, FaPlus, FaSun } from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [colorMode, setColorMode] = useState("light");

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex h-16 items-center justify-between sm:flex-row">
        {location.pathname === "/create" ? (
          <Link to="/">
            <FaHome className="text-3xl" />
          </Link>
        ) : (
          <div></div>
        )}
        <div className="text-3xl flex space-x-2">
          <Link to="/create">
            <button className="h-10 w-10 flex items-center justify-center rounded hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer">
              <FaPlus className="text-lg" />
            </button>
          </Link>
          <button
            onClick={toggleColorMode}
            className="h-10 w-10 flex text-red items-center justify-center rounded hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
          >
            {colorMode === "light" ? (
              <IoMoon />
            ) : (
              <FaSun className="text-3xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
