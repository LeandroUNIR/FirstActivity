import { useState } from "react";
import HelpTooltip from "./HelpTooltip";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  id,
  error,
  maxLength = 25,
  helpText,
  helpOffset = "left-full ml-2",
}) => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="flex flex-col gap-1 mb-4">
      {/* Label + ayuda */}
      {label && (
        <div className="flex items-center gap-1">
          <label htmlFor={id || name} className="text-sm font-semibold">
            {label}
          </label>

          {helpText && (
            <div className="relative flex items-center">
              <button
                type="button"
                onClick={() => setShowHelp(!showHelp)}
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
      )}

      {/* Input */}
      <input
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`bg-neutral-secondary-medium border text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-default-medium focus:ring-brand focus:border-brand"
        }`}
      />

      {/* Error */}
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default Input;
