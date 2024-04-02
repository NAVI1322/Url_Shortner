import React from 'react';

export const Table= () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <table className="table-auto md:w-[1421px] rounded-t-lg overflow-hidden">
        <thead className="bg-tableheadgrey text-white">
          <tr className="text-left">
            <th className="p-4">Short Links</th>
            <th className="p-4 hidden sm:table-cell">Original Links</th>
            <th className="p-4 hidden sm:table-cell">QR Code</th>
            <th className="p-4 hidden md:table-cell">Clicks</th>
            <th className="p-4 "><span className='sm:hidden'></span>
                <span className='hidden sm:inline'> Status </span></th>
            <th className="p-4 hidden md:table-cell ">Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-tablerowgrey">
            <td className="p-4">Row 1, Column 1</td>
            <td className="p-4 hidden sm:table-cell">Row 1, Column 2</td>
            <td className="p-4 hidden sm:table-cell">Row 1, Column 3</td>
            <td className="p-4 hidden md:table-cell">Row 1, Column 4</td>
            <td className="p-4 hidden md:table-cell">Row 1, Column 5</td>
            <td className="p-4"> 
              <span className="sm:hidden"> {/* Hide content on small screens */}
                <button className=" font-bold text-xl text-black text-center rounded">v</button>
              </span>
              <span className="hidden sm:inline"> {/* Hide content on small screens */}
              Row 1, Column 6
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


