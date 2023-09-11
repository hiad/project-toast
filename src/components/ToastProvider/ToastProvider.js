import React, { useState, createContext } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastInformation, setToastInformation] = useState([]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toastInformation, setToastInformation }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
