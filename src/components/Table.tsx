import { CalendarIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export const Table = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="flex items-center justify-center m-4">
      {/* Table */}
      <table className="table-auto md:w-[1323px] rounded-t-lg overflow-hidden w-[376px] ">
        <thead className="h-[63px]">
          <tr className="text-left text-sm  bg-tableheadgrey  text-tabletext text-base text-White dark:text-white ">
            {/* Table Headers */}
            <th className="p-4 font-sfBold">Short Link</th>
            <th className="p-4 hidden font-sfBold sm:table-cell">Original Link</th>
            <th className="p-4 hidden font-sfBold sm:table-cell">QR Code</th>
            <th className="p-4 hidden font-sfBold md:table-cell">Clicks</th>
            <th className="p-4 hidden font-sfBold md:table-cell">Status</th>
            <th className=" p-4 font-sfBold">
              <div className="flex items-center gap-2 hidden md:flex">
                Date<CalendarIcon />
              </div>
            </th>
          </tr>
        </thead>
        <tbody  >
          <tr className="bg-tablerowgrey  text-tabletext text-sm font-thin h-[63px] dark:text-white">
            {/* Table Data */}
            <td className="p-4  truncate ">Row 1, Column 1</td>
            <td className="p-4 hidden sm:table-cell ">Row 1, Column 2</td>
            <td className="p-4 hidden sm:table-cell">Row 1, Column 3</td>
            <td className="p-4 hidden md:table-cell">Row 1, Column 4</td>
            <td className="p-4 hidden md:table-cell">Row 1, Column 5</td>
            <td className="p-4">
              {/* Toggle Button */}
              <span className="sm:hidden">
                {" "}
                {/* Hide content on small screens */}
                <button
                  onClick={toggleModal}
                  className=" bg-tableheadgrey rounded-full p-2 hover:ring-1 hover:ring-gray-100 ease-out duration-500  outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5   h-5rounded-full  text-tabletext"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </span>
              <span className="hidden md:inline">
                {" "}
                {/* Hide content on small screens */}
                Row 1, Column 6
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 ">
          <div className=" rounded-md bg-tableheadgrey  text-tabletext  font-thin">
            <div onClick={toggleModal} className="flex justify-end p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <hr />
            <div className="p-3">content</div>
          </div>
        </div>
      )}
    </div>
  );
};
