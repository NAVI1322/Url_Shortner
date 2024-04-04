import { Inputbar } from "./inputbar";


export function Hero() {
  return (
    <div className=" flex items-center justify-center flex-col text-white ">
      <div className=" md:w-[1421px] w-[378px] flex  flex-col justify-center items-center space-y-5 ">
        <div className=" text-center lg:text-6xl md:text-5xl text-4xl p-2 bg-clip-text font-extrabold bg-gradient-to-r from-primaryBlue via-primaryPink via-25% to-primaryBlue text-transparent ">


          {`Shorten  Your  Loooonng Links :${")"}`}
        </div>

        <div className="text-center text-White font-Light text-base tracking-wide">
          Linkly is an efficient and easy-to-use URL shortening service that
          steamlines your online experience
        </div>

        <Inputbar />

        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-thin text-gray-900 dark:text-gray-300">
              Auto Paste for Clipboard
            </span>
          </label>
        </div>

        <div className="font-thin text-sm items-center inline-block text-center">
          You can create <span className="text-pink-900 font-bold mx-1">05</span> more links. <span className=" md:no-underline underline">Register Now </span> to enjoy Unlimited usage
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block ml-1 w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </div>

      </div>
    </div>
  );
}
