import React from "react";

const Button = (props) => {
  const {
    children,
    variant = "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600",
    onClick,
    type = "button",
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variant} w-[150px] px- py-2 rounded-full  text-white font-semibold `}
    >
      {children}
    </button>
  );
};

export default Button;
