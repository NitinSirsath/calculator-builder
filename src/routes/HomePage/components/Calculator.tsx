import { useDrop } from "react-dnd";
import Display from "./Display";
import DraggableButton from "./DraggableButton";
import { motion, AnimatePresence } from "framer-motion";
import useCalculatorStore from "../../../services/store/calculator/calculatorStore";

const Calculator: React.FC = () => {
  const { components, addComponent } = useCalculatorStore();

  const [{ isOver }, drop] = useDrop({
    accept: "COMPONENT",
    drop: (item: { id: number; type: string; label?: string }) => {
      if (!item.label) {
        console.error("Dropped item is missing a label:", item);
      }
      addComponent({
        id: Date.now(),
        type: item.type as "button",
        label: item.label ?? "?",
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <motion.div
      className="p-4 border rounded-lg w-80 min-h-[300px] bg-gray-100 shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-bold mb-2">Your Calculator</h2>
      <div
        ref={drop}
        className={`p-4 min-h-[200px] ${isOver ? "bg-gray-300" : "bg-white"}`}
      >
        <Display />
        <motion.div className="grid grid-cols-4 gap-2 mt-4">
          <AnimatePresence>
            {components.map((component, index) =>
              component.type === "button" ? (
                <DraggableButton
                  key={component.id}
                  id={component.id}
                  label={component.label} // Ensure label is passed correctly
                  index={index}
                />
              ) : null
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Calculator;
