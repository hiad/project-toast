import React, { useContext, useState } from "react";

import Button from "../Button";
import RadioButton from "../RadioButton";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf";

import TextArea from "../TextArea/TextArea";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { toastInformation, setToastInformation } = useContext(ToastContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newToastInformation = {
      message: e.target.message.value,
      variant: e.target.variant.value,
    };

    const newToast = [...toastInformation, newToastInformation];

    setToastInformation(newToast);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toastInformation={toastInformation} />
      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <TextArea id="message" label="Message" />
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((item) => (
                <RadioButton
                  id={item}
                  key={item}
                  name="variant"
                  label={item}
                  value={item}
                />
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
