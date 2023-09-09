import React, { useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastInformation }) {
  return (
    <ol className={styles.wrapper}>
      {toastInformation.length > 0 &&
        toastInformation.map(({ message, variant }, item) => (
          <li key={item} className={styles.toastWrapper}>
            <Toast variant={variant} id={item}>
              {message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
