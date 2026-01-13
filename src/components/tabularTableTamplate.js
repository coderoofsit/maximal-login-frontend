import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Input } from "./InputTemplate";

const TabularTableTamplate = ({
  MapData,
  TableTitleValue,
  TableTitleChange,
  TableDeleteHandler,
  AddOnClick,
  InputHandler,
  DeleteHandler,
  PreviewMap,
}) => {
  const [openTabularPreview, setopenTabularPreview] = useState(false);

  return (
    <div className={`flex flex-col gap-3 relative w-full`}>
      <div className='bg-white  shadow rounded-md overflow-hidden '>
        <div className='bg-blue-100 w-full text-xs text-blue-700 py-0.5 font-semibold px-4 capitalize'>
          Tabular table
        </div>
        <div className='p-4 w-full flex flex-col gap-5 relative'>
          <div className='flex justify-between'>
            <div className='flex flex-col items-start'>
              <input
                placeholder='Table Name'
                value={TableTitleValue}
                onChange={TableTitleChange}
                className='bg-transparent outline-none text-2xl font-bold uppercase text-zinc-600'
              />
              {TableTitleValue === "table 1" && (
                <span className='border-blue-500 border rounded-full px-5 text-xs text-blue-500'>
                  Editable
                </span>
              )}
            </div>
            <div className='flex items-center gap-3 '>
              <button
                className={`flex items-center gap-2 border p-1.5 px-4 rounded-md ${
                  openTabularPreview && "bg-blue-50 border-blue-300"
                } `}
                onClick={() => setopenTabularPreview(!openTabularPreview)}
              >
                {openTabularPreview ? <LuEye /> : <LuEyeOff />}
                <span className='text-xs'> Preview</span>
              </button>

              <button
                onClick={TableDeleteHandler}
                className={` text-zinc-600 hover:text-red-400 border border-zinc-200 hover:border-red-200  p-1.5 rounded-lg ${
                  TableTitleValue === "table 1" && "px-4 text-xl"
                }`}
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
          <div class='relative overflow-x-auto pb-8 '>
            <table class='w-full text-sm text-left rtl:text-right text-gray-500 capitalize '>
              <thead class='text-xs text-gray-700 uppercase bg-gray-50  '>
                <tr>
                  <th scope='col' class='px-6 py-3'>
                    Sequence
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    Title
                  </th>
                  {/* <th scope='col' class='px-6 py-3'>
             Height (px)
           </th> */}
                  <th scope='col' class='px-6 py-3'>
                    Width (%)
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    Specific Format
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    Border
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    <button
                      onClick={AddOnClick}
                      className='p-1 px-2 border-2  border-blue-400 text-blue-500 rounded-lg flex items-center gap-1'
                    >
                      <MdOutlineAdd className='text-lg' />
                      <span className=''>ADD</span>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {MapData &&
                  MapData.map((item, index) => (
                    <tr class='bg-white border-b  '>
                      <th
                        scope='row'
                        class='px-5 py-4 font-medium text-black whitespace-nowrap '
                      >
                        <Input
                          placeholder='Sequence'
                          className='w-20'
                          onChange={InputHandler}
                          name='sequence'
                          value={item?.sequence}
                        />
                      </th>
                      <td class='px-5 py-4'>
                        <Input
                          placeholder='Title'
                          onChange={InputHandler}
                          name='title'
                          value={item?.title}
                        />
                      </td>
                      {/* <td class='px-5 py-4'>
               <Input
                 placeholder='Height'
                 onChange={(InputHandler)
                 }
                 name='height'
               />
             </td> */}
                      <td class='px-5 py-4'>
                        {/* <Input placeholder='Width' /> */}
                        <select
                          className='px-2 border p-2 rounded-md'
                          onChange={InputHandler}
                          name='width'
                          value={item?.width}
                        >
                          <option>50%</option>
                          <option>100%</option>
                        </select>
                      </td>
                      <td class='px-5 py-4'>
                        {/* <Input placeholder='Format ' /> */}
                        <select
                          className='px-2 border p-2 rounded-md capitalize'
                          onChange={InputHandler}
                          name='format'
                          value={item?.format}
                        >
                          <option value='input'>Text</option>
                          <option value='number'>Number</option>
                          <option value='date'>Date</option>
                          <option value='time'>Time</option>
                          <option value='textarea'>Long Text</option>
                          <option value='fixed value'>Fixed Value</option>
                          <option value='Yes/No'>Yes/No</option>
                          <option value='photo Upload'>Photo Upload</option>
                          <option value='photo Capture'>Photo Capture</option>
                          <option value='F&C'>F&C</option>
                        </select>
                      </td>
                      <td class='px-6 py-4'>
                        <select
                          className='px-2 border p-2 rounded-md '
                          onChange={InputHandler}
                          name='border'
                          value={item?.border}
                        >
                          <option value='No'>No</option>
                          <option value='Yes'>Yes</option>
                        </select>
                      </td>
                      <td className=''>
                        <div className='flex justify-center items-center'>
                          {/* {item?.id} */}
                          <RiDeleteBin6Line
                            className='text-xl text-red-500 cursor-pointer'
                            onClick={DeleteHandler}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>

              {/* fixed value */}
            </table>
          </div>
        </div>
      </div>

      {/* document preview section */}
      {openTabularPreview && (
        <div className=' bg-white shadow rounded-md overflow-hidden'>
          <div className='bg-blue-100 w-full text-xs text-blue-700 py-0.5 font-semibold px-4 capitalize'>
            preview
          </div>
          <div className='p-2'>
            <div className=''>
              <p className='font-semibold capitalize px-2 border-b pb-1'>
                {TableTitleValue}
              </p>
              <div className='mt-3'>
                {PreviewMap &&
                  PreviewMap.map((item, index) => {
                    return (
                      <div>
                        <div className='grid grid-cols-4 p-2 items-center'>
                          <span className='font-semibold '>
                            {item?.title ? item?.title : "Empty Title"}
                          </span>
                          <span
                            className={`p-2  ${
                              item?.width === "100%"
                                ? "col-span-4"
                                : "col-span-3"
                            } `}
                            style={
                              item?.border === "yes"
                                ? { borderWidth: "1px" }
                                : {}
                            }
                          >
                            {item?.format}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabularTableTamplate;
