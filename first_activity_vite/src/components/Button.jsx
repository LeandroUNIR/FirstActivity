import { BUTTON_COLORS } from "../utils/constants/buttonColors.js";

const Button = ({
                    children,
                    type = "button",
                    onClick,
                    color = "blue",
                    variant = "primary",
                    disabled = false,
                    icon,
                }) => {

    const baseStyles =
        "w-full p-2 rounded-lg mt-2 font-medium flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-blue-500 hover:bg-blue-600 text-white",
        success: "bg-green-500 hover:bg-green-600 text-white",
    };

    const colorClasses = BUTTON_COLORS[color] || "";
    const disabledStyles = "bg-gray-400 cursor-not-allowed";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${
                disabled ? disabledStyles : (variants[variant] || colorClasses)
            }`}
        >
            {icon}
            {children}
        </button>
    );
};

export default Button;