import useCalculatorStore from "../../../services/store/calculator/calculatorStore";
import { useDrop } from "react-dnd";

const useCalculator = () => {
  const { components, addComponent } = useCalculatorStore();

  const [{ isOver }, drop] = useDrop({
    accept: "COMPONENT",
    drop: (item: { id: number; type: string; label?: string }) => {
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
  return {
    components,
    isOver,
    drop,
  };
};

export default useCalculator;
