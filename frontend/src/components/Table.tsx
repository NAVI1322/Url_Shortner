import { CalendarIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QRCode from 'qrcode.react';

export const Table = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [size, Setsize] = useState(70)

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

        const copyToClipboard = async (text: string) => {
          try {
            await navigator.clipboard.writeText(text);
          } catch (error) {
            console.error('Failed to copy text to clipboard:', error);
          }
        };

        const requestUrl = response.config.url;
        const { protocol, host, } = new URL(requestUrl);

        setTableData(response.data.data);
        copyToClipboard(`${protocol}//${host}/${response.data.data[0].shortLink}`);

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
      <table className="table-auto md:w-[84%] rounded-t-lg overflow-hidden w-[376px] text-sm  ">
        <thead className="h-[63px] text-sm">
          <tr className="text-left text-md  bg-tableheadgrey  text-tabletext  text-White dark:text-white  ">
            {/* Table Headers */}
            <th className="p-4 font-sfBold text-White">Short Link</th>
            <th className="p-4 hidden font-sfBold text-White sm:table-cell">Original Link</th>
            <th className="p-4 hidden font-sfBold text-White sm:table-cell">QR Code</th>
            <th className="p-4 hidden font-sfBold text-White md:table-cell">Clicks</th>
            <th className="p-4 hidden font-sfBold text-White md:table-cell">Status</th>
            <th className=" p-4 font-sfBold">
              <div className="items-center gap-2 text-White hidden md:flex">
                Date<CalendarIcon />
              </div>
            </th>
          </tr>
        </thead>
        <tbody  >
          {TableData.map(res =>
            <tr className="bg-tablerowgrey text-White  text-md h-[63px] dark:text-White font-Light">
              {/* Table Data */}
              <td className="p-4  truncate " ><a href={`http://localhost:3000/${res.shortLink}`} target={`http://localhost:3000/${res.shortLink}`} className="hover:to-blue-950 " >{res.shortLink}</a></td>
              <td className="p-4 hidden sm:table-cell max-w-xs overflow-hidden overflow-ellipsis">{res.ogLink}</td>
              <td className="p-4 hidden sm:table-cell " ><QRCode size={size} value={res.ogLink} onClick={()=> Setsize(size<120?size+10:size)}/></td>
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
       TableData.map(res=> <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-75 ">
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
         <div className="max-w-sm p-6 bg-white  flex space-y-5 flex-col items-center text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <QRCode size={size} value={res.ogLink} onClick={()=> Setsize(size<120?size+10:size)}/>
      
            <div><h4 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">{res.shortLink}</h4></div>
            <div> <h5 className="mb-2 truncate font-semibold tracking-tight text-gray-900 dark:text-white">{res.ogLink}</h5></div>
           
           <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">CLICKS : {res.clickCount}</p>
           <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
             {res.status}
           </a>
         </div>



       </div>
     </div>)

      )}
    </div>
  );
};
