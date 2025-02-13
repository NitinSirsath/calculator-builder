import useCalculatorStore from "../../../services/store/calculator/calculatorStore";

const Display = () => {
  const { expression, result } = useCalculatorStore();
  console.log({ expression, result }, "result");
  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg text-right text-2xl font-semibold text-gray-800 shadow-inner">
      {expression || result}
    </div>
  );
};

export default Display;
