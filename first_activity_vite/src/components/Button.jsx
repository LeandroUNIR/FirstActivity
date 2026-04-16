import { BUTTON_COLORS } from "../constants/buttonColors";
const Button = ({ children, color = "blue", icon }) => {
    
    const colorClasses = BUTTON_COLORS[color]

    return (
        <button 
            type="button" 
            className={`box-border focus:ring-4 shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none ${colorClasses}`}
        >
            <div className="flex items-center gap-2">
                {icon}
                {children}
            </div>
        </button>
    );
};

export default Button;