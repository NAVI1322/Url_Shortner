import Button from "./button";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";



export const Inputbar = ({ theme }: any) => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const [urlInput, SetUrlInput] = useState("");
  const [error, setError] = useState(false);


  const closeModal = () => {
    setError(false)
  }



  const stringIsAValidUrl = (s: string) => {
    try {
      new URL(s);
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleClick = async () => {
    try {


      if (!stringIsAValidUrl(urlInput)) {
        setError(true); // Set error state if URL pattern doesn't match
        return; // Stop further execution
      }

      await axios.post(
        "http://localhost:3000/api/v1/Shorten",
        {
          originalUrl: urlInput,
          user: {
            id: id,
          },
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      window.location.reload();
    } catch (error) {
      console.error("Error shortening URL", error);
    }
  };

  return (
    <div className={`w-full sm:w-4/5 md:w-2/5 lg:w-1/2  flex flex-row gap-2 justify-center ${theme && "dark"}`}>
      <Button variant="secondary" className="w-full border-4 px-[4px] py-[4px]">
        <FontAwesomeIcon className="m-4 mr-2 " icon={faLink} />
        <input
          style={{ fontFamily: 'Light' }}
          className="bg-[#8d8d8d] dark:bg-[#5f5f5f] w-full focus:outline-none tracking-wide text-md placeholder:text-white"
          placeholder="Enter the link here"
          onChange={(e) => SetUrlInput(e.target.value)}
        />
        <Button onClick={handleClick} variant="primary" className="m-0 w-56 hidden sm:flex">
          Shorten Now!
        </Button>
        <Button onClick={handleClick} variant="round" className="sm:hidden">
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Button>
      {error && <div className={`fixed z-10 inset-0 overflow-y-auto  ${error ? '' : 'hidden'}`}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center  sm:block sm:p-0" >
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-tableheadgrey  rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="w-52 md:w-auto">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg className="h-6 w-6 text-red-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-slate-200" id="modal-headline">
                  Error
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Invalid Url
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-300 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm" onClick={closeModal}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};
