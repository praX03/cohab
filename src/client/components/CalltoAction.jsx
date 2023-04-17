import React from "react";

const CalltoAction = () => {
  return (
    <section className="container m-auto px-6 md:px-12 my-32 lg:px-7 text-gray-500 dark:bg-gray-900">
      <div className="justify-center gap-6 text-center flex md:text-left lg:gap-16">
        <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
          <h1 className="text-3xl font-bold text-gray-800 md:text-5xl dark:text-white">
            Buy now and benefit up to
            <span className="text-primary dark:text-sky-300"> 30% off </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Be part of millions people around the world using tailus in modern
            User Interfaces.
          </p>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a
              href="#"
              className="group btn w-32 btn-ghost border-0 dark:bg-gray-600 hover:bg-yellow-100 "
            >
              <span className="group-hover:text-yellow-700 duration-200 relative text-base font-semibold text-primary dark:text-white">
                More about
              </span>
            </a>
            <a
              href="#"
              className="group btn w-32 border-0 border-slate-100 duration-200 bg-black text-white"
            >
              <span className="relative text-base font-semibold duration-200 dark:text-white">
                Shop now
              </span>
            </a>
          </div>
        </div>
        <div className="md:grid grid-cols-5 grid-rows-4 gap-4 hidden md:w-5/12 lg:w-2/5">
          <div className="col-span-2 row-span-4 bg-red-50 rounded-xl">
            {/* <img
                src=""
                className="rounded-full"
                width="640"
                height="960"
                alt="shoes"
                loading="lazy"
              /> */}
          </div>
          <div className="col-span-2 row-span-2 bg-slate-800 rounded-xl">
            {/* <img
                src=""
                className="h-full w-full rounded-xl object-cover object-top"
                width="640"
                height="640"
                alt="shoe"
                loading="lazy"
              /> */}
          </div>
          <div className="col-span-3 row-span-3 bg-cyan-500 rounded-md">
            {/* <img
                src=""
                className="h-full w-full rounded-xl object-cover object-top"
                width="640"
                height="427"
                alt="shoes"
                loading="lazy"
              /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;
