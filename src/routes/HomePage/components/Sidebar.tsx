import CustomButton from "../../../components/custom/CustomButton";
import DraggableComponent from "./DraggableComponent";
import { useTheme } from "@mui/material/styles";

const Sidebar = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // Detect dark mode

  return (
    <div
      className={`p-4 border  rounded-lg w-72 shadow-xl 
        ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}
        transition-all backdrop-blur-lg`}
    >
      <h2 className="text-xl font-semibold mb-4 text-center tracking-wide">
        Drag Components
      </h2>
      <div className="flex flex-col gap-3">
        {/* Grid Layout for Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            "C",
            "=",
            "+",
          ].map((label, index) => (
            <DraggableComponent
              key={index}
              id={`button-${index}`}
              type="button"
              label={label}
            >
              <CustomButton>{label}</CustomButton>
            </DraggableComponent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
