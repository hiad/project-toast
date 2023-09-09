import React, { useState, createContext } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastInformation, setToastInformation] = useState([]);

  return (
    <ToastContext.Provider value={{ toastInformation, setToastInformation }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
