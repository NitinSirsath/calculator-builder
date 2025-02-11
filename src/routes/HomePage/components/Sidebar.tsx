import DraggableComponent from "./DraggableComponent";

const Sidebar: React.FC = () => {
  return (
    <div className="p-4 border rounded-lg w-60 bg-gray-50 shadow-md">
      <h2 className="text-lg font-bold mb-2">Drag Components</h2>
      <DraggableComponent id="display" type="display">
        <div className="p-2 bg-gray-300 rounded-md text-center cursor-pointer hover:bg-gray-400 transition-all">
          Display
        </div>
      </DraggableComponent>
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
          <div className="p-2 bg-blue-500 text-white rounded-md text-center cursor-pointer hover:bg-blue-600 transition-all">
            {label}
          </div>
        </DraggableComponent>
      ))}
    </div>
  );
};

export default Sidebar;
