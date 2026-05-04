import { useEffect } from "react";

const HelpTooltip = ({ text, visible, onClose, offset }) => {
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`absolute ${offset} top-1/2 -translate-y-1/2 
      bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg 
      whitespace-nowrap pointer-events-none`}
    >
      {text}
    </div>
  );
};

export default HelpTooltip;