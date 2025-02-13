import CustomButton from "../../../components/custom/CustomButton";
import DraggableComponent from "./DraggableComponent";

const Sidebar = () => {
  return (
    <div className="p-2 border border-gray-200 rounded-lg w-80 bg-white/80 shadow-xl backdrop-blur-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Drag Components
      </h2>
      <div className="flex flex-col gap-3">
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
