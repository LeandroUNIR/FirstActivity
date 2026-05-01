const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const baseStyles = "w-full p-2 rounded-lg mt-2 text-white";

  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    success: "bg-green-500 hover:bg-green-600",
  };

  const disabledStyles = "bg-gray-400 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${
        disabled ? disabledStyles : variants[variant]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;