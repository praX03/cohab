import React from "react";
import logo from "../assets/react.svg";

const navMenu = ["Home", "Explore", "About"];

function navbar() {
  return (
    <nav className="w-full">
      <div className="container px-6 m-auto md:px-12 lg:px-7">
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-6 md:py-4 md:gap-0">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="hidden peer"
          />
          <div className="flex justify-between w-full md:w-max md:px-0">
            <a href="#" aria-label="logo">
              <img
                src={logo}
                className="w-12 transition md:w-14 grayscale dark:contrast-50 contrast-200 hover:grayscale-0"
                alt="roomy logo"
                width="10"
                height="30"
              />
            </a>

            <div className="flex items-center md:hidden max-h-10">
              <label
                role="button"
                for="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                className="relative z-40 px-2 py-3 sm:-mr-6"
              >
                <div
                  id="line"
                  className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
          </div>

          <label
            role="button"
            for="toggle_nav"
            className="fixed top-0 left-0 z-30 hidden w-full h-full bg-gray-700 bg-opacity-40 peer-checked:block md:peer-checked:hidden"
          ></label>

          <div className="fixed top-0 z-50 flex flex-col items-center justify-between w-4/5 h-full max-w-sm p-6 transition-all duration-500 bg-white md:flex-row gap-y-4 dark:bg-gray-800 md:w-8/12 md:gap-y-4 md:p-0 md:bg-transparent lg:w-7/12 -left-full peer-checked:left-0 md:left-0 md:h-auto md:max-w-none md:relative lg:first-letter:top-0">
            <div className="flex w-full pb-5 md:hidden">
              <a href="#" aria-label="logo">
                <img
                  src={logo}
                  className="w-12 md:14 grayscale contrast-200"
                  alt="tailus logo"
                  width="144"
                  height="68"
                />
              </a>
            </div>
            <div className="block w-full h-full md:h-auto">
              <ul className="space-y-8 font-medium tracking-wide md:flex md:space-y-0">
                {navMenu.map((navItem) => (
                  <li>
                    <a href="#" className="block md:px-3 group">
                      <div
                        className="relative text-gray-600
                                           before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300">
                          {navItem}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 md:flex-row">
              <button
                type="button"
                title="Start buying"
                className="duration-200 group dark:active:bg-yellow-800 dark:hocus:bg-yellow-900 active:bg-yellow-200 hocus:bg-yellow-100 btn btn-ghost"
              >
                <span className="text-gray-700 duration-200 dark:text-gray-300 group-hover:text-yellow-700 group-focus:text-yellow-700 dark:group-focus:text-yellow-100 dark:group-hover:text-yellow-100">
                  Login
                </span>
              </button>
              <button type="button" title="View More" className="bg-black btn">
                <span className="">View More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
