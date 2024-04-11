import { CalendarIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Table = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [TableData, setTableData] = useState([{}])
  const [params] = useSearchParams();

  const id = params.get("id")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/fetchurl", {
          params: {
            id: id
          }, headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        });

        setTableData(response.data.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
  };


  return (
    <div className="flex items-center justify-center m-4">
      {/* Table */}
      <table className="table-auto md:w-[84%] rounded-t-lg overflow-hidden w-[376px] ">
        <thead className="h-[63px]">
          <tr className="text-left text-md  bg-tableheadgrey  text-tabletext text-base text-White dark:text-white ">
            {/* Table Headers */}
            <th className="p-4 font-sfBold text-White">Short Link</th>
            <th className="p-4 hidden font-sfBold text-White sm:table-cell">Original Link</th>
            <th className="p-4 hidden font-sfBold text-White sm:table-cell">QR Code</th>
            <th className="p-4 hidden font-sfBold text-White md:table-cell">Clicks</th>
            <th className="p-4 hidden font-sfBold text-White md:table-cell">Status</th>
            <th className=" p-4 font-sfBold">
              <div className="flex items-center gap-2 text-White hidden md:flex">
                Date<CalendarIcon />
              </div>
            </th>
          </tr>
        </thead>
        <tbody  >
          {TableData.map(res =>
            <tr className="bg-tablerowgrey text-White  text-md h-[63px] dark:text-White font-Light">
              {/* Table Data */}
              <td className="p-4  truncate " ><a href={`http://localhost:3000/api/v1/Shorturl/${res.shortLink}`} target={`http://localhost:3000/api/v1/Shorturl/${res.shortLink}`} className="hover:to-blue-950 " >{res.shortLink}</a></td>
              <td className="p-4 hidden sm:table-cell max-w-xs overflow-hidden overflow-ellipsis">{res.ogLink}</td>
              <td className="p-4 hidden sm:table-cell">Null</td>
              <td className="p-4 hidden md:table-cell">{res.clickCount}</td>
              <td className="p-4 hidden md:table-cell text-green-500">{res.status}</td>
              <td className="p-4">
                {/* Toggle Button */}
                <span className="sm:hidden">
                  {" "}
                  {/* Hide content on small screens */}
                  <button
                    onClick={toggleModal}
                    className=" bg-Grey rounded-full p-2 hover:ring-1 hover:ring-gray-100 ease-out duration-500  outline-none"
                  >
                    <ChevronDownIcon />
                  </button>
                </span>
                <span className="hidden md:inline">
                  {" "}
                  {formatDate(res.createdAt)}

                </span>
              </td>
            </tr>)}

        </tbody>
      </table>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-75 ">
          <div className=" rounded-md bg-tableheadgrey  text-tabletext  font-thin">
            <div onClick={toggleModal} className="flex justify-end p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer hover:text-slate-200   "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <hr />




            <div className="max-w-sm p-6 bg-white border flex  flex-col items-center text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg className="w-7 h-7 text-gray-300 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>
              <a href="#">
                <h4 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">ShortLink</h4>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"></h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
              <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                See our guideline
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
              </a>
            </div>



          </div>
        </div>

      )}
    </div>
  );
};
