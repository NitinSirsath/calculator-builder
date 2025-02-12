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
      evaluateExpression();
    } else if (label === "C") {
      clearExpression();
    } else {
      updateExpression(label);
    }
  };

  return (
    <motion.div
      ref={(node) => ref(drop(node))}
      layout
      whileTap={{ scale: 0.9 }}
      className="relative"
    >
      <button
        className="p-3 w-full bg-blue-500 text-white rounded-lg text-center cursor-pointer hover:bg-blue-600 transition-all shadow-md font-semibold text-lg"
        onClick={handleClick}
      >
        {label}
      </button>
      <button
        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full hover:bg-red-600 transition-all"
        onClick={() => removeComponent(id)}
      >
        X
      </button>
    </motion.div>
  );
};

export default DraggableButton;
