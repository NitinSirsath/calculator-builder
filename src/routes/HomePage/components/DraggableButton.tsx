import { motion } from "framer-motion";
import { useDrag, useDrop } from "react-dnd";
import useCalculatorStore from "../../../services/store/calculator/calculatorStore";

interface DraggableButtonProps {
  id: number;
  label: string;
  index: number;
}

const DraggableButton: React.FC<DraggableButtonProps> = ({
  id,
  label,
  index,
}) => {
  const {
    moveComponent,
    removeComponent,
    updateExpression,
    evaluateExpression,
    clearExpression,
  } = useCalculatorStore();

  const [, ref] = useDrag({
    type: "BUTTON",
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: "BUTTON",
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveComponent(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const handleClick = () => {
    if (label === "=") {
      evaluateExpression(); // Perform calculation
    } else if (label === "C") {
      clearExpression(); // Clear the display
    } else {
      updateExpression(label); // Add to the expression
    }
  };
  console.log("label", label);
  return (
    <motion.div
      ref={(node) => ref(drop(node))}
      layout
      whileTap={{ scale: 0.9 }}
      className="relative"
    >
      <button
        className="bg-blue-500 text-white p-3 rounded-md shadow-md w-full text-lg hover:bg-blue-600 transition-all"
        onClick={handleClick}
      >
        {label}
      </button>
      <button
        className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-all"
        onClick={() => removeComponent(id)}
      >
        X
      </button>
    </motion.div>
  );
};

export default DraggableButton;
