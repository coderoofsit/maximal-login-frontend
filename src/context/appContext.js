import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const ContextProvider = ({ children }) => {
  const [ShowPopUp, setShowPopUP] = useState(false);
  const [popUpData, setPopUpData] = useState("");

  const HandlePopUpClose = () => {
    setShowPopUP(false);
  };

  const [isLoading, setIsLoading] = useState(true);

  // popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  return (
    <AppContext.Provider
      value={{
        ShowPopUp,
        setShowPopUP,
        popUpData,
        setPopUpData,
        HandlePopUpClose,
        isLoading,
        setIsLoading,
        isPopupOpen,
        setIsPopupOpen,
        popupMessage,
        setPopupMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
