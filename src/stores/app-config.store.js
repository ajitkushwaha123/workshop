import { create } from "zustand";

const initialState = {
  planId: "zomato-swiggy-workshop",
  plan: null,
};

export const useAppConfigStore = create((set) => ({
  ...initialState,

  setPlanId: (planId) =>
    set({
      planId,
    }),

  setPlan: (plan) =>
    set({
      plan,
    }),
  reset: () => set(initialState),
}));
