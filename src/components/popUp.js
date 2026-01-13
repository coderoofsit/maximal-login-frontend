import React, { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { useAppContext } from "../context/appContext";

const PopUp = ({ title }) => {
  const { ShowPopUp, setShowPopUP, HandlePopUpClose, popUpData, setPopUpData } =
    useAppContext();

  // Close the pop-up automatically after 3 seconds if popUpData is set
  useEffect(() => {
    if (popUpData) {
      const timer = setTimeout(() => {
        setShowPopUP(false);
        setPopUpData(""); // Clear pop-up data
      }, 3000);

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [popUpData, setShowPopUP, setPopUpData]);

  return (
    ShowPopUp && (
      <div className='bg-white rounded-lg drop-shadow-lg shadow-lg border-red-600 border p-3 fixed z-20 left-1/2 top-14 -translate-x-1/2 -translate-y-1/2 w-2/3'>
        <div className='flex justify-between'>
          <div className='flex justify-center items-center text-red-600 font-semibold'>
            {title} {popUpData}
          </div>
          <button
            onClick={HandlePopUpClose}
            className='border hover:border-red-500 rounded-md hover:text-red-500'
          >
            <IoIosClose size={32} />
          </button>
        </div>
      </div>
    )
  );
};

export default PopUp;

export const Toast = (title) => {
  const { setShowPopUP, setPopUpData } = useAppContext();

  // Set the title and show the pop-up
  setPopUpData(title);
  setShowPopUP(true);
};
