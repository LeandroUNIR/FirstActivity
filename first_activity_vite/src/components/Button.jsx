import { BUTTON_COLORS } from "../utils/constants/buttonColors.js";
const Button = ({
  children,
  color = "blue",
  icon,
  type,
  onClick,
  disabled,
}) => {
  const colorClasses = BUTTON_COLORS[color];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`box-border focus:ring-4 shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${colorClasses}`}
    >
      <div className="flex items-center gap-2">
        {icon}
        {children}
      </div>
    </button>
  );
};

export default Button;