import DarkModeWrapper from "../../../components/theme/DarkModeWrapper";
import useCalculatorStore from "../../../services/store/calculator/calculatorStore";

const Display = () => {
  const { expression, result } = useCalculatorStore();

  return (
    <DarkModeWrapper>
      <div
        className={`w-full p-4 text-right text-2xl font-semibold shadow-inner transition-all 
      `}
      >
        {expression || result}
      </div>
    </DarkModeWrapper>
  );
};

export default Display;
