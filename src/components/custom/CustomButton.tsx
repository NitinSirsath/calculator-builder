import React from "react";

interface IProps {
  children: React.ReactNode;
  handleClick?: () => void;
  customStyles?: false | string;
}

const CustomButton = ({
  children,
  handleClick,
  customStyles = false,
}: IProps) => {
  return (
    <button
      className={
        customStyles
          ? customStyles
          : "p-3 w-full bg-blue-500 text-white rounded-lg text-center cursor-pointer hover:bg-blue-600 transition-all shadow-md font-semibold text-lg"
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
