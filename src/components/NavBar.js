import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../components/images/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-12 w-12 rounded-full" src={logo} alt="Logo" />
            </Link>
            <div className=" text-xl md:text-2xl m-4">Michael Mount</div>
            <div className="hidden md:block">
              <div className="ml-96 flex">
                <Link
                  to="/aboutMe"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/aboutMe"
                      ? "shadow-sm shadow-black"
                      : "hover:shadow-sm hover:shadow-black"
                  }`}
                >
                  About Me
                </Link>
                <Link
                  to="/portfolio"
                  className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  ${
                    location.pathname === "/portfolio"
                      ? "shadow-sm shadow-black"
                      : "hover:shadow-sm hover:shadow-black"
                  }`}
                >
                  Portfolio
                </Link>
                <Link
                  to="/contact"
                  className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  ${
                    location.pathname === "/contact"
                      ? "shadow-sm shadow-black"
                      : "hover:shadow-sm hover:shadow-black"
                  }`}
                >
                  Contact Me
                </Link>
                <Link
                  to="/resume"
                  className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  ${
                    location.pathname === "/resume"
                      ? "shadow-sm shadow-black"
                      : "hover:shadow-sm hover:shadow-black"
                  }`}
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md  hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-transparent`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/aboutMe"
            className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-primary hover:bg-opacity-75"
          >
            About Me
          </Link>
          <Link
            to="/portfolio"
            className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-primary hover:bg-opacity-75"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-primary hover:bg-opacity-75"
          >
            Contact Me
          </Link>
          <Link
            to="/resume"
            className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-primary hover:bg-opacity-75"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
