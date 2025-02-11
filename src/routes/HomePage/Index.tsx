import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Calculator from "./components/Calculator";
import Sidebar from "./components/Sidebar";

const HomePage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col md:flex-row gap-6 p-6 items-center justify-center">
        <Sidebar />
        <Calculator />
      </div>
    </DndProvider>
  );
};

export default HomePage;
