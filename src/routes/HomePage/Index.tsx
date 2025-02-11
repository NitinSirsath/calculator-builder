import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Calculator from "./components/Calculator";
import Sidebar from "./components/Sidebar";

const HomePage = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div className="flex gap-6 p-6">
          <Sidebar />
          <Calculator />
        </div>
      </DndProvider>
    </div>
  );
};

export default HomePage;
