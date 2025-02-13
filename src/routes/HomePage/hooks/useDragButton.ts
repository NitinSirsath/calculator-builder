import useCalculatorStore from "../../../services/store/calculator/calculatorStore";
import { useDrag, useDrop } from "react-dnd";

interface DraggableButtonProps {
  id: number;
  label: string;
  index: number;
}

const useDragButton = ({ id, label, index }: DraggableButtonProps) => {
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
  return { removeComponent, ref, drop, handleClick };
};

export default useDragButton;
