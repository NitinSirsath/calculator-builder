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
              <button className="p-3 w-full bg-blue-500 text-white rounded-lg text-center cursor-pointer hover:bg-blue-600 transition-all shadow-md font-semibold text-lg">
                {label}
              </button>
            </DraggableComponent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
