import { create } from "zustand";

export type ComponentType = "button" | "display";

export interface CalculatorComponent {
  id: number;
  type: ComponentType;
}

interface CalculatorState {
  components: CalculatorComponent[];
  addComponent: (component: CalculatorComponent) => void;
  removeComponent: (id: number) => void;
}

const useCalculatorStore = create<CalculatorState>((set) => ({
  components: [],
  addComponent: (component) =>
    set((state) => ({ components: [...state.components, component] })),
  removeComponent: (id) =>
    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
    })),
}));

export default useCalculatorStore;
