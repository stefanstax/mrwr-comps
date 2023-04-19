import React from "react";

const Button = ({
  label,
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return <button>{label || children || "No label provided"}</button>;
};

export default Button;
