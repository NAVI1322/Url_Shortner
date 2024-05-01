import { CalendarIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QRCode from "qrcode.react";


export const Table = ({ theme }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [size, Setsize] = useState(70);
  const [modalData,SetmodalData]:any = useState({});
  const [loading,Setloading]=useState(false);

  const toggleModal = () => {
    
    setModalOpen(!modalOpen);
    Setloading(true)
  };

  const [TableData, setTableData] = useState([{}]);
  const [params] = useSearchParams();

  const id = params.get("id");
 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/fetchurl",
          {
            params: {
              id: id,
            },
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
    

        const copyToClipboard = async (text: string) => {
          try {
            await navigator.clipboard.writeText(text);
          } catch (error) {
            console.error("Failed to copy text to clipboard:", error);
          }
        };

       
        let protocol: string | undefined;
        let host: string | undefined;
        
        const requestUrl = response?.config.url;
        
        if (requestUrl) {
          const url = new URL(requestUrl);
          protocol = url.protocol;
          host = url.host;
        } else {
          console.error('Request URL is undefined');
        }
        

        setTableData(response.data.data);
        
        copyToClipboard(
          `${protocol}//${host}/${response.data.data[0].shortLink}`
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);




   async function handlemodaldata(shortId:string)
   {
      Setloading(true)
      const res = await axios(`http://localhost:3000/api/v1/Getdata/${shortId}`)
      SetmodalData(res.data.data)
        Setloading(false)

   }


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
  };

  return (
    <div className={`flex items-center justify-center m-4   ${theme && "dark"}` } >
      {/* Table */}
      <table className="table-auto md:w-[84%] rounded-t-lg overflow-hidden w-[376px] text-sm  ">
        <thead className="h-[63px] text-sm">
          <tr className="text-left text-md  dark:bg-tableheadgrey bg-[#4b4b4b] text-tabletext  text-white dark:text-white font-thin ">
            {/* Table Headers */}
            <th className="p-4 font-sfBold text-white">Short Link</th>
            <th className="p-4 hidden font-sfBold text-white sm:table-cell">
              Original Link
            </th>
            <th className="p-4 hidden font-sfBold text-white sm:table-cell">
              QR Code
            </th>
            <th className="p-4 hidden font-sfBold text-white md:table-cell">
              Clicks
            </th>
            <th className="p-4 hidden font-sfBold text-white md:table-cell">
              Status
            </th>
            <th className=" p-4 font-sfBold">
              <div className="items-center gap-2 text-white hidden md:flex">
                Date
                <CalendarIcon />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((res:any ) => (
            <tr className="bg-tablerowgrey  text-md h-[63px]  dark:text-White text-slate-700 ">
              {/* Table Data */}
              <td className="p-4  truncate dark:text-white  ">
                <a
                  href={`http://localhost:3000/${res.shortLink}`}
                  target={`http://localhost:3000/${res.shortLink}`}
                  className="hover:to-blue-950 "
                >
                  {res.shortLink }
                </a>
              </td>
              <td className="p-4 hidden sm:table-cell max-w-xs overflow-hidden overflow-ellipsis dark:text-white ">
                {res.ogLink}
              </td>
              <td className="p-4 hidden sm:table-cell">
                <QRCode
                  size={size}
                  value={res.ogLink}
                  onClick={() => Setsize(size < 120 ? size + 10 : size)}
                />
              </td>
              <td className="p-4 hidden md:table-cell dark:text-white text-slate-500 ">
                {res.clickCount}
              </td>
              <td className="p-4 hidden md:table-cell text-green-500 ">
                {res.status}
              </td>
              <td className="p-4 dark:text-white text-slate-500 ">
                {/* Toggle Button */}
                <span className="sm:hidden">
                  {" "}
                  {/* Hide content on small screens */}
                  <button
                    onClick={toggleModal}
                    className=" bg-Grey rounded-full p-2 hover:ring-1 hover:ring-gray-100 ease-out duration-500  outline-none"
                  >
                    <ChevronDownIcon width="22px" height="22px" className="text-black dark:text-slate-200" onClick={()=>{handlemodaldata(res.shortLink)}} />
                  </button>
                </span>
                <span className="hidden md:inline">
                  {" "}
                  {formatDate(res.createdAt)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {modalOpen &&
          <div className="fixed inset-0 flex items-center justify-center   bg-gray-400 bg-opacity-75 ">
            <div className=" rounded-md bg-tableheadgrey  text-tabletext  font-thin">
              <div onClick={toggleModal} className="flex justify-end p-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer hover:text-red-700 dark:hover:text-red-500  text-slate-300 dark:text-slate-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <hr />

              {loading?<div>
      <div className="flex space-x-2 justify-center items-center bg-white w-64 h-52 dark:invert rounded-lg">

        <div className="h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-5 w-5 bg-black rounded-full animate-bounce"></div>
      </div>
    </div>:
              <div className="max-w-sm p-6 bg-white  flex space-y-5 flex-col items-center text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
               
              <QRCode
              size={size}
              value={modalData.ogLink}
              onClick={() => Setsize(size < 120 ? size + 10 : size)}
              />

  
              <div>
                <h4 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                  {modalData.shortLink}
                </h4>
              </div>
              <div className="mb-2  font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden">
                {modalData.ogLink}
              </div>


              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                CLICKS : {modalData.clickCount}
              </p>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                {modalData.status}
              </a>
            </div>
        

              }

            </div>
          </div>
        }
    </div>
  );
};
