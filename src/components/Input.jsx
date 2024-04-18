import React from "react";

export const Input = ({
  text,
  className,
  type,
  min,
  value,
  onChange,
  readOnly,
  innerRef,
}) => {
  return (
    <label>
      {text}
      <br />
      <input
        className={className}
        type={type}
        min={min}
        value={value}
        readOnly={readOnly}
        ref={innerRef}
        onChange={onChange}
      />
    </label>
  );
};
