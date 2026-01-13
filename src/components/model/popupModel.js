// import Popup from "./popup/Modal.tsx";

// const Model = { Popup };

// export default Model;

import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa"; // For the close icon
import { useAppContext } from "../../context/appContext";

const PopupModel = () => {
  const { isPopupOpen, setIsPopupOpen, popupMessage, setPopupMessage } =
    useAppContext();

  useEffect(() => {
    if (popupMessage) {
      setIsPopupOpen(true);

      setTimeout(() => {
        // onClose();
        setIsPopupOpen(false);
        setPopupMessage("");
      }, 2000);
    }
  }, [popupMessage]);

  console.log("isPopupOpen", popupMessage);

  return (
    isPopupOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-5 rounded-lg relative min-w-[300px] max-w-[500px] shadow-lg">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-black p-1"
            onClick={() => setIsPopupOpen(false)}
          >
            <FaTimes className="text-lg" />
          </button>
          <div className="p-5 text-center">{popupMessage}</div>
        </div>
      </div>
    )
  );
};

export default PopupModel;

// Main component example
// const App = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   return (
//     <div className="p-4">
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={() => setIsPopupOpen(true)}
//       >
//         Show Popup
//       </button>

//       {isPopupOpen && (
//         <Popup
//           message="This is a centered popup message!"
//           onClose={() => setIsPopupOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default App;
