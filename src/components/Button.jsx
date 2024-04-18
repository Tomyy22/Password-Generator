import React from "react";

export const Button = ({ onClick, className, content }) => {
  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
};
