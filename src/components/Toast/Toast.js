import React, { useContext } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import { ToastContext } from "../ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const { toastInformation, setToastInformation } = useContext(ToastContext);

  const Icon = ICONS_BY_VARIANT[variant];

  const handleClick = (e) => {
    e.preventDefault();
    const newToast = [...toastInformation];
    newToast.splice(id, 1);
    setToastInformation(newToast);
  };

  return (
    <div className={`${styles.toast} ${styles?.[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={handleClick}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
