import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ComponentType = "button" | "display";

export interface CalculatorComponent {
  id: number;
  type: ComponentType;
  label: string; // Ensure label is required
}

interface CalculatorState {
  components: CalculatorComponent[];
  expression: string;
  result: string;
  addComponent: (component: CalculatorComponent) => void;
  removeComponent: (id: number) => void;
  updateExpression: (value: string) => void;
  evaluateExpression: () => void;
  clearExpression: () => void;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
}

const useCalculatorStore = create<CalculatorState>()(
  persist(
    (set) => ({
      components: [],
      expression: "",
      result: "0",
      addComponent: (component) =>
        set((state) => {
          if (!component.label) {
            console.error(
              "Label is missing when adding a component:",
              component
            );
          }
          return { components: [...state.components, component] };
        }),
      removeComponent: (id) =>
        set((state) => ({
          components: state.components.filter((c) => c.id !== id),
        })),
      updateExpression: (value) =>
        set((state) => ({
          expression:
            state.result && state.result !== "0"
              ? state.result + state.expression + value
              : state.expression + value,
          result: state.result && state.result !== "0" ? "0" : state.result,
        })),
      evaluateExpression: () =>
        set((state) => {
          try {
            const trimmedExpression = state.expression.trim();

            // Handle empty expression
            if (trimmedExpression === "") {
              return { result: state.result, expression: state.expression };
            }

            // Prevent evaluation if expression ends with an operator
            if (/[+\-*/]$/.test(trimmedExpression)) {
              return { result: "Error", expression: "" };
            }

            // Evaluate valid expressions
            const evaluatedResult = eval(trimmedExpression).toString();
            return { result: evaluatedResult, expression: "" };
          } catch {
            return { result: "Error", expression: "" };
          }
        }),

      clearExpression: () => set({ expression: "", result: "0" }),
      moveComponent: (dragIndex, hoverIndex) =>
        set((state) => {
          const updatedComponents = [...state.components];
          const [draggedComponent] = updatedComponents.splice(dragIndex, 1);
          updatedComponents.splice(hoverIndex, 0, draggedComponent);
          return { components: updatedComponents };
        }),
    }),
    {
      name: "calculator-data",
    }
  )
);

export default useCalculatorStore;
