import React from "react";
import logo from "../assets/react.svg";
function hero() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="relative w-full">
        <div class="min-h-[80vh] flex flex-col">
          <div class="container m-auto px-6 md:px-12 lg:py-0 lg:px-7">
            <div class="flex items-center flex-wrap gap-12 lg:gap-0">
              <div class="lg:w-5/12 space-y-8">
                <span class="flex space-x-2">
                  <span class="block w-14 mb-2 border-b-2 border-gray-600"></span>
                  <span class="font-medium text-gray-600 dark:text-gray-400">
                    Hello Welcome to
                  </span>
                </span>
                <h1 class="text-4xl font-bold md:text-6xl dark:text-white">
                  The New <br /> Way To Discover Roomates
                </h1>
                <p class="text-xl text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet elit. Vero, repellat!
                </p>

                <div class="flex space-x-4">
                  <button
                    type="button"
                    title="Start buying"
                    class="btn btn-lg bg-black rounded-md"
                  >
                    <span class="">Explore</span>
                  </button>
                  <button
                    type="button"
                    title="Start buying"
                    class="group btn btn-ghost btn-lg dark:active:bg-yellow-800 dark:hocus:bg-yellow-900 active:bg-yellow-200 hocus:bg-yellow-100 duration-200"
                  >
                    <span class="block text-gray-700 duration-200 dark:text-white font-semibold group-focus:text-yellow-700 group-hover:text-yellow-700 dark:group-focus:text-yellow-100 dark:group-hover:text-yellow-100">
                      About Us
                    </span>
                  </button>
                </div>
              </div>

              <div class="hidden relative lg:block lg:w-7/12">
                <div
                  aria-hidden="true"
                  class="inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-yellow-200"
                ></div>
                {/* <img src= class="relative ml-auto" alt="" /> */}
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="container m-auto px-6 flex items-end justify-between md:px-12 lg:px-7">
              <a href="" class="hidden space-x-4 md:flex md:items-center">
                <img
                  class="w-14 h-14 rounded-full object-cover"
                  src={logo}
                  alt=""
                />
                <div class="text-gray-600 dark:text-gray-400">
                  <span class="text-sm">Question ?</span>
                  <p class="font-semibold text-gray-700 dark:text-gray-300">
                    Wanna Contact Us?
                  </p>
                </div>
              </a>
              <div>
                <a
                  href="#"
                  class="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
                >
                  Facebook /
                </a>
                <a
                  href="#"
                  class="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
                >
                  YouTube /
                </a>
                <a
                  href="#"
                  class="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
