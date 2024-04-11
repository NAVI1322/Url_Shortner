import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inputbar } from "./inputbar";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export function Hero() {

  return (
    <div className=" flex items-center justify-center flex-col text-White ">
      <div className=" md:w-[1421px] w-[378px] flex  flex-col justify-center items-center space-y-5 ">
        <div className=" text-center lg:text-6xl md:text-5xl text-4xl p-2 bg-clip-text font-sfBold bg-gradient-to-r from-primaryBlue via-primaryPink via-25% to-primaryBlue text-transparent ">
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
        <div className="text-White text-md font-Light items-center inline-block text-center">
          You can create <span className="text-pink-600 font-bold mx-1">05</span> more links. <span className=" md:no-underline underline font-Bold">Register Now </span> to enjoy Unlimited usage
          <FontAwesomeIcon className="ml-1" icon={faCircleQuestion} />
        </div>

      </div>
    </div>
  );
}
