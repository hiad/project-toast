import React, { forwardRef, useId } from "react";

const RadioButton = forwardRef(
  (
    { id, name, value, label, onChange, checked, currentVariant, ...delegated },
    ref
  ) => {
    return (
      <label htmlFor={id}>
        <input
          id={id}
          ref={ref}
          name={name}
          value={value}
          {...delegated}
          type="radio"
        />
        {label}
      </label>
    );
  }
);
export default RadioButton;
