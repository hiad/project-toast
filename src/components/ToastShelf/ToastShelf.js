import React, { useContext } from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastInformation, setToastInformation } = useContext(ToastContext);

  const handleDismiss = (e) => {
    e.preventDefault();
    const newToast = [...toastInformation];
    newToast.splice(id, 1);
    setToastInformation(newToast);
  };

  return (
    <ol className={styles.wrapper}>
      {toastInformation.length > 0 &&
        toastInformation.map(({ message, variant }, item) => (
          <li key={item} className={styles.toastWrapper}>
            <Toast variant={variant} handleDismiss={handleDismiss}>
              {message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
