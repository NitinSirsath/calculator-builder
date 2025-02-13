import useCalculatorStore from "../../../services/store/calculator/calculatorStore";
import { useDrag, useDrop } from "react-dnd";
import { useToastStore } from "../../../services/store/snackbar/toastStore";

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
  const { showToast } = useToastStore();

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
      showToast("Expression result", "success");
    } else if (label === "C") {
      clearExpression();
      showToast("Expression cleared", "neutral");
    } else {
      updateExpression(label);
    }
  };
  return { removeComponent, ref, drop, handleClick };
};

export default useDragButton;
