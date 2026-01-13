  <!-- {table.type === "Tabular" && (
                  <div className={`flex flex-col gap-3 relative w-full my-5`}>
                    <div className='bg-white  shadow rounded-md overflow-hidden '>
                      <div className='bg-blue-100 w-full text-xs text-blue-700 py-0.5 font-semibold px-4 capitalize'>
                        Tabular table
                      </div>
                      <div className='p-4 w-full flex flex-col gap-5 relative'>
                        <div className='flex justify-between'>
                          <div className='flex flex-col items-start'>
                            <input
                              placeholder='Table Name'
                              value={table?.name}
                          
                              onChange={(e) =>
                                handleTableNameChange(
                                  tableIndex,
                                  e.target.value
                                )
                              }
                              className='bg-transparent outline-none text-2xl font-bold uppercase text-zinc-600'
                            />
                            {TabuTableName === "table 1" && (
                              <span className='border-blue-500 border rounded-full px-5 text-xs text-blue-500'>
                                Editable
                              </span>
                            )}
                          </div>
                          <div className='flex items-center gap-3 '>
                            <button
                              className={`flex items-center gap-2 border p-1.5 px-4 rounded-md ${
                                openTabularPreview &&
                                "bg-blue-50 border-blue-300"
                              } `}
                              onClick={() => PreviewHandler(table.id)}
                            >
                              {previewTableIds.includes(table.id) ? (
                                <LuEye />
                              ) : (
                                <LuEyeOff />
                              )}
                              <span className='text-xs'> Preview</span>
                            </button>

                            <button
                              onClick={() => handleDeleteTable(tableIndex)}
                              className={` text-zinc-600 hover:text-red-400 border border-zinc-200 hover:border-red-200  p-1.5 rounded-lg ${
                                TabuTableName === "table 1" && "px-4 text-xl"
                              }`}
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </div>
                        </div>

                        <div class='relative overflow-x-auto pb-8 '>
                          <table class='w-full text-sm text-left rtl:text-right  capitalize '>
                            <thead class='text-xs text-gray-700 uppercase bg-gray-50  '>
                              <tr>
                                <th scope='col' class='px-6 py-3'>
                                  Sequence
                                </th>
                                <th scope='col' class='px-6 py-3'>
                                  Title
                                </th>
                                
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
                                    onClick={() => handleAddColumn(tableIndex)}
                                    className='p-1 px-2 border-2  border-blue-400 text-blue-500 rounded-lg flex items-center gap-1'
                                  >
                                    <MdOutlineAdd className='text-lg' />
                                    <span className=''>ADD</span>
                                  </button>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {table.columns.map((column, columnIndex) => (
                                <tr class='bg-white border-b  '>
                                  <th
                                    scope='row'
                                    class='px-5 py-4 font-medium text-black whitespace-nowrap '
                                  >
                                    <Input
                                      placeholder='Sequence'
                                      className='w-20'
                                      type='number'
                                      value={column.sequence}
                                      onChange={(e) =>
                                        handleChange(
                                          tableIndex,
                                          columnIndex,
                                          "sequence",
                                          e.target.value
                                        )
                                      }
                                      name='sequence'
                                    />
                                  </th>
                                  <td class='px-5 py-4'>
                                    <Input
                                      placeholder='Title'
                                      type='text'
                                      value={column.title}
                                      onChange={(e) =>
                                        handleChange(
                                          tableIndex,
                                          columnIndex,
                                          "title",
                                          e.target.value
                                        )
                                      }
                                      name='title'
                                    />
                                  </td>

                                  <td class='px-5 py-4'>
                                    <Input
                                      className='w-20'
                                      placeholder='width'
                                      value={column.width}
                                      onChange={(e) =>
                                        e.target.value <= 100 &&
                                        handleChange(
                                          tableIndex,
                                          columnIndex,
                                          "width",
                                          e.target.value
                                        )
                                      }
                                      name='width'
                                    />
                                 
                                  </td>
                                  <td class='px-5 py-4'>
                                  
                                    <select
                                      className='px-2 border p-2 rounded-md capitalize'
                                      value={column.format}
                                      onChange={(e) =>
                                        handleChange(
                                          tableIndex,
                                          columnIndex,
                                          "format",
                                          e.target.value
                                        )
                                      }
                                      name='format'
                                    >
                                      <option>text</option>
                                      <option>number</option>
                                      <option>date</option>
                                      <option>time</option>
                                      <option>long text</option>
                                      <option>fixed value</option>
                                      <option>Yes/No</option>
                                      <option>photo upload</option>
                                      <option>photo capture</option>
                                      <option>f/c</option>
                                    </select>
                                  </td>
                                  <td class='px-6 py-4'>
                                    <select
                                      className='px-2 border p-2 rounded-md '
                                      value={column.border}
                                      onChange={(e) =>
                                        handleChange(
                                          tableIndex,
                                          columnIndex,
                                          "border",
                                          e.target.value
                                        )
                                      }
                                      name='border'
                                    >
                                      <option>no</option>
                                      <option>yes</option>
                                    </select>
                                  </td>
                                  <td className=''>
                                    <div className='flex justify-center items-center'>
                                     
                                      <RiDeleteBin6Line
                                        className='text-xl text-red-500 cursor-pointer'
                                        onClick={() =>
                                          handleDeleteRow(
                                            tableIndex,
                                            columnIndex
                                          )
                                        }
                                      />
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>

                
                          </table>
                        </div>
                      </div>
                    </div>

                 
                    {previewTableIds.includes(table.id) && (
                      <div className=' bg-white shadow rounded-md overflow-hidden'>
                        <div className='bg-blue-100 w-full text-xs text-blue-700 py-0.5 font-semibold px-4 capitalize'>
                          preview
                        </div>
                        <div className='p-2'>
                          <div className=''>
                            <p className='font-semibold capitalize px-2 border-b pb-1'>
                              {table?.name}
                            </p>

                            <div className='mt-3'>
                              <table className='w-full text-sm text-left rtl:text-right capitalize border border-zinc-300'>
                                <thead className='text-xs text-gray-700 uppercase bg-gray-50 border border-zinc-300'>
                                  <tr>
                                    {Array.from({
                                      length: Math.max(
                                        ...table.columns.map(
                                          (item) => item.sequence
                                        )
                                      ),
                                    }).map((_, i) => {
                                      const item = table.columns.find(
                                        (column) =>
                                          Number(column.sequence) === i + 1
                                      );
                                      return (
                                        <th
                                          scope='col'
                                          className='px-6 py-3 border border-zinc-300'
                                          key={i + 1}
                                          style={{
                                            width: `${item?.width}%`,
                                          }}
                                        >
                                          {item?.title}
                                        </th>
                                      );
                                    })}
                                  </tr>
                                </thead>
                                <tbody>
                                  {Array.from({
                                    length: Math.max(
                                      ...table.columns.map(
                                        (col) => col.fixed.length
                                      )
                                    ),
                                  }).map((_, rowIndex) => (
                                    <tr key={rowIndex} className='bg-white'>
                                      {Array.from({
                                        length: Math.max(
                                          ...table.columns.map(
                                            (item) => item.sequence
                                          )
                                        ),
                                      }).map((_, i) => {
                                        const item = table.columns.find(
                                          (column) =>
                                            Number(column.sequence) === i + 1
                                        );
                                        return (
                                          <td
                                            key={i + 1}
                                            className='px-5 py-4 font-medium text-black whitespace-nowrap border border-zinc-300'
                                          >
                                            {item?.fixed[rowIndex] || ""}
                                          </td>
                                        );
                                      })}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}  -->