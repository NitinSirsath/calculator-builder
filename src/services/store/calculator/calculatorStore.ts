import { create } from "zustand";

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

const useCalculatorStore = create<CalculatorState>((set) => ({
  components: [],
  expression: "",
  result: "0",
  addComponent: (component) =>
    set((state) => {
      if (!component.label) {
        console.error("Label is missing when adding a component:", component);
      }
      return { components: [...state.components, component] };
    }),
  removeComponent: (id) =>
    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
    })),
  updateExpression: (value) =>
    set((state) => ({
      expression: state.expression + value,
    })),
  evaluateExpression: () =>
    set((state) => {
      try {
        return { result: eval(state.expression).toString(), expression: "" };
      } catch (error) {
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
}));

export default useCalculatorStore;
