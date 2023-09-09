import React, { forwardRef } from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";

const TextArea = forwardRef(({ id, onChange, label, ...delegated }, ref) => {
  return (
    <>
      <label
        htmlFor={id}
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id={id}
          ref={ref}
          onChange={onChange}
          {...delegated}
          className={styles.messageInput}
        />
      </div>
    </>
  );
});

export default TextArea;
