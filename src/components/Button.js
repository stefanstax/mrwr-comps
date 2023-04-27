import React from "react";
// Dynamic Classes
import className from "classnames";
// Icons
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
  ...rest
}) => {
  // * Mutual classes and Merged classes
  const classes = className(
    rest.className,
    "flex items-center gap-[10px] px-3 py-1.5 m-2 border",
    {
      "border-blue-500 bg-blue-500": primary,
      "border-gray-900 bg-gray-900": secondary,
      "border-green-500 bg-green-500": success,
      "border-yellow-400 bg-yellow-400 text-black": warning,
      "border-red-500 bg-red-500": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-white":
        !outline /* && (primary || secondary || success || warning || danger) */,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
      // * later class will override previously added one
    }
  );

  // * Rest means take all additionals props and assign it to the button elements
  // onClick
  // onHover
  // onMouseOver etc etc
  return (
    <button {...rest} className={classes}>
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
