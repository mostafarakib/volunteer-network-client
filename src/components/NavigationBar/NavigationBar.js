import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../images/logos/autodraw_1_5_2023-removebg-preview.png";
import "./NavigationBar.scss";

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const location = useLocation();
  const currentRoute = location.pathname.toLowerCase();

  useEffect(() => {
    // Check if the current location is the homepage route
    if (location.pathname === "/") {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  }, [location]);
  return (
    <nav
      className={`${
        isTransparent
          ? "bg-transparent fixed top-0 left-0 w-full z-10"
          : "bg-white"
      } border-gray-200 px-2 sm:px-4 py-2.5`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <NavLink to={"/"} className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-10" alt="Logo" />
        </NavLink>
        <div className="flex items-center md:order-2">
          {!isLoggedIn ? (
            <div>
              <button type="button" className="login-button">
                Login
              </button>
              <button type="button" className="login-button grey-bg">
                Admin
              </button>
            </div>
          ) : (
            <div>
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="user"
                />
              </button>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul
            className={`${
              isTransparent ? "bg-transparent" : "bg-white"
            } flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 `}
          >
            <li>
              <NavLink
                className={
                  currentRoute === "/" ? "navlink navlink-active" : "navlink"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  currentRoute.includes("donation")
                    ? "navlink navlink-active"
                    : "navlink"
                }
                to={"/donation"}
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  currentRoute.includes("events")
                    ? "navlink navlink-active"
                    : "navlink"
                }
                to={"/events"}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  currentRoute.includes("blogs")
                    ? "navlink navlink-active"
                    : "navlink"
                }
                to={"/blogs"}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  currentRoute.includes("about")
                    ? "navlink navlink-active"
                    : "navlink"
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
