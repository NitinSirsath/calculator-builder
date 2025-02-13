import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import Calculator from "./components/Calculator";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <div className="flex flex-col md:flex-row gap-6 p-6 items-center justify-center">
        <Sidebar />
        <Calculator />
      </div>
    </DndProvider>
  );
};

export default HomePage;
