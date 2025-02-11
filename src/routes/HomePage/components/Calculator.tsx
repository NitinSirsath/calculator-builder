import { useDrop } from "react-dnd";
import useCalculatorStore, {
  CalculatorComponent,
} from "../../../services/store/calculator/calculatorStore";
import Button from "./Button";
import Display from "./Display";

const Calculator: React.FC = () => {
  const { components, addComponent } = useCalculatorStore();

  const [{ isOver }, drop] = useDrop({
    accept: "COMPONENT",
    drop: (item: CalculatorComponent) =>
      addComponent({ id: Date.now(), type: item.type }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className="p-4 border rounded-lg w-80 min-h-[300px] bg-gray-100 shadow-lg">
      <h2 className="text-lg font-bold mb-2">Your Calculator</h2>
      <div
        ref={drop}
        className={`p-4 min-h-[200px] ${isOver ? "bg-gray-300" : "bg-white"}`}
      >
        {components.length === 0 ? (
          <p className="text-gray-500 text-center">Drag components here</p>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {components.map((component) =>
              component.type === "button" ? (
                <Button key={component.id} label="?" />
              ) : component.type === "display" ? (
                <Display key={component.id} />
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
