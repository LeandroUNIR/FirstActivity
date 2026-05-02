import { useState } from "react";
import HelpTooltip from "./HelpTooltip";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  maxLength = 25,
  helpText,
  helpOffset = "left-full ml-2", // control dinámico
}) => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="flex flex-col gap-1 mb-4">
      
      {/* Label + botón ayuda */}
      <div className="flex items-center gap-1">
        <label className="text-sm font-semibold">{label}</label>

        {helpText && (
          <div className="relative flex items-center">
            <button
              type="button"
              onClick={() => setShowHelp(true)}
              className="text-xs text-blue-500"
            >
              ?
            </button>

            <HelpTooltip
              text={helpText}
              visible={showHelp}
              onClose={() => setShowHelp(false)}
              offset={helpOffset}
            />
          </div>
        )}
      </div>

      {/* Input */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={`border rounded-lg p-2 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "focus:ring-blue-500"
        }`}
      />

      {/* Error */}
      {error && (
        <span className="text-red-500 text-xs">{error}</span>
      )}
    </div>
  );
};

export default Input;