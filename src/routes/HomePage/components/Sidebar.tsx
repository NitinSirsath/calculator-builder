import DraggableComponent from "./DraggableComponent";

const Sidebar: React.FC = () => {
  return (
    <div className="p-4 border rounded-lg w-60 bg-gray-50 shadow-md">
      <h2 className="text-lg font-bold mb-2">Drag Components</h2>
      <DraggableComponent id="display" type="display">
        <div className="p-2 bg-gray-300 rounded-md text-center cursor-pointer">
          Display
        </div>
      </DraggableComponent>
      <DraggableComponent id="button" type="button">
        <div className="p-2 bg-blue-500 text-white rounded-md text-center cursor-pointer">
          Button
        </div>
      </DraggableComponent>
    </div>
  );
};

export default Sidebar;
