import React, { useState } from "react";
import { IoCaretDown, IoCaretUp, IoClose } from "react-icons/io5";
import { PiDotsThreeOutlineFill, PiFilePdfDuotone } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCaretDown, FaCaretUp, FaSortDown, FaSortUp } from "react-icons/fa";

const TableLayout = ({
  TableHead,
  children,
  sortField,
  sortOrder,
  toggleSortOrder,
  headerFieldMapping,
}) => {
  return (
    <div className='relative overflow-x-auto sm:roundedxl bg-white w-full'>
      <table className='w-full text-left rtl:text-right relative'>
        <thead className='uppercase bg-zinc-50  sticky top-0 text-xs'>
          <tr className='border-b border-t sticky top-0'>
            {TableHead.map((item, index) => (
              <th scope='col' className='px-6 py-3 text-nowrap' key={index}>
                <div
                  className='flex items-center gap-1.5 cursor-pointer'
                  onClick={() => toggleSortOrder(item)}
                >
                  {item}
                  {headerFieldMapping[item] && (
                    <div className='flex flex-col text-[0.7rem] text-zinc-400 '>
                      <IoCaretUp
                        className={`-mb-1 ${
                          sortField === headerFieldMapping[item] &&
                          sortOrder === "asc"
                            ? "text-black"
                            : ""
                        }`}
                      />
                      <IoCaretDown
                        className={`${
                          sortField === headerFieldMapping[item] &&
                          sortOrder === "desc"
                            ? "text-black"
                            : ""
                        }`}
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='relative w-full'>{children}</tbody>
      </table>
    </div>
  );
};

export default TableLayout;

export const Tr = ({ children, className }) => (
  <tr
    className={`   border-b border-zinc-100 relative hover:bg-zinc-100 ${className} `}
  >
    {children}
  </tr>
);
export const Td = ({ children, className }) => (
  <td className={`px-6 py-4 ${className}`}>{children}</td>
);

export const TdPdf = ({ onClick }) => (
  <td className='px-6 py-4 text-2xl cursor-pointer flex '>
    <div
      className='border border-gray-500 hover:border-blue-600 hover:text-blue-700 p-0.5 rounded'
      onClick={onClick}
    >
      <PiFilePdfDuotone />
    </div>
  </td>
);

export const TdAction = ({ id, actions }) => {
  const [openActionBarIndex, setOpenActionBarIndex] = useState(null);

  const handleActionBarToggle = (id) => {
    setOpenActionBarIndex(null);
    setOpenActionBarIndex(openActionBarIndex === id ? null : id);
    console.log(id, "=>", actions);
  };
  return (
    <td className=' relative'>
      <div
        className='px-6 py-4 text-2xl cursor-pointer '
        onClick={() => handleActionBarToggle(id)}
      >
        {openActionBarIndex === id ? <IoClose /> : <PiDotsThreeOutlineFill />}
      </div>
      {openActionBarIndex === id && (
        <div className='absolute top-0 right-40 z-10 '>
          <div className='flex flex-col p-2 shadow-md border rounded-lg bg-white text-base  '>
            {actions &&
              actions.map((item) =>
                item === "delete" ? (
                  <button className='hover:bg-red-200 font-semibold px-10 py-2 rounded-lg text-start text-red-500 flex items-center gap-2'>
                    <span>
                      <RiDeleteBin6Line />
                    </span>
                    Delete
                  </button>
                ) : (
                  <button className='hover:bg-zinc-200 font-semibold px-10 py-2 rounded-lg text-start capitalize'>
                    {item}
                  </button>
                )
              )}

            {/* <button className='hover:bg-red-200 font-semibold px-10 py-2 rounded-lg text-start text-red-500 flex items-center gap-2'>
              <span>
                <RiDeleteBin6Line />
              </span>
              Delete
            </button>
            <button className='hover:bg-zinc-200 font-semibold px-10 py-2 rounded-lg text-start'>
              edit
            </button>
            <button className='hover:bg-zinc-200 font-semibold px-10 py-2 rounded-lg text-start'>
              copy
            </button> */}
          </div>
        </div>
      )}
    </td>
  );
};
