import useCalculatorStore from "../../../services/store/calculator/calculatorStore";

const Display: React.FC = () => {
  const { expression, result } = useCalculatorStore();

  return (
    <div className="w-full p-3 bg-gray-200 rounded-md text-right text-xl font-semibold">
      {expression || result}
    </div>
  );
};

export default Display;
