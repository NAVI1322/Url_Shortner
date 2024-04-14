import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inputbar } from "./inputbar";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export function Hero({theme}:any) {

  return (
    <div className={` flex items-center justify-center flex-col text-White ${theme && "dark"} `}>
      <div className=" md:w-[1421px] w-[378px] flex  flex-col justify-center items-center space-y-5 ">
        <div className=" text-center lg:text-6xl md:text-5xl text-4xl p-2 bg-clip-text font-sfBold bg-gradient-to-r dark:from-primaryBlue dark:via-primaryPink via-25% dark:to-primaryBlue via-primaryPink from-blue-500 to-blue-500 text-transparent ">
          {`Shorten  Your  Loooonng Links :${")"}`}
        </div>

        <div className="text-center text-black dark:text-white font-Light text-base tracking-wide">
          Linkly is an efficient and easy-to-use URL shortening service that
          steamlines your online experience
        </div>

        <Inputbar theme={theme} />

        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none  rounded-full peer dark:bg-gray-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-thin dark:text-gray-300 text-slate-600">
              Auto Paste for Clipboard
            </span>
          </label>
        </div>
        <div className="dark:text-White text-md font-Light items-center inline-block text-center text-slate-600">
          You can create <span className="text-pink-600 font-bold mx-1">05</span> more links. <span className=" md:no-underline underline font-Bold text-slate-600 dark:text-white">Register Now </span> to enjoy Unlimited usage
          <FontAwesomeIcon className="ml-1" icon={faCircleQuestion} />
        </div>

      </div>
    </div>
  );
}
