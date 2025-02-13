import React from "react";

interface IProps {
  children: React.ReactNode;
  handleClick?: () => void;
  customStyles?: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
  disabled?: boolean;
}

const variantStyles = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-500 hover:bg-gray-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const sizeStyles = {
  small: "p-2 text-sm",
  medium: "p-3 text-md",
  large: "p-4 text-lg",
};

const CustomButton: React.FC<IProps> = ({
  children,
  handleClick,
  customStyles = "",
  variant = "primary",
  size = "medium",
  isLoading = false,
  disabled = false,
}) => {
  return (
    <button
      className={`
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        rounded-lg text-center cursor-pointer transition-all shadow-md font-semibold
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${customStyles}
      `}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <span className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
