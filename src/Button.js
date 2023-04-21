import React from "react";
import PropTypes from "prop-types";

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
  const primaryButton =
    "px-4 py-1.5 border border-blue-600 bg-blue-600 text-white";

  const secondaryButton = "";
  const successButton = "";
  const warningButton = "";
  const dangerButton = "";

  return (
    <button className={primaryButton}>
      {label || children || "No label provided"}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, danger can be true"
      );
    }
  },
};

export default Button;
