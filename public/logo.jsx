import React from "react";

function Icon({ fill, width, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      className={className}
      viewBox="0 0 45 21"
      fill={fill}
    >
      <path d="M0 0h3v21H0zm6 0h3v21H6zm6 0h3v21h-3zm6 0h3v21h-3zm6 18h21v3H24zm0-6h21v3H24zm0-6h21v3H24zm0-6h21v3H24z"></path>
    </svg>
  );
}

export default Icon;
