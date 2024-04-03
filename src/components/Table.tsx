import { useState } from "react";

export const Table = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="flex  items-center justify-center">
      {/* Table */}
      <table className="table-auto md:w-[1421px] rounded-t-lg overflow-hidden w-[376px]">
        <thead className="h-[63px]">
          <tr className="text-left text-sm  bg-tableheadgrey  text-tabletext ">
            {/* Table Headers */}
            <th className="p-4">Shorten Links</th>
            <th className="p-4 hidden sm:table-cell">Original Links</th>
            <th className="p-4 hidden sm:table-cell">QR Code</th>
            <th className="p-4 hidden md:table-cell">Clicks</th>
            <th className="p-4 hidden md:table-cell">Status</th>
            <th className=" p-4">
            <div className="flex items-center gap-1">
            Date
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </div>
            </th>
          </tr>
        </thead>
        <tbody  >
          <tr className="bg-tablerowgrey  text-tabletext text-sm font-thin h-[63px] ">
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
              <span className="hidden sm:inline">
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
