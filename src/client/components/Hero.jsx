import logo from "../assets/react.svg";
import Waitlist from "./WaitList.jsx";

function hero() {
  return (
    <section className="dark:bg-gray-900">
      <div className="relative w-full min-h-[80vh] flex flex-col">
        <div className="container m-auto px-6 md:px-12 lg:py-0 lg:px-7">
          <div className="flex items-center flex-wrap gap-12 lg:gap-0">
            <div className="lg:w-5/12 space-y-8">
              <span className="flex space-x-2">
                <span className="block w-14 mb-2 border-b-2 border-gray-600"></span>
                <span className="font-medium text-gray-600 dark:text-gray-400">
                  Hello Welcome to
                </span>
              </span>
              <h1 className="text-4xl font-bold md:text-6xl dark:text-white">
                The New <br /> Way To Discover Roomates
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet elit. Vero, repellat!
              </p>

              <div className="flex space-x-4">
                <Waitlist
                  className="btn btn-lg bg-black rounded-md"
                  actionText="Join Waitlist"
                  formUrl="https://vs66tle9of7.typeform.com/to/wypUfv8a"
                />
                <button
                  type="button"
                  title="Start buying"
                  className="group btn btn-ghost btn-lg dark:active:bg-yellow-800 dark:hocus:bg-yellow-900 active:bg-yellow-200 hocus:bg-yellow-100 duration-200"
                >
                  <span className="block text-gray-700 duration-200 dark:text-white font-semibold group-focus:text-yellow-700 group-hover:text-yellow-700 dark:group-focus:text-yellow-100 dark:group-hover:text-yellow-100">
                    About Us
                  </span>
                </button>
              </div>
            </div>

            <div className="hidden relative lg:block lg:w-7/12 translate-x-[15%]">
              <div
                aria-hidden="true"
                className="inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-yellow-200"
              ></div>
              {/* <img src= className="relative ml-auto" alt="" /> */}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="container m-auto px-6 flex items-end justify-between md:px-12 lg:px-7">
            <a href="" className="hidden space-x-4 md:flex md:items-center">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src={logo}
                alt=""
              />
              <div className="text-gray-600 dark:text-gray-400">
                <span className="text-sm">Question ?</span>
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                  Wanna Contact Us?
                </p>
              </div>
            </a>
            <div>
              <a
                href="#"
                className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
              >
                Facebook /
              </a>
              <a
                href="#"
                className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
              >
                YouTube /
              </a>
              <a
                href="#"
                className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
